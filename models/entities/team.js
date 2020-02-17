module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'team',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      teamCode: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      matchedTeam: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'team',
          key: 'id'
        }
      },
      memberIds: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      isMatching: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: '0'
      },
      teamType: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      preferAge: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      preferSmoking: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      preferReligion: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      preferBodyType: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      preferHeight: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      excludeMajor: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      tableName: 'team'
    }
  )
}
