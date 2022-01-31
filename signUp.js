const bcrypt = require('bcrypt')
const commitUser = require('./commitUser')

const signUp = (userData) => {
  const saltRounds = 6

  bcrypt.hash(userData.password, saltRounds, (err, hash) => {
    commitUser(err, hash, userData.username)
  })

}

module.exports = signUp