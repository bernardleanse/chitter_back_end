const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient

const postGenericPost = async () => {
  await prisma.peep.create({
    data: {
      content: 'my random peep'
    }
  })
};

postGenericPost()
  .catch(e => {
    throw(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })