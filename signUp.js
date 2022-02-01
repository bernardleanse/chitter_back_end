const bcrypt = require('bcrypt')
const commitUser = require('./commitUser')
const validateUserData = require('./validateUserData')


const signUp = (userData) => {
  const saltRounds = 6
  const userDataIsValid = validateUserData(userData)

  if(userDataIsValid){
    bcrypt.hash(userData.password, saltRounds, (err, hash) => {
      commitUser(err, hash, userData.username)
    })
    return true
  } else {
    return false
  }
  

}

module.exports = signUp