# CS492C-FED
커뮤니케이션 도구 게시판/협업 도구 개발

## Quick instructions

First, clone the repository.
```bash
git clone https://github.com/yuminyumin/CS492C-FED.git
cd CS492C-FED
```

The below command will do the job for you.
```bash
bash all.sh
```

If you have already once run `all.sh`,
then it should be sufficient to only run
```bash
bash run.sh
```

If there seems to be any error while running, try
```bash
bash fix.sh
```

If there is any need to run `npm install`, try
```bash
bash install.sh
```

## Step-by-step instructions

To run the command separately, you should follow the instructions below.

First, clone the repository.
```bash
git clone https://github.com/yuminyumin/CS492C-FED.git
cd CS492C-FED
```

Then you should set up the server.
```bash
cd server
npm install
npm audit fix
cd ..
```

Then you should set up the client.
```bash
cd client
npm install
npm audit fix
cd ..
```

Now you should start both the server and the client.
```bash
bash (cd server; npm start) & (cd client; npm start) && fg
```
