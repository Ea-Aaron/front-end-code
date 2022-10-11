// 导入文件模块
const fs = require('fs');
const { data } = require('jquery');

// node 读写文件也有同步和异步的接口

// 同步  等待和堵塞
// read=>r 读取文件的内容
// var content = fs.readFileSync('hello.txt', { flag: 'r', encoding: "utf-8" });
// console.log(content);

// 异步
// fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, (err, data) => {
//     // 如果读取文件失败
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
//     console.log(456);
// })
// console.log(123);

function fsRead(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
            if (err) {
                // 失败执行的内容
                reject(err);
            } else {
                // 成功执行的内容
                resolve(data);
            }
        });
    });
}

// var w1 = fsRead('hello.txt');
// w1.then(value => {
//     console.log(value);
// });

async function ReadList() {
    let one = await fsRead('./resources/hello.txt');
    let two = await fsRead('./resources/hello2.txt');
    let three = await fsRead('./resources/hello3.txt');

    // var one = await fsRead('d:/File/WebHTML/NodeJS/02-fs文件操作/resources/hello.txt');
    // var two = await fsRead('d:/File/WebHTML/NodeJS/02-fs文件操作/resources/' + one + '.txt');
    // var three = await fsRead('d:/File/WebHTML/NodeJS/02-fs文件操作/resources/' + two + '.txt');

    console.log(one);
    console.log(two);
    console.log(three);
}

ReadList();