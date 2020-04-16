var models = require('../models/index.js');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      //call model.messages.get with parameters and callback
      //when model.messages.get finishes callback will invoke with err, results
      //if err throw err
      //else res.json(results)
      models.messages.get((err, results) => {
        if (err) throw err;
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //call model.messages.post with parameters and callback
      //when model.messages.post finishes callback will invoke with err, results
      //if err throw err
      //else res.json(results)
      models.messages.post(req.json, (err, results) => {
        if (err) throw err;
        res.setStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      //call model.users.get with parameters and callback
      //when model.users.get finishes callback will invoke with err, results
      //if err throw err
      //else res.json(results)

      models.users.get((err, results) => {
        if (err) throw err;
        res.json(results);
      });

    },
    post: function (req, res) {
      //call model.users.post with parameters and callback
      //when model.users.post finishes callback will invoke with err, results
      //if err throw err
      //else res.json(results)
      models.users.post(req.json, (err, results) => {
        if (err) throw err;
        res.json(results);
      });

    }
  }
};
