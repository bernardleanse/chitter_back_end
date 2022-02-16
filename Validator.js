const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient

class Validator {
  constructor(){}
  findUniqueUser(username){
    let isValid;
    const userPromise = prisma.user.findUnique({
      where: {
        username: username
      }
    })
    return userPromise
  }
} 

module.exports = Validator