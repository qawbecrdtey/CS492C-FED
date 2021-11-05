const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

router.post("/login", (req, res) => {
    //요청된 이메일을 데이터베이스에서 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
      //몽고db에서 제공하는메소드
      if (!user)
        return res.json({
          loginSuccess: false,
          message: "Auth failed, email not found",
        });
      //요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({ loginSuccess: false, message: "Wrong password" });
        //비밀번호까지 동일하다면 토큰을 생성하기.
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err); //400이면에러가있으면 err를전달해라는의미
          //토큰을 저장한다. 어디에 ? 쿠키 or 로컬스토리지
          res.cookie("x_authExp", user.tokenExp);
          res.cookie("x_auth", user.token).status(200).json({
            loginSuccess: true,
            userId: user._id,
          });
        });
      });
    });
  });

  router.get("/auth", auth, (req, res) => {
    //여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication 이 True라는말
    res.status(200).json({
      _id: req.user._id,
      isAdmin: req.user.role === 0 ? false : true, //0이면 일반유저,0이아니면 관리자
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      image: req.user.image,
    });
  });

  app.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate(
      { _id: req.user._id },
      { token: "", tokenExp: "" },
      (err, doc) => {
        //1st:찾고자하는 데이터 2nd:변경할 데이터(토큰을지워줌) , 3th:데이터반환
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true,
        });
      }
    );
  });