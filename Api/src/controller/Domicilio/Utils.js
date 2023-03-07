const { Domicilio } = require('../../db')


const dom = [
    {
        direccion: 'Calle 1, N° 123',
        ciudad: 'Buenos Aires',
        provincia: 'Buenos Aires',
        codigo_postal: '1414'
      },
      {
        direccion: 'Avenida 2, N° 456',
        ciudad: 'Córdoba',
        provincia: 'Córdoba',
        codigo_postal: '5000'
      },
      {
        direccion: 'Calle 3, N° 789',
        ciudad: 'Rosario',
        provincia: 'Santa Fe',
        codigo_postal: '2000'
      }      
]
async function DomiciliosPrueba(){
 const domCreado = await Domicilio.bulkCreate(dom) 
 return domCreado
}


module.exports = { DomiciliosPrueba }