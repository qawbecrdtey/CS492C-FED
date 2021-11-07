var http = require("http");
var fs = require("fs");

// Example constants
const articleCount = 123;
const articlesPerPage = 10;

function makeArticleHTML(articleNo) {
    return '\
        <div class="article_html">\
            <p>Article number ' + articleNo + '</p>\
        </div>\
    ';
}

function getArticles(idx) {
    var returnStr = "";
    var articleNo;
    for(articleNo = (idx - 1) * articlesPerPage + 1; articleNo <= articleCount && articleNo <= idx * articlesPerPage; articleNo++) {
        returnStr += makeArticleHTML(articleNo);
    }
    return returnStr;
}

function makePaginationPage(idx) {
    // Get information from database.
    return '\
        <!DOCTYPE html>\
        <head>\
            <html lang="en">\
            <meta charset="utf-8">\
            <title>Main page</title>\
        </head>\
        <body>\
            <!-- SAMPLE BODY -->\
            <div class="contents">\
                <h1>Welcome to page' + idx + ' of pagination page.</h1>\
            </div>\
            <div class="articles">'
                + getArticles(idx) + '\
            </div>\
        </body>\
    ';
}

var app = http.createServer(function(request, response) {
    var url = request.url;
    console.log(request.url);
    if(request.url === '/') {
        url = "/index.html";
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + url));
    }
    else if(request.url === "/index.js") {
        url = "/index.js";
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + url));
    }
    else if(request.url.startsWith("/pagination")) {
        const idx = parseInt(request.url.split('/')[2]);
        if(idx <= 0 || idx > (articleCount / articlesPerPage) + 1){
            return response.writeHead(404);
        }
        const htmlPage = makePaginationPage(idx);
        response.writeHead(200);
        response.end(htmlPage);
    }
    else return response.writeHead(404);
});

app.listen(3000);