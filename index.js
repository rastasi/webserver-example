const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('public'))

app.post('/create-post', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.get('/people', (req, res) => {
  res.json({
    people: [
      {
        name: 'Tasi',
        age: 35,
      },
      {
        name: 'Gábor',
        age: 30,
      },
      {
        name: 'Manci',
        age: 28,
      },
      {
        name: 'Bubu',
        age: 19,
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
