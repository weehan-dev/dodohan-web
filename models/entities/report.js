module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'report',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      matchingLog: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'matchingLog',
          key: 'id'
        }
      },
      target: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      author: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      content: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: false
      }
    },
    {
      tableName: 'report'
    }
  )
}
