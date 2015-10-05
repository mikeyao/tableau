var express = require('express');
var app = express();
var cors = require('cors'); 

app.use(cors());

app.get('/data', function (req, res){
  var dataToReturn = [];
  for (var week = 1; week <= 12; week++) {
    for (var stage = 0; stage <=6; stage++) {
      var entry = {'time': 'Week ' + week, 'stage': 'Stage ' + stage, 'value': Math.floor(Math.random()*100)};
      dataToReturn.push(entry);
    }
  }
  res.json(dataToReturn);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});