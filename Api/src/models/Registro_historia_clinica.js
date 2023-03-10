const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Registro_historia_clinica', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        registro: {
            type: DataTypes.TEXT
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated',
        paranoid: true,
    })
}