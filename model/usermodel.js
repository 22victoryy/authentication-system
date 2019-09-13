var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
  name: {
    type: String,
    requred: True
  },
  email: {
    type: String,
    requred: True
  },
  password: {
    type: String,
    requred: True
  },
  date: {
    type: Date,
    default: Date.now
  },
});

var user = mongoose.model('User', userschema);

module.exports = user;