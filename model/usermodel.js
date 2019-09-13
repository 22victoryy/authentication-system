// var mongoose = require('mongoose');

// var userschema = new mongoose.Schema({
//   name: {
//     type: String,
//     requred: true
//   },
//   email: {
//     type: String,
//     requred: true
//   },
//   password: {
//     type: String,
//     requred: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
// });

// var User = mongoose.model('User', userschema);

// module.exports = User;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
