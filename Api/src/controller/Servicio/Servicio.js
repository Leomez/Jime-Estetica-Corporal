const { sequelize } = require('../../db')
const { Servicio } = require('../../db')

// controlador para agregar un servicio nuevo

async function agregarServicio(req, res) {
    const datos = req.body
    try {
        const nuevoServicio = await Servicio.create(datos)
        res.status(200).json(nuevoServicio)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Error al crear el servicio' })
    };
};

async function traerServicios(req, res) {
    try {
        const servicios = await Servicio.findAll();
        res.status(200).json(servicios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los servicios' });
    }
};

async function traerServicioXId(req, res) {
    const { id } = req.params
    try {
        const servicio = await Servicio.findByPk(id);
        if (servicio) {
            res.status(200).json(servicio);
        } else {
            res.status(404).json({ message: 'Servicio no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el servicio' });
    }
};


// controlador para actualizar servicio...   
async function actaualizarServicio(req, res) {
    const { id } = req.params
    try {
        const { nombre, detalle, precio, duracion, estado, imagen } = req.body;
        const servicio = await Servicio.findByPk(id);
        if (servicio) {
            //(tratar de refactorizar con desestructuracion)
            servicio.nombre = nombre || servicio.nombre;
            servicio.detalle = detalle || servicio.detalle;
            servicio.precio = precio || servicio.precio;
            servicio.duracion = duracion || servicio.duracion;
            servicio.estado = estado || servicio.estado;
            servicio.imagen = imagen || servicio.imagen;
            await servicio.save();
            res.status(200).json(servicio);
        } else {
            res.status(404).json({ message: 'Servicio no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el servicio' });
    }
};

async function eliminarServicio(req, res) {

    const { id } = req.params
    try {
        const servicio = await Servicio.findByPk(id);
        if (servicio) {
            await servicio.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Servicio no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el servicio' });
    }
};

// fataria un controlador para el search por query... si es necesario...




module.exports = { agregarServicio, traerServicios, traerServicioXId, actaualizarServicio, eliminarServicio }