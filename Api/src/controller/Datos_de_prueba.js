
const { Usuario, Servicio} = require('../db')
const { usuariosPrueba } = require('./Usuarios/Utils')
const servicios = require('./Servicio/Utils')

async function datosDePrueba() {
    const data = await usuariosPrueba()
    
    try {
        console.log('Cargando datos de prueba...');
        
        //carga de usuarios de prueba
        await Usuario.bulkCreate(data, { ignoreDuplicates: true });    
        await Servicio.bulkCreate(servicios)    
    
        console.log('Los registros de prueba han sido creados exitosamente');
        
    } catch (error) {
        console.error(error)        
    }
    
}



module.exports = { datosDePrueba }
