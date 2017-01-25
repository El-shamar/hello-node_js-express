var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello heroku, from github');
});

app.listen(process.env.PORT || 3000);
