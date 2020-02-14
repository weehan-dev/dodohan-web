const dbConfig = require('./dbConfig.js')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DB_CONFIG: dbConfig
}
