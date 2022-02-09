const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient

const commitUser = (err, hash, username) => {
  const userDidCommit = false
  prisma.user.create({
    data: { 
      username: username,
      password: hash
    }
  })
  .catch((e) => {
    throw(e)
  })
  .finally(async (e) => {
    await prisma.$disconnect()
    console.log(e)
  })
}

module.exports = commitUser