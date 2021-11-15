const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  postNO: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  no_comments: {
    type: Number,
  },
  likes: {
    type: Number,
  },
  userID: {
    type: String,
    maxlength: 50,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
  },
  content: {
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
