var express = require('express');
var path  = require('path');
var open  = require('open');
var parser = require('body-parser');
/* eslint-disable no-console */

const port = 8080;
const app = express();
// serving public files
app.use(express.static('./src/public'));
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