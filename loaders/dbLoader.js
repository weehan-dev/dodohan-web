const Sequelize = require('sequelize')
const config = require('../config')
const path = require('path')

const env = config.NODE_ENV
const db_config = config.DB_CONFIG[env] || 'development'

let db = {}

let sequelize = new Sequelize(
  db_config.database,
  db_config.username,
  db_config.password,
  {
    host: db_config.host,
    dialect: 'mysql'
  }
)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = require('../models/entities/user')(sequelize, Sequelize)
db.Team = require('../models/entities/team')(sequelize, Sequelize)
db.Report = require('../models/entities/report')(sequelize, Sequelize)
db.MatchingLog = require('../models/entities/matchingLog')(sequelize, Sequelize)

module.exports = db.sequelize
