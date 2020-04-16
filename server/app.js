var express = require('express');
var db = require('./db');
var models = require('./models')

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// app.get('/users', (req,res) => {

// });

// app.get('/messages', (req,res) => {

// });

// app.post('/users', (req,res) => {
//   //call controller function with req.json.username, it returns a promise
//   //.then((promise) => { res <- w.e data & return res })

//   //.then(() => {})
//   //.then(results => res.results)

//   //.then(results => res.results)
// });

// app.post('/messages', (req,res) => {
//   //invoke messages controller with message object
//   //.then(return data) return message back?
// });

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

