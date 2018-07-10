const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/daily/:date', (req, res) => {
  const { date } = req.params;
  const items = [];
  db.fetchItem(date).then((data) => {
    data.forEach((item) => {
      items.push([item.date, item.category, item.description, item.amount]);
    });
    res.send(items);
  }).catch((err) => { throw err; });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
