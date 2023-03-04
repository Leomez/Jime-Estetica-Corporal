const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Newsletter', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        codigo: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        confirmacion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt: 'updated',
            paranoid: true,
        });
}