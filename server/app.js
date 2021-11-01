var express = require('express');
const fs = require('fs');
// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()
// 웹브라우저에서 보낸 데이터를 받아서 처리하는 body-parser를 불러온다.
var bodyParser = require('body-parser')

// 브라우저에서 오는 응답이 json 일수도 있고, 아닐 수도 있으므로 urlencoded() 도 추가한다.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




let data1 = {};

data1 = JSON.parse(
    fs.readFileSync(__dirname + "/public/data/data1.json", "utf-8")
);

app.set('view engine', 'ejs') // 뷰 엔진을 ejs로 세팅한다
// app.set('port', 4000)

// 3000 포트로 서버 오픈
app.listen(4000, function() {
    console.log("start! express server on port 4000")
})

app.get("/data1.json", (req,res,next) => {
    res.json(data1);
})

//url routing 처리
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/main.html") //__dirname은 요청하고자 하는 파일의 경로를 단축시켜주는 절대경로 식별자.
})
//

app.get('/main', function(req,res) {
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/form', function(req, res){
    res.sendFile(__dirname + "/public/form.html")
})

// app.post('/email_post', function(req, res){
//     res.send("<h1> welcome! </h>" + req.body.email)
// })

app.post('/email_post', function(req, res){
    res.render('email.ejs', {'email' : req.body.email})
})


// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static('public'))