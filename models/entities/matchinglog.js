module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'matchinglog',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      womanTeam: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      manTeam: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      matchedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'matchinglog'
    }
  )
}
