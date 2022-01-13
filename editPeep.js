const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient

const editPeep = async (peep) => {
  await prisma.peep.update({
    where: {
      id: peep.id
    },
    data: {
      content: peep.content
    }
  })
}

module.exports = editPeep


