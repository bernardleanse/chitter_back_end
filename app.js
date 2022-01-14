const express = require('express');
const cors = require('cors');
const commitPeep = require('./commitPeep');
// const { prisma } = require('.prisma/client');
const { PrismaClient } = require('@prisma/client');
const getAllPeeps = require('./getAllPeeps');
const morgan = require('morgan');
const deletePeep = require('./deletePeep');
const editPeep = require('./editPeep');
const app = express();
const port = 3001;




prisma = new PrismaClient

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(JSON.stringify('Hello World!'));
});

app.listen(port, () => {
  console.log(`Chitter Back End listening at http://localhost:${port}`);
});

app.post('/peeps', (req, res) => {
  commitPeep(req.body.content)
    .catch(e => {
      throw(e)
    })
    .finally(async () => {
      await prisma.$disconnect()
      res.sendStatus(200)
    })

  
})

app.delete('/peep/:id', (req, res) => {
  
  deletePeep(req.params.id)
  .catch(e => {
    throw(e)
  })
  .finally(async () => {
    res.sendStatus(200)
    
    await prisma.$disconnect()
    
  })

})

app.patch('/peep', (req, res) => {
  editPeep(req.body)
  .catch(e => {
    throw(e)
  })
  .finally(async () => {
    res.sendStatus(200)
    
    await prisma.$disconnect()
    
  })
})

app.get('/peeps', (req, res) => {
  getAllPeeps()
  .then(peeps => res.send(JSON.stringify(peeps)))
})