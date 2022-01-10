const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient;

const deletePeep = async (id) => {
  await prisma.peep.delete({
    where: {
      id: parseInt(id)
    }
  })
}

module.exports = deletePeep