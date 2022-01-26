const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

const queryUser = async () => {
  const bernardLeanse = await prisma.user.findUnique({
    where: {username: 'bernardleanse'}
  })
  console.log(bernardLeanse)
}

queryUser()