// 1.引入 fs 模块
const fs = require('fs');

// 2.调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data) => {
//     // 如果失败,则抛出错误
//     if (err) throw err;
//     // 如果成功,则输出内容
//     console.log(data.toString());
// })

// 3.使用promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        // 如果错误
        if (err) reject(err);
        // 成功就是输出内容
        resolve(data.toString());
    })
})

p.then(function (value) {
    console.log(value.toString());
    // 打印出来的结果为buffer,可以使用tostring()方法转换
}, function (reason) {
    console.log('读取失败');
})