const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    postNo: {
        type: Int16Array,
    },
    title: {
        type: String,
    },
    no_comments: {
        type: Int16Array,
    },
    likes: {
        type: Int16Array,
    },
    writer: {
        type: String,
        maxlength: 50,
    },
    create_time: {
        type: Date,
    },
    views: {
        type: Int16Array,
    },
    content: {
        type: String,
    }
  });

const Post = mongoose.model("Post", postSchema); //1st모델의이름,2nd데이터

module.exports = {Post}; //다른파일에서사용가능