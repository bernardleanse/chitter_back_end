const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient

const commitPeep = async (content) => {
  await prisma.peep.create({
    data: {
      content: content
    }
  })
};



module.exports = commitPeep