# CS492C-FED
커뮤니케이션 도구 게시판/협업 도구 개발

## Git pull 받은 후 해야 할 것

  npm install

위 명령어는 패키지 다운받는 코드이므로, git pull 받은 후 한번씩 꼭 해줘야 함

## directory 구조 (중요한 것만)
+ board
  + node_modules
  + public
  + src
    + component
    + images
    + page
    + App.js
    + index.js
    + actions
    + reducer
    + utils
+ Server
  + index.js
  + models
    + User.js
중요한 구조만 써놓았습니다.

### frontend 실행
board % npm start

### backend(서버)실행
Server % npm start


### 패키지 설치 시 --save 옵션
npm install (something) --save
