const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    maxlength: 20,
  },
  password: {
    type: String,
    maxlength: 30,
  },
  ownPosts: {
    type: [Number],
  },
  likedPosts: {
    type: [Number],
  },
  comments: {
    type: [{ postNO: Number, commentNO: Number }],
  },
});

userSchema.methods.addOwnPosts = function (postNO) {
  this.ownPosts.push(postNO);
  return this.save();
};

// userSchema.pre('save', function(next){
//   var user = this;
//   if (user.isModified('password')){
//     bcrypt.genSalt(saltRounds, function(err, salt){
//       if (err) return next(err);

//       bcrypt.hash(user.password, salt, function(err, hash){
//         if (err) return next(err);
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     next();
//   }
// });

// userSchema.methods.comparePassword = function (planePassword, cb) {
//   bcrypt.compare(planePassword, this.password, function (err, isMatch) {
//     //isMatch는 맞으면true를반환
//     //1st:사용자가입력하여암호화된패스워드,2nd:기존DB 패스워드,3rd:콜백함수
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };
// userSchema.methods.generateToken = function (cb) {
//   var user = this;
//   //jsonwebtoken을 이용해서 토큰을 생성하기
//   var oneHour = moment().add(1, "hour").valueOf();

//   user.token = token;
//   user.tokenExp = oneHour;
//   user.save(function (err, user) {
//     if (err) return cb(err);
//     cb(null, user);
//   });
// };

// userSchema.statics.findByToken = function (token, cb) {
//   var user = this;

//   //토큰을 decode한다.
//   jwt.verify(token, "secretToken", function (err, decoded) {
//     //decoded:복호화된_id값
//     //유저아이디를 이용해서 유저를 찾은 다음에 클라이언트에서 가져온 token과
//     //DB에 보관된 토큰이 일치하는지 확인
//     //저장할때 user._id + 'secretToken'으로 저장했기 때문에 복호화할때도
//     //'secretToken'때고 user_.id만 복호화해서 decoded에 저장됨

//     user.findOne({ _id: decoded, token: token }, function (err, user) {
//       if (err) return cb(err);
//       cb(null, user);
//     });
//   });
// };

const User = mongoose.model('User', userSchema); // 1st모델의이름,2nd데이터

module.exports = { User }; // 다른파일에서사용가능
