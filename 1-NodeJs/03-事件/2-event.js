// 引入 events 模块
const events = require('events');
const fs = require('fs');

// 创建 eventEmitter 对象
let ev = new events.EventEmitter();

// 绑定事件及事件的处理程序
ev.on('helloSuccess', function (evenMsg) {
    console.log('1.刚才在吃饭');
    console.log(evenMsg);
});
ev.on('helloSuccess', function () {
    console.log('2.打LOL');
});
ev.on('helloSuccess', function () {
    console.log('3.打DOTA');
});
ev.on('helloSuccess', function () {
    console.log('4.现在开始学习');
});

// fs.readFile('./resources/stu.txt', { flag: 'r', encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         // 触发事件  这句话必须写,否则无法触发事件
//         ev.emit('helloSuccess', data);
//     }
// })

// 异步
function ReadFile(Path) {
    return new Promise((resolve, reject) => {
        fs.readFile(Path, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

ReadFile('./resources/shi.txt').then(value => {
    ev.emit('helloSuccess', value);
});

async function text() {
    let data = await ReadFile('./resources/shi.txt');
    ev.emit('helloSuccess', data);
}

text();