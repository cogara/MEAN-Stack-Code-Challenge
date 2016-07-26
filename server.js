var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var grocery = require('./routes/grocery.js');
var index = require('./routes/index.js');
var app = express();

//static and config files
var mongoURI = 'mongodb://localhost:27017/grocery-list';
var MongoDB = mongoose.connect(mongoURI).connection;
app.use(express.static('public'));
app.use(bodyParser.json());

MongoDB.on('error', function() {
  console.log('Connection to MongoDB error');
});

MongoDB.once('open', function() {
  console.log('Connected to MongoDB');
})

//routes
app.use('/', index);
app.use('/grocery', grocery);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});
