const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Servicio', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        detalle: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        duracion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^\d{2}:\d{2}$/ // Expresión regular para validar el formato HH:MM
            }
        },
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        imagen: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated',
        paranoid: true,
      })
}