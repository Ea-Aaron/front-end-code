var express = require('express');
var path = require('path');
let strQuery = require('./MySql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// 解析post提交的数据
app.use(express.urlencoded())

// 搜索首页
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// 原生提取 get方式表单提交信息
// app.get('/search', (req, res) => {
//   // 获取连接后面的信息
//   // console.log(req.url);

//   // 利用  ?分割获取表单传过来的信息
//   let queryStr = req.url.split('?')[1];
//   // console.log(queryStr);

//   // 表单传过来的可能不止一个数据,这是就利用 & 进行分割 ,同时将键值对数据的对象形式进行保存
//   let KeyValue = queryStr.split('&');
//   let query = {};
//   KeyValue.forEach((item, i) => {
//     // 将键值对利用 = 进行分割,分别获取 键 和 值
//     let key = item.split('=')[0];
//     let value = item.split('=')[1];
//     query[key] = value;
//   })
//   console.log(query);

//   res.send('搜索页面');
// })

// express 封装的获取表单信息
app.get('/search', async (req, res) => {
  // express 封装好了query 方法
  // console.log(req.query); //{ searchKey: 'admin', username: 'aaron' }
  let strSql = 'select id,bookname,author,cataory from book where bookname like "%' + req.query.searchKey + '%"';
  let result = await strQuery(strSql);
  res.json(Array.from(result));
})

// 获取post提交的数据
app.post('/search', (req, res) => {
  // console.log(req.query);

  // post请求的数据不在 query属性上,而是在body属性上,而且必须有app.use(express.urlencoded()) 才能解析post请求的数据
  console.log(req.body);
  res.send('post提交数据');
})

// 使用ajax提交表单
app.get('/ajax', (req, res) => {
  let ajaxUrl = req.query;
  console.log(ajaxUrl);
  res.render('Ajax.ejs', {
    url: ajaxUrl.searchKey
  })
})

// 登录页
app.get('/login', (req, res) => {
  res.render('login.ejs')
})
// 处理登录请求
// 只有输入正确的账号和密码才能进入
app.post('/login', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // 查询数据,是否有此数据
  let strSql = 'select * from user where username = ? and password = ?';
  let arr = [username, password];
  let result = await strQuery(strSql, arr);
  // 判断result 里面的长度是否为0 ,是就没有这天数据
  if (result.length == 0) {
    res.send('登录失败');
  } else {
    res.send('登陆成功');
  }
})

module.exports = app;
