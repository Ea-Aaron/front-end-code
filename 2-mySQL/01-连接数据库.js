// 导入 mysql 依赖
const { query } = require('express');
const mysql = require('mysql');

// 创建连接数据库的对象
let con = mysql.createConnection({
    host: 'localhost',  // 主机号
    port: '3306',       // 端口号(默认:3306) 可选
    user: 'root',       // 用户名
    password: 'root',   // 密码
    database: 'stu'     // 数据库名
});

// 建立连接
con.connect((err) => {
    // 如果建立连接失败
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功');
    }
});

// 执行数据库语句
// 执行查询语句
// query('sql语句', function ('错误信息','结果内容', '查询数据的字符集') { })
// con.query('select * from text', (err, results, fields) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(results);
//         console.log(fields);
//     }
// });

// 删除表
// con.query('drop table text', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// 删除库
// con.query('drop database stu', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// 创建库
// con.query('create database stu', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// 创建表
let strSql = `
CREATE TABLE stu (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NULL,
    password varchar(255) NULL,
    mail varchar(255) NULL,
    PRIMARY KEY (id)
);`;
// 创建表,字段不需要夹引号,否则会报错
// con.query(strSql, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// 向表里添加信息
// let strSql2 = 'insert into stu (id,username,password,mail) value (1,"小明","123456","456@169.com")';
// con.query(strSql2, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

let strSql3 = 'insert into stu (username,password,mail) values (?,?,?)';
con.query(strSql3, ['小张', '55555', '5416354@qq.com'], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})