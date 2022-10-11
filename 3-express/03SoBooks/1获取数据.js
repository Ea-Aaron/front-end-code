// 引入 express 依赖 和封装好的mysql包
let express = require('express');
let sqlQuery = require('./MySql');
// 引入ejs模板来渲染页面
let ejs = require('ejs');

// 实例化express对象
let app = express();

// 将模板引擎与express应用相关联
app.set('views', 'views');         // 设置视图的对应目录
app.set('view engine', 'ejs');      // 设置默认的模板引擎
app.engine('ejs', ejs.__express)    // 定义模板引擎

// 首页
app.get('/', async (req, res) => {
    // 数据库book表前28的书获取出来
    // 不需要所有的数据,所以只获取想要的数据
    let strSql = 'select id,bookname,bookimg,author,cataory from book limit 0,28';
    let result = await sqlQuery(strSql);

    // console.log(result);
    // 将获取到数据转换成数组格式,然后转成json格式,在渲染到页面上
    // let resjson = JSON.stringify(Array.from(result));
    // 可以简写为 res.json();
    // res.send('这是首页');
    // res.json(Array.from(result));

    // 使用模板引擎渲染页面
    res.render('index.ejs', { title: 'Aaronbook首页' });
});

// 小说文学页面
app.get('/xiaoshuowenxue', async (req, res) => {
    // 筛选出小说文学的数据
    let strSql = 'select id,bookname,bookimg,author,cataory from book where cataory= "小说文学" limit 0,28';
    let result = await sqlQuery(strSql);
    res.json(result);
});

// 书籍详情页
app.get('/books/:bookid', async (req, res) => {
    // 将书籍的详细数据显示出来
    let strSql = 'select * from book where id = ?';
    let bookid = req.params.bookid;
    let result = await sqlQuery(strSql, [bookid]);
    res.json(result);
});

module.exports = app;