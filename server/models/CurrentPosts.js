const mongoose = require('mongoose');

const currentPostSchema = mongoose.Schema({
  num_of_total_posts: {
    type: Number,
  },
  current_top_post_num: {
    type: Number,
  },
});

const CurrentPosts = mongoose.model('CurrentPosts', currentPostSchema);

module.exports = { CurrentPosts };
