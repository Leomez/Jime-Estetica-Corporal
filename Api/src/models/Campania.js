const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Campania', {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        titulo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        contenido: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        contactos: {
          type: DataTypes.BIGINT,
          defaultValue: 0,
        },
        rating: {
          type: DataTypes.ENUM('0','1','2','3','4','5'),
          defaultValue: '0',
        },
        publicado: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
        archivado: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },

        //FK que refiere a la tabla servicio
        servicioId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Servicio',
            key: 'id'
          }
        }
    },
        {
            timestamps: true,
            createdAt: 'created',
            updatedAt: 'updated',
            paranoid: true,
        })
}