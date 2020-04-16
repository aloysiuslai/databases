var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //select all from messages
      //if err callback(err)
      //else callback(null, dbReturn)
      var queryString = 'select id, userId, room, text from messages';
      var queryArgs = [];
      db.connection.query(queryString, queryArgs, (err, results) => {
        if (err) callback(err);
        callback(null, results);
      })
    }, // a function which produces all the messages

// {username: null, roomname: 'DR', message: 'Hi'}
    post: function (parameters, callback) {
      //takes in message parameters
      //insert into messages blah blah blah using the parameters
      //if err callback(err)
      //else callback(null, message?OK code?)
      var queryString = `insert into messages (userId, roomId, text, createdAt, room) values ((select id from users where name=${parameters.username}), null, ${parameters.message}, null, ${parameters.roomname})`;
      var queryArgs = [];
      db.connection.query(queryString, queryArgs, (err, results) => {
        if (err) callback(err);
        callback(null,result);
      });
    } // a function which can be used to insert a message into the database

  },

  users: {
    get: function (callback) {
      //select all from users
      //if err callback(err)
      //else callback(null, dbReturn)
      var queryString = 'select * from users';
      var queryArgs = [];
      db.connection.query(queryString, queryArgs, (err, results) => {
        if (err) callback(err);
        console.log(results);
      })

    },

    post: function (parameters, callback) {
      //takes in user parameters
      //insert into users blah blah blah using the parameters
      //if err callback(err)
      //else callback(null, username?OK code?)
      var queryString = `insert into users (username) values (${parameters.username})`;
      var queryArgs = [];
      db.connection.query(queryString, queryArgs, (err, results) => {
        if (err) callback(err);
        callback(null,result);
      });
    }
  }
};
