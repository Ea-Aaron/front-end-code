let express = require('express');

// 实例化express 对象
let app = express();

// 1.字符串的路由模式
app.get('/', (req, res) => {
    res.send('这是首页');
});

// 2.类字符串的正则模式
// 例如: 匹配两个页面 abcd 或者 acd
app.get('/ab?cd', (req, res) => {
    res.send('这是abcd/acd');
});

// 例如路径: /ab+cd 以a开头,cd结尾,中间至少有一个b
// 例如路径: /ab*cd 以ab开头,cd结尾,中间有任意个任意字符

// 3.正则匹配路径模式
// 正则表达式不带单引号
app.get(/\/a\d{10,}/, (req, res) => {
    res.send('新闻页面');
});

// 动态路由
app.get('/next/:nextid', (req, res, next) => {
    // req.params 可以解析当前的路径
    req.myHost = '111,222,555';
    next(); // 中间件,执行下面的语句
}, (req, res) => {
    res.send('新闻页面id:' + req.params.nextid + '页面host:' + req.myHost);
})


// 导出app对象
module.exports = app;