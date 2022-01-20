const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient

const commitPeep = async (peep) => {
  await prisma.peep.create({
    data: {
      content: peep.content,
      authorId: peep.authorId
    }
  })
};

module.exports = commitPeep