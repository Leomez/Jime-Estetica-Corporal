const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Agenda_cliente', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, 
    {
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated',
        paranoid: true,
    })
}