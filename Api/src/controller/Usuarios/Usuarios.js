const { Usuario } = require('../../models')

async function agregarUsuario(req, res) {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Error al crear el usuario"})
    }
}

async function modificarUsuario(req, res) {
    const { id } = req.params;    
    try {
        const [numFilasActualizadas, [usuariosActualizados]] = await Usuario.update( req.body, {where: { id }, returning: true});
        if (numFilasActualizadas) {
            res.json(usuariosActualizados)
        } else {
            res.status(404).json({error: 'Usuario no encontrado'})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error al modificar el usuario'})
    }
}

async function eliminarUsuario(req, res) {
    const { id } = req.params;
    try {
        const numFilasActualizadas = await Usuario.update({delete: true}, { where: { id }});
        if (numFilasActualizadas) {
            res.sendStatus(204)
        } else {
            res.status(404).json({error: 'Usuario no encontrado'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error al eliminar el usuario'})
    }
}

async function obtenerUsuarios(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
  }




module.exports = { agregarUsuario, modificarUsuario, eliminarUsuario, obtenerUsuarios };