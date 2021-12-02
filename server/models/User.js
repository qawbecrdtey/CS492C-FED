const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    maxlength: 20,
    required: true,
  },
  password: {
    type: String,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    maxlength: 30,
    required: true,
  },
  age: {
    type: String,
    maxlength: 30,
    required: true,
  },
  phoneNum: {
    type: String,
    maxlength: 20,
    required: true,
  },
});

const User = mongoose.model('User', userSchema); // 1st모델의이름,2nd데이터

module.exports = { User }; // 다른파일에서사용가능
