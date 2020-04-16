var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student'
})

connection.connect(err => {
  if (err) throw err;

  connection.query('use chatterbox;', (err, results) => {
    if (err) throw err;
    console.log('Successfully connected to chatterbox DB');
  })
});

exports.connection = connection;
