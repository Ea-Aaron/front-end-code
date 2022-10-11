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
    // 使用模板引擎渲染页面
    res.render('index.ejs', {
        title: 'Aaronbook首页',
        indextitle: '<h1>文章首页</h1>'
    });
});

// 小说文学页面
app.get('/tj', async (req, res) => {
    // 判断
    res.render('condition.ejs', {
        gender: '男'
    })
});

// 书籍详情页
app.get('/xh', async (req, res) => {
    // 循环
    res.render('xh.ejs', {
        star: ['刘德华', '张学友', '郭富城', '黎明']
    })
});

module.exports = app;