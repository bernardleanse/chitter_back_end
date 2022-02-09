const { PrismaClient } = require("@prisma/client")
const Validator = require("./Validator")
const prisma = new PrismaClient()
const validator = new Validator


const validateUserData = async (data) => {
  const validUsername = await validator.isUsernameUnique(data.username)
  return validUsername
}

module.exports = validateUserData