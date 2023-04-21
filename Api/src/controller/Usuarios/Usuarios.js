const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../db')
const { Usuario, Domicilio } = require('../../db')


// controlador para agregar usuario nuevo
async function agregarUsuario(req, res) {
    const t = await sequelize.transaction(); // Iniciar una transacción para que el usuario y la direccion se creen juntos

    try {
        const { domicilio, ...datosUsuario } = req.body;

        console.log(domicilio);

        // Buscar un domicilio existente por dirección
        const [domicilioExistente] = await Domicilio.findOrCreate({
            where: {
                direccion: domicilio.direccion,
                ciudad: domicilio.ciudad,
                provincia: domicilio.provincia,
                codigo_postal: domicilio.codigo_postal
            },
            transaction: t
        });

        // Crear el usuario y asignarle el ID del domicilio
        const nuevoUsuario = await Usuario.create({
            ...datosUsuario,
            domicilioId: domicilioExistente.id
        }, { transaction: t });

        await t.commit(); // Confirmar la transacción

        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error(error);

        await t.rollback(); // Revertir la transacción en caso de error

        res.status(500).json({ error: "Error al crear el usuario" });
    }
}

//controlador para modificar un usuario existente

async function modificarUsuario(req, res) {
    const t = await sequelize.transaction(); // Iniciar una transacción para asegurarnos que se actualicen ambas tablas juntas

    try {
        const { domicilio, ...datosUsuario } = req.body;
        const { id } = req.params;

        // Actualizar el domicilio si existe o crearlo si no
        const [domicilioActualizado] = await Domicilio.upsert(domicilio, {
            where: {
                direccion: domicilio.direccion,
                ciudad: domicilio.ciudad,
                provincia: domicilio.provincia,
                codigo_postal: domicilio.codigo_postal,
            },
            transaction: t
        }
        )

        // Actualizar el usuario y su relación con el domicilio
        const [_, [usuarioActualizado]] = await Usuario.update(
            {
                ...datosUsuario,
                domicilioId: domicilioActualizado.id,
            },
            {
                where: {
                    id,
                },
                returning: true,
                transaction: t,
            }
        );

        await t.commit(); // Confirmar la transacción

        res.json(usuarioActualizado);
    } catch (error) {
        console.error(error);

        await t.rollback(); // Revertir la transacción en caso de error

        res.status(500).json({ error: "Error al actualizar el usuario" });
    }
}

//controlador para eliminar un usuario (soft delete)


const eliminarUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await Usuario.findOne({ where: { id } });
        if (!user) {
            return res.status(404).json({ error: 'El usuario no existe' });
        }

        await user.destroy();
        return res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

async function restaurarUsuario(req, res) {
    const { id } = req.params
    try {
        const usuarioRestaurado = await Usuario.restore({ where: { id: id } })
        if (usuarioRestaurado) {
            res.status(200).json({ message: "Usuario restaurado exitosamente" })
        } else {
            res.status(404).json({ error: "Usuario no encontrado" })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
}


async function obtenerUsuarios(req, res) {
    const nombre = req.query.nombre
    const apellido = req.query.apellido


    try {
        const usuarios = await Usuario.findAll();
        if (nombre) {
            console.log('entro por query');
            let usuario = usuarios.filter(us => us.nombre.toLowerCase() === nombre.toLowerCase())
            usuario.lenth ?
                res.status(200).send(usuario) :
                res.status(404).send("usuario no encontrado")
        }
        else if (apellido) {
            let usuario = usuario.filter(us => us.apellido.toLowerCase() === apellido.toLowerCase())
            usuario.lenth ?
                res.status(200).send(usuario) :
                res.status(404).send("usuario no encontrado")
        } else {
            res.status(200).send(usuarios)
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}

async function loginUsuario(req, res) {
    const { username, pass } = req.body
    try {
        const usuario = Usuario.findOne({
            where: {
                username: username,
                pass: pass
            }
        })
        if (usuario) {
            res.status(200).send(usuario);
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
}

// async function obtenerUsuariosXId(req, res) {
//     const { id } = req.params
//     console.log(id);
//     try {
//         const usuarios = await Usuario.findAll();
//         // console.log(usuarios);
//         // let listaUsuarios = usuarios.map( us => console.log(us.dataValues.id))
//         let usuario = usuarios.filter(us => us.dataValues.id == id)
//         usuario.length ?
//             res.status(200).send(usuario) :
//             res.status(404).send("usuario no encontrado")

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error al obtener los usuarios' });
//     }
// }


// parece ser mas eficiente
async function obtenerUsuarioXId(req, res) {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: id
            }
        });
        if (usuario) {
            res.status(200).send(usuario);
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
}




module.exports = { 
    agregarUsuario, 
    modificarUsuario, 
    eliminarUsuario, 
    obtenerUsuarios, 
    obtenerUsuarioXId, 
    restaurarUsuario, 
    loginUsuario 
};