const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Turno',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^\d{2}:\d{2}$/ // Expresión regular para validar el formato HH:MM
            }
        },
        usuarioId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'Usuario',
              key: 'id'
            }
          },
          servicioId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: 'Servicio',
              key: 'id'
            }
          }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: 'updated',
        paranoid: true,
    })
}