const bcrypt = require('bcrypt')
const commitUser = require('./commitUser')
const Validator = require('./Validator')
const validator = new Validator

const signUp = async (userData) => {
  const saltRounds = 6
    const hash = bcrypt.hash(userData.password, saltRounds, (err, hash) => {
      commitUser(err, hash, userData.username)
    })
}

module.exports = signUp