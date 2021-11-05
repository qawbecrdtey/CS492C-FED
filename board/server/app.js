var express = require('express');
// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express()
// 웹브라우저에서 보낸 데이터를 받아서 처리하는 body-parser를 불러온다.
var bodyParser = require('body-parser')
var client_id = '_xriyns1iwvtRUz9k3eE';
var client_secret = 'Z6ce5YPyai';
var state = "RANDOM_STATE";
var redirectURI = encodeURI("http://localhost:4000/api/callback");
// var redirectURI = encodeURI("http://localhost:3000/Logined");
// var redirectURI = encodeURI("http://localhost:4000/Logined");
var api_url = "";

// 브라우저에서 오는 응답이 json 일수도 있고, 아닐 수도 있으므로 urlencoded() 도 추가한다.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))




// let data1 = {};

// data1 = JSON.parse(
//     fs.readFileSync(__dirname + "/public/data/data1.json", "utf-8")
// );

// app.set('view engine', 'ejs') // 뷰 엔진을 ejs로 세팅한다

// 4000 포트로 서버 오픈
app.listen(4000, function() {
    console.log("start! express server on port 4000")
})


app.get('/api/hello', (req, res)=> {
    res.send("서버연결성공");
});

app.get('/api/naverlogin', function (req, res) {
    api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // res.end("<a href='"+ api_url + "'><img height='50' src='http://static.nid.naver.com/oauth/small_g_in.PNG'/></a>");
    res.end(api_url);
});

app.get('/api/callback', function (req, res) {
    // eslint-disable-next-line no-undef
    code = req.query.code;
    state = req.query.state;
    api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='
    // eslint-disable-next-line no-undef
    + client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirectURI + '&code=' + code + '&state=' + state;
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.get(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        res.end(body);
    } else {
        res.status(response.statusCode).end();
        console.log('error = ' + response.statusCode);
    }
    });
});




// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
app.use(express.static('public'))