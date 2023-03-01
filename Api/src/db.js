require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
    DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})

const basename = path.basename(__filename);

const modelDefiners = []

//Leo todos los archivos de la carpeta models, los requiero y agrego al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, './models', file))
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




module.exports = {
    ...sequelize.models, //uso esta spread para poder importar los modelos así: const { Producto, Usuario } = require('./db.js');
    conn: sequelize
};