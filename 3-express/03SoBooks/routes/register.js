var express = require('express');
var router = express.Router();
var sqlQuery = require('../MySql');
var crypto = require('crypto');

/* 注册 */
router.get('/', function (req, res, next) {
    res.render('register');
});

function jiami(str) {
    let fs = crypto.createHash('md5');
    fs.update(str);
    return fs.digest('hex');
}

// 获取注册信息,且与数据库内的信息比较,不能存入相同的邮箱
router.post('/', async (req, res) => {
    // 获取注册信息
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    // 判断user表里面是否已经存在改邮箱
    let strSql = 'select * from user where email = ?';
    let result = await sqlQuery(strSql, [email]);
    if (result.length != 0) {
        // 表示改邮箱已经被注册
        res.render('info', {
            title: '注册失败',
            content: '改邮箱已经被注册,请换一个邮箱进行注册,或者找回密码',
            href: '/login',
            hrefText: '注册页'
        })
    } else {
        // 表示改邮箱没有被注册
        let strSql = 'insert into user (email,username,password) values(?,?,?)';
        let arr = [email, username, jiami(password)];
        await sqlQuery(strSql, arr);
        res.render('info', {
            title: '注册成功',
            content: '成功注册,即将进入登录页',
            href: '/login',
            hrefText: '登录页'
        })
    }
})

module.exports = router;
