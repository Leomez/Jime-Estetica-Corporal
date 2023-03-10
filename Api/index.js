const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { datosDePrueba } = require('./src/controller/Datos_de_prueba.js')

conn.sync({ force: false }).then(() => {

    server.listen(3001, async () => {
        await datosDePrueba();
        console.log('%s server escuchando en puerto 3001');
    })

})