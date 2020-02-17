module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'matchingLog',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
      tableName: 'matchingLog'
    }
  )
}
