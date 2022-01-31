const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient

const commitUser = (err, hash, username) => {
  prisma.user.create({
    data: { 
      username: username,
      password: hash
    }
  })
  .catch(e => {
    throw(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
}

module.exports = commitUser