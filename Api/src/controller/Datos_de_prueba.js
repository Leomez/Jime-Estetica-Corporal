
const { Usuario, Servicio, Domicilio} = require('../db')
const { usuariosPrueba } = require('./Usuarios/Utils')
const servicios = require('./Servicio/Utils')

async function datosDePrueba() {
    // const data = await usuariosPrueba() 
    
    try {

        
        console.log('Cargando datos de prueba...');
        if (false) {
            await Usuario.bulkCreate(data, { ignoreDuplicates: true });    
            await Servicio.bulkCreate(servicios)    
            
        }
        //carga de usuarios de prueba
    
        console.log('Los registros de prueba han sido creados exitosamente');
        
    } catch (error) {
        console.error(error)        
    }
    
}



module.exports = { datosDePrueba }
