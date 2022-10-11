var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// 添加中间件
app.use((req, res, next) => {
  console.log('访问任何页面,都会执行此函数');
  // 如果不加next(),那么中间件就会称为拦截器,从而无法进入下一个页面
  next();
})
// 中间件可以给res定义一个方法
app.use((req, res, next) => {
  function getadd(a, b) {
    return a + b;
  }
  res.getadd = getadd
  next();
})

// 首页
app.get('/', (req, res) => {
  res.send('这是首页' + res.getadd(3, 5));
})

// 实例化路由模块,此路由相当于一个小的app模块

let routes = require('./routes/mail');
app.use('/mail', routes);

module.exports = app;
