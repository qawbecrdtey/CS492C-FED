const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    maxlength: 15,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
