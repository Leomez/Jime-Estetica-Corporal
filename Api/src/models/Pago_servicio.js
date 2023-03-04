const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pago_servicio', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,            
            primaryKey: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        pagado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        forma_pago: {
            type: DataTypes.ENUM('efectivo','tarjeta')
            
        }


    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated'
    })
}