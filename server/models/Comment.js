const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  writer: {
    type: String,
  },
  content: {
    type: String,
  },
  created_date: {
    type: String,
  },
  postNO: {
    type: Number,
  },

});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };
