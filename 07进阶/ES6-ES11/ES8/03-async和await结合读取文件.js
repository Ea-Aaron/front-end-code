// 引入 fs 模块
const fs = require('fs');

// 读取为学
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/为学.md', (err, data) => {
            // 如果失败
            if (err) {
                reject(err);
            } else {
                // 如果成功
                resolve(data);
            }
        })
    })
};

// 读取插秧诗
function readChaYang() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md', (err, data) => {
            // 如果失败
            if (err) {
                reject(err);
            } else {
                // 如果成功
                resolve(data);
            }
        })
    })
};

// 读取观书有感
function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            // 如果失败
            if (err) {
                reject(err);
            } else {
                // 如果成功
                resolve(data);
            }
        })
    })
};

async function main() {
    // 获取为学内容
    let WeiXue = await readWeiXue();
    console.log(WeiXue.toString());

    // 获取插秧诗内容
    let ChaYang = await readChaYang();
    console.log(ChaYang.toString());

    // 获取观书有感内容
    let guanshu = await readGuanShu();
    console.log(guanshu.toString());
};

main();