/* eslint-disable no-undef */
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 4000;
const dbAddress = 'mongodb+srv://dain:1234@cluster0.hq96u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// eslint-disable-next-line no-undef
const {User} = require('./models/User');
// eslint-disable-next-line no-undef
const mongoose = require("mongoose");
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.listen(port, () => {
    console.log('서버가 가동중입니다');
});

mongoose
    .connect(dbAddress, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("MongoDB Connected"))
    .catch((err)=> console.log(err));

app.get('/api/hello', (req, res) => {
    res.send("하하하하하하");
});

app.post("/api/user/register", async(req, res) => {
    res.set('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Origin", req.headers.origin);

    const user = new User(req.body);
    var userList = mongoose.model("User");
    if(user.userName == ""){
      return res.status(200).json({ success: true });
    }
    userList.findOne({userID: user.userID}, function(err, sameUser){
        if(err){
          return res.json({ success: false, err });
        }else {
          if(sameUser != null){ //이미 같은 유저가 디비에 있을떄
            return res.json(
            {
              userID: user.userID,
              password: user.password,
            });
          }
        }
      })
    user.save((err, userInfo) => {
      if (err) { 
        console.log(err);
        return res.json({ success: false, err });
      }
      console.log("save");
      return res.status(200).json(
      {
        userID: user.userID,
        password: user.password
      });
    });
  });

app.get("/api/user/users", async(req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.header("Access-Control-Allow-Origin", req.headers.origin);

  const users = await User.find({});
  // console.log(users);
  res.json(users);
});