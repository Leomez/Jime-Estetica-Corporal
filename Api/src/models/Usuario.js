const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'Usuario', {
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
        email: {
            type: DataTypes.STRING,
            validate: {isEmail: true},
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foto: {
            type: DataTypes.STRING,
            allowNull: true
        }
        // domicilioId: {
        //     type: DataTypes.UUIDV4,
        //     allowNull: false,
        //     references: {
        //       model: 'Domicilio',
        //       key: 'id'
        //     }
        //   }

    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated',
        paranoid: true,
    });
}