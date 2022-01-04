const { PrismaClient } = require(".prisma/client")

const prisma = new PrismaClient

const getAllPeeps = async () => {
  const allPeeps = await prisma.peep.findMany()
  return allPeeps
}

module.exports = getAllPeeps