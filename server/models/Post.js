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
    type: String,
    default: Date.now,
  },
  views: {
    type: Number,
  },
  content: {
    type: String,
  },
  likeUsers: {
    type: [String],
  },
});

postSchema.methods.addLike = function (userID) {
  let i = 0;
  for (i = 0; i < this.likeUsers.length; i += 1) {
    if (this.likeUsers[i] === userID) {
      console.log('this user already liked');
      return this.save();
    }
  }
  this.likes += 1;
  this.likeUsers.push(userID);
  return this.save();
};

postSchema.methods.deleteLike = function (userID) {
  let i = 0;
  for (i = 0; i < this.likeUsers.length; i += 1) {
    if (this.likeUsers[i] === userID) {
      this.likes -= 1;
      this.likeUsers.pull(userID);
      return this.save();
    }
  }
  console.log('this user have not liked');
  return this.save();
};

const Post = mongoose.model('Post', postSchema);

module.exports = { Post };
