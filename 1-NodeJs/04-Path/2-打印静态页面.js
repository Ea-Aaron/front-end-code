let path = require('path');
let fs = require('fs');

let str = "http://127.0.0.1/xinwen/index.html";
let arrPath = str.split('/');
let arr = arrPath.slice(arrPath.length - 2);
// console.log(arr);
// 获取文件的完整路径
let info = path.join(__dirname, ...arr);
// console.log(info);

fs.readFile(info, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})