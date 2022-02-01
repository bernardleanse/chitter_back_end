const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const isUsernameUnique = (username) => {
  
}

const validateUserData = (data) => {
  const validUsername = isUsernameUnique(data.username)
}

module.exports = validateUserData