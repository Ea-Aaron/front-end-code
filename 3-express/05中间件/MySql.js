const mysql = require('mysql');

// 创建数据库连接
let con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'book'
});

// 建立连接
con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功');
    }
});

//封装查询语句
function sqlQuery(strSql, arr) {
    return new Promise((resolve, reject) => {
        con.query(strSql, arr, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}

// 导出文件
module.exports = sqlQuery;