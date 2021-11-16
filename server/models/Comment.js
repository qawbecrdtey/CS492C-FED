const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  postNO: {
    type: Number,
  },
  commentNO: {
    type: Number,
  },
  userID: {
    type: String,
  },
  content: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
