// 引入readline包
let readline = require('readline');
let { fsWrite } = require('./code');

// 实例化接口对象
let r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 设置r1 提问事件
// r1.question('今晚吃什么', function (answer) {
//     console.log('答复:' + answer);
//     r1.close();
// });

function myQuestion(title) {
    return new Promise((resolve, reject) => {
        r1.question(title, answer => {
            resolve(answer);
        })
    })
};

async function createPackage() {
    let name = await myQuestion('您的包名是什么:');
    let description = await myQuestion('您的包的描述是什么:');
    let main = await myQuestion('您的入口文件是什么:');
    let author = await myQuestion('您的包名的作者是:');

    let content = `
    {
        "name": "${name}",
        "version": "1.0.0",
        "main": "${main}",
        "dependencies": {
          "express": "^4.17.1",
          "jquery": "^3.5.1"
        },
        "devDependencies": {
          "babel-cli": "^6.26.0",
          "babel-preset-env": "^1.7.0",
          "browserify": "^17.0.0"
        },
        "scripts": {
          "test": "echo Error: no test specified && exit 1"
        },
        "keywords": [],
        "author": "${author}",
        "license": "ISC",
        "description": "${description}"
      }`;
    await fsWrite('./resources/package.json', content);

    // 写完内容,关闭事件
    r1.close();
};

createPackage();

// close 事件监听 结束事件
r1.on('close', function () {
    // 结束程序
    process.exit(0);
})