const server = require('./src/app.js')


server.listen(3001, () => {
    console.log('%s server escuchando en puerto 3001');
})