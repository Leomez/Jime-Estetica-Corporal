const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Ficha', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dni: {
            type: DataTypes.STRING,
            allowNull: true
        },

        fecha_nacimiento: {
            type: DataTypes.DATE,
            allowNull: true,
            precision: 6
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated',
        paranoid: true,
    })
}