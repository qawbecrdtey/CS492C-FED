const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  commentNO: {
    type: Number,
  },
  writer: {
    type: String,
  },
  content: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  postID: {
    type: Number,
  },

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
