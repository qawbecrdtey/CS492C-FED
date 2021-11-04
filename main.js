var http = require("http");
var fs = require("fs");

var app = http.createServer(function(request, response) {
    var url = request.url;
    if(request.url == '/') {
        url = "/index.html";
    }
    if(request.url == "/favicon.ico") {
        return response.writeHead(404);
    }
    if(request.url == "naver_login.html") {
        url = "/naver_login.html";
    }
    if(request.url == "naver_callback.html") {
        url = "/naver_callback.html";
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
    
});

app.listen(3000);