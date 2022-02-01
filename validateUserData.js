const { PrismaClient } = require("@prisma/client")
const Validator = require("./Validator")
const prisma = new PrismaClient()
const validator = new Validator


const validateUserData = (data) => {
  const validUsername = validator.isUsernameUnique(data.username)
  console.log(validUsername)
}

module.exports = validateUserData