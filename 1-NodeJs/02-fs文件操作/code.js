const fs = require('fs');
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

function fsWrite(url, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, content, { flag: 'a', encoding: 'utf-8' }, err => {
            if (err) {
                reject('写入失败');
            } else {
                resolve('写入成功');
            }
        })
    })
};

// 全部暴露
module.exports = { fsRead, fsWrite };