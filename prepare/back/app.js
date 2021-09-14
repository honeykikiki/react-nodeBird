const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const hpp = require('hpp');
const helmet = require('helmet');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
passportConfig();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan('dev'));
}

// cors문제 해결
app.use(
  cors({
    origin: ['http://localhost:3060', 'nodebird.com', 'http://52.79.192.176/'], // 허용하는 페이지 주소
    credentials: true, // 쿠키를 전해줄떄
  }),
);
// 이미지 파일 보여주는 미들웨어
app.use('/', express.static(path.join(__dirname, 'uploads')));

// 프론트에서 넘어온 데이터를 req.body에 넣어주는 역활을 한다 위치가 중요
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 쿠키 세션 로그인관련 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/', (req, res) => {
  res.send('hello ');
});

app.use('/posts', postsRouter);
// app.get('/posts', (req, res) => {
//   res.json([
//     { id: 1, content: 'hello1' },
//     { id: 2, content: 'hello2' },
//     { id: 3, content: 'hello3' },
//   ]);
// });

app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);

// app.use((err,req,res,next)=> {}) // 어러처리 미들웨어 에러를 특별하게 할떄

app.listen(3065, () => {
  console.log('서버 실행 중');
});
