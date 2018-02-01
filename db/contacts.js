const db = require('./db');

const CONTACTS = {
  add: (email, message) => {
    return db.none(`INSERT into CONTACTS (email,message) VALUES ($1, $2)`,[email, message])
  },
  delete: (id) => db.none(`DELETE from CONTACTS WHERE id=$1::id` [id])
}

module.exports = CONTACTS
