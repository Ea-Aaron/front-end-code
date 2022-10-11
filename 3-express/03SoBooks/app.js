var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var sqlQuery = require('./MySql');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var bookRouter = require('./routes/bookInfo');
var loginRouter = require('./routes/login'); // 登录模块
var registerRouter = require('./routes/register'); // 注册模块
var uploadRouter = require('./routes/uploadimg'); // 文件上传模块
var uploadajaxRouter = require('./routes/uploadajax'); // ajax文件上传模块

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 引入session中间件
app.use(session({
  secret: 'aaron',
  resave: true, // 强制保存session
  saveUninitialized: true,  // 是否保存初始化的session
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000  // 设置session有效期为一个星期
  }
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));  // cookie相关解析
app.use(express.static(path.join(__dirname, 'public')));

// 引入书籍详情页
app.use('/books', bookRouter);
// 引入登录页面
app.use('/login', loginRouter);
// 引入注册
app.use('/register', registerRouter);
// 引入文件上传页面
app.use('/uploadimg', uploadRouter);
// 引入ajax文件上传页面
app.use('/uploadajax', uploadajaxRouter);


// 首页
app.get('/', async (req, res) => {
  // 数据库book表前28的书获取出来
  // 不需要所有的数据,所以只获取想要的数据
  let strSql = 'select id,bookname,bookimg,author,cataory from book limit 0,28';
  let result = await sqlQuery(strSql);
  // 使用模板引擎渲染页面
  res.render('booksIndex.ejs', {
    book: Array.from(result)
  })
});



module.exports = app;
