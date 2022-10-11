// 引入fs 模块
const fs = require('fs');

// 回调地狱
// fs.readFile('./resources/为学.md', (err, data1) => {
//     fs.readFile('./resources/插秧诗.md', (err, data2) => {
//         fs.readFile('./resources/观书有感.md', (err, data3) => {
//             console.log(data1 + '\r\n' + data2 + '\r\n' + data3);
//         });
//     });
// });

// 使用promise
const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md', (err, data) => {
        resolve(data);
    })
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            resolve([value, data]);
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            // 压入
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.join('\r\n'));
})