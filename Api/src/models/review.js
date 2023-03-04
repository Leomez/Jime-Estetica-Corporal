const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        score: {
          type: DataTypes.ENUM('1','2','3','4','5'),
          allowNull: false,
        },
        titleComment: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        comment: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        visible: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        },
        archived: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        //FK que refiere a la tabla usuario
        usuarioId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Usuario',
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