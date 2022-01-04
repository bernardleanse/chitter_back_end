const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(JSON.stringify('Hello World!'));
});

app.listen(port, () => {
  console.log(`Chitter Back End listening at http://localhost:${port}`);
});

app.post('/peeps', (req, res) => {
  res.send("/peeps post generic response")
})