require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Estetic_Jime`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    define: {
        freezeTableName: true // Para que no le cambie el nombre a todas las tablas y no me genere errores como que alguna tabla no existe
      }
})

const basename = path.basename(__filename);

const modelDefiners = []

//Leo todos los archivos de la carpeta models, los requiero y agrego al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

//Injecto la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//en sequelize estan todos los modelos importados como propiedades
//para relacionarlos hago un destructuring
console.log('conectando base de datos...');
const {Agenda_cliente, Usuario, Turno, Review, Servicio, Campania, Domicilio, Newsletter, Pago_servicio} = sequelize.models;




//relaciones:

// Defino la relación uno a muchos entre usuario y domicilio
Domicilio.hasMany(Usuario, {foreignKey: "domicilioId"});
Usuario.belongsTo(Domicilio, {foreignKey: "domicilioId"});

Usuario.hasMany(Turno);
// Agrego la clave foránea usuarioId a la tabla turno
Turno.belongsTo(Usuario);

Servicio.hasMany(Turno);
// Agrego la clave foránea servicioId a la tabla turno
Turno.belongsTo(Servicio);

//relaciono usuario con servicios muchos a mucho y le indico la tabla intermedia turno
Usuario.belongsToMany(Servicio, { through: Turno });
Servicio.belongsToMany(Usuario, { through: Turno });

// Defino la relación uno a uno
Turno.hasOne(Pago_servicio);
// Agrego la clave foránea a la tabla Pago_servicio
Pago_servicio.belongsTo(Turno)

// Defino la relación uno a uno
Usuario.hasOne(Newsletter);
// Agrego la clave foránea a la tabla Newslatter
Newsletter.belongsTo(Usuario)

// Defino la relación uno a uno
Usuario.hasOne(Agenda_cliente);
// Agrego la clave foránea a la tabla Agenda_cliente
Agenda_cliente.belongsTo(Usuario)

// Defino la relación uno a muchos entre usuario y review
Usuario.hasMany(Review);
Review.belongsTo(Usuario);

// Defino la relación uno a muchos entre campaña y servicio
Servicio.hasMany(Campania);
Campania.belongsTo(Servicio);

console.log('Base de datos conectada exitosamente');

module.exports = {
    ...sequelize.models, //uso esta spread para poder importar los modelos así: const { Producto, Usuario } = require('./db.js');
    conn: sequelize,
    Op
};