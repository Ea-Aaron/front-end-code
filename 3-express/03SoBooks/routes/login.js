var express = require('express');
var router = express.Router();
var sqlQuery = require('../MySql');
var crypto = require('crypto');

/* 登录 */
router.get('/', function (req, res, next) {
    res.render('login');
});

function jiami(str) {
    let fs = crypto.createHash('md5');
    fs.update(str);
    return fs.digest('hex');
}

router.post('/', async (req, res) => {
    // console.log(req.body);
    let strSql = 'select * from user where email = ? and password = ?';
    let arr = [req.body.username, jiami(req.body.password)];
    let result = await sqlQuery(strSql, arr);
    // 判断数据库中是否存在此账户
    if (result.length != 0) {
        // console.log(result);

        // 设置session,将email作为凭证发送过去,让浏览器知道你登录了
        req.session.username = result[0].email;
        res.render('info', {
            title: '登陆成功',
            content: '登陆成功,即将跳转至首页',
            href: '/',
            hrefText: '首页'
        })
    } else {
        res.render('info', {
            title: '登录',
            content: '账号或密码错误,请重新进入登录页面登录',
            href: '/login',
            hrefText: '登录页'
        })
    }
})

module.exports = router;
