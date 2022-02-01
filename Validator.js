const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient

class Validator {
  constructor(){}
  async isUsernameUnique(username){
    let isValid;
    const user = await prisma.user.findUnique({
      where: {
        username: username
      }
    })

    if(user){
      return false
    }
    
    return true
  }
} 

module.exports = Validator