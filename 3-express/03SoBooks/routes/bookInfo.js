var express = require('express');
var sqlQuery = require('../MySql');
var router = express.Router();
var session = require('express-session');
const { route } = require('.');

// 封装一个登录的中间件
function islogin(req, res, next) {
    if (req.session.username == undefined) {
        res.render('info', {
            title: '未登录',
            content: '尚未登录,请进入登录页面登录',
            href: '/login',
            hrefText: '登录页'
        })
    } else {
        // 登陆成功就进入书籍详情页
        next();
    }
}

// 书籍详情页
router.get('/:bookid', islogin, async (req, res) => {
    let strSql = 'select * from book where id = ?';
    let bookid = req.params.bookid;
    let result = await sqlQuery(strSql, [bookid]);
    // res.send(bookid);
    res.render('booksInfo.ejs', {
        book: result[0]
    })
})

// 注销session,退出登录
router.get('/out/sessionout', (req, res) => {
    req.session.destroy(() => {
        console.log('session注销成功');
    });
    res.send('退出登录');
})


module.exports = router;
