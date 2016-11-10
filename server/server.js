var express = require('express');
var path  = require('path');
var open  = require('open');
var parser = require('body-parser');
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
      // change for production
    open(`http://localhost:${port}`);
  }
});
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));