const pgp = require('pg-promise')()
const config = {
  host: 'localhost',
  port: 5432,
  database: 'Stephany'
}
const db = pgp(config)

module.exports = db
