var express = require('express');
var path = require('path');
let sqlQuery = require('./MySql');

// 实例化express对象
var app = express();

app.set('views', path.join(__dirname, 'views')); // 设置试图目录
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录

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

// 书籍详情页
app.get('/books/:bookid', async (req, res) => {
  let strSql = 'select * from book where id = ?';
  let bookid = req.params.bookid;
  let result = await sqlQuery(strSql, [bookid]);
  // res.send(bookid);
  res.render('booksInfo.ejs', {
    book: result[0]
  })
})

module.exports = app;
