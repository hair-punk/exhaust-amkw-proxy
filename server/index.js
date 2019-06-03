const express = require('express');
const morgan = require('morgan');

let app = express();
const port = 3000;

app.use(express.static(__dirname + '/../public'));
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.statusCode(200);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});