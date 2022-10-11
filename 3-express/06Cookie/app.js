var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionRouter = require('./routes/session');

var app = express();

// view engine setup
// express视图设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// express中间件
app.use(session({
  secret: 'aaron',
  resave: true, // 强制保存session
  saveUninitialized: true,  // 是否保存初始化的session
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000  // 设置session有效期为一个星期
  }
}))
app.use(logger('dev'));  // express 日志
app.use(express.json()); // 解析json格式数据
app.use(express.urlencoded({ extended: false }));  // 解析post请求数据,放置body属性中
// 设置加密,需要设置一个属性 'secret'
app.use(cookieParser('secret'));  // cookie相关解析
app.use(express.static(path.join(__dirname, 'public')));  // 设置静态文件目录

// 路由匹配
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/session', sessionRouter);

// catch 404 and forward to error handler
// 设置404报错中间件
app.use(function (req, res, next) {
  // 可以手动设置一个好看一点的404报错页面
  res.render('404.ejs');
  // next(createError(404));
});

// error handler
// 处理错误的中间件
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 返回服务器错误 500
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
