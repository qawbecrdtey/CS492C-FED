/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable vars-on-top */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-disable consistent-return */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-undef */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const dbAddress = 'mongodb+srv://dain:1234@cluster0.hq96u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// eslint-disable-next-line no-undef
const { User } = require('./models/User');
const { Post } = require('./models/Post');
const { CurrentPosts } = require('./models/CurrentPosts');
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use('/api/comment', require('./routes/comment'));

app.listen(port, () => {
  console.log('서버가 가동중입니다');
});

mongoose
  .connect(dbAddress, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/api/hello', (req, res) => {
  res.send('하하하하하하');
});

app.post('/api/post/register', async (req, res) => {
  var postList = mongoose.model('Post');
  var userList = mongoose.model('User');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);

  const post = new Post(req.body);
  if (post.postNO === '') {
    return res.status(200).json({ success: false, err });
  }
  postList.findOne({ postNO: post.postNO }, function (err, samePost) {
    if (err) {
      return res.json({ success: false, err });
    }
    if (samePost != null) {
      console.log('same postNO');
      return res.json({ success: false, err });
    }
  });
  userList.findOne({ userID: post.userID }, function (err, sameUser) {
    if (err) {
      return res.json({ success: false, err });
    }
    console.log(sameUser.userID);
    if (sameUser != null) { // 이미 같은 유저가 디비에 있을떄
      console.log('user ownpost add');
      sameUser.addOwnPosts(post.postNO);
    }
  });
  post.save((err) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, err });
    }
    console.log('save post');
  });
});

app.post('/api/post/edit', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  const post = new Post(req.body);
  var postList = mongoose.model('Post');

  postList.findOneAndUpdate({ postNO: post.postNO }, { title: post.title, created_date: post.created_date, content: post.content }, (err) => {
    if (err) return res.json({ success: false, err });
    console.log('edit post');
  });
});

app.post('/api/post/like', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  var userList = mongoose.model('User');
  var postList = mongoose.model('Post');

  console.log('userID : ' + req.body.userID);
  console.log('postNO : ' + req.body.postNO);
  console.log('userList : ' + userList);
  userList.findOne({ userID: req.body.userID }, function (err, sameUser) {
    if (err) return res.json({ success: false, err });
    // console.log('sameuser : ' + sameUser);
    if (sameUser != null) {
      sameUser.addLikedPosts(req.body.postNO);
    }
  });
  postList.findOne({ postNO: req.body.postNO }, function (err, samePost) {
    if (err) return res.json({ success: false, err });
    // console.log('samePost : ' + samePost);
    if (samePost != null) {
      samePost.addLike();
    }
  });
});

app.post('/api/post/unlike', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  var userList = mongoose.model('User');
  var postList = mongoose.model('Post');

  userList.findOne({ userID: req.body.userID }, function (err, sameUser) {
    if (err) return res.json({ success: false, err });
    // console.log('sameUser : ' + sameUser);
    if (sameUser != null) {
      sameUser.deleteLikedPosts(req.body.postNO);
    }
  });
  postList.findOne({ postNO: req.body.postNO }, function (err, samePost) {
    if (err) return res.json({ success: false, err });
    // console.log('samePost : ' + samePost);
    if (samePost != null) {
      samePost.deleteLike();
    }
  });
});

app.post('/api/post/islike', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  var userList = mongoose.model('User');
  console.log('islike');

  userList.findOne({ userID: req.body.userID }, function (err, sameUser) {
    if (err) return res.json({ success: false, err });
    if (sameUser != null) {
      // for (i = 0; i < sameUser.likedPosts.length; i += 1) {
      //   if (req.body.postNO === sameUser.likedPosts[i]) {
      //     return res.status(200).json(
      //       {
      //         is: true,
      //       },
      //     );
      //   }
      //   break;
      // }
      return res.status(200).json(sameUser.likedPosts);
    }
  });
});

app.post('/api/user/register', async (req, res) => {
  var userList = mongoose.model('User');
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);

  const user = new User(req.body);
  if (user.userName === '') {
    return res.status(200).json({ success: true });
  }
  userList.findOne({ userID: user.userID }, function (err, sameUser) {
    if (err) {
      return res.json({ success: false, err });
    }
    if (sameUser != null) { // 이미 같은 유저가 디비에 있을떄
      console.log('same user');
      return res.json(
        {
          userID: user.userID,
          password: user.password,
        },
      );
    }
  });
  user.save((err) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, err });
    }
    console.log('save user');
    return res.status(200).json(
      {
        userID: user.userID,
        password: user.password,
      },
    );
  });
});

app.post('/api/user/modifyuser', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);

  console.log('modify');
  const user = new User(req.body);
  var userList = mongoose.model('User');
  if (user.userName === '') {
    return res.status(200).json({ success: true });
  }

  userList.findOneAndUpdate({ userID: user.userID }, { password: user.password }, (err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json(
      {
        userID: user.userID,
        password: user.password,
      },
    );
  });
});

app.get('/api/user/users', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);

  const users = await User.find({});
  // console.log(users);
  res.json(users);
});

app.get('/api/post/posts', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  console.log('getallpost');
  const posts = await Post.find({});
  res.json(posts);
});

app.get('/api/post/currentposts', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  console.log('getcurrentposts');
  const currentposts = await CurrentPosts.find({});
  res.json({
    num_of_total_posts: currentposts[0].num_of_total_posts,
    current_top_post_num: currentposts[0].current_top_post_num,
  });
});

app.post('/api/post/updatepostnum', async (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  console.log('updatepostnum');
  const currentPost = new CurrentPosts(req.body);
  console.log('numoftotal : ' + currentPost.num_of_total_posts);
  console.log('currenttoppostnum : ' + currentPost.current_top_post_num);
  var currentPostsInfo = mongoose.model('CurrentPosts');
  currentPostsInfo.findOneAndUpdate({}, { num_of_total_posts: currentPost.num_of_total_posts, current_top_post_num: currentPost.current_top_post_num }, (err) => {
    if (err) return res.json({ success: false, err });
    // return res.status(200).json(
    //   {
    //     num_of_total_posts: currentPost.num_of_total_posts,
    //     current_top_post_num: currentPost.current_top_post_num,
    //   },
    // );
  });
});
