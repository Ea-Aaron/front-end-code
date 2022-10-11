let fs = require('fs');

// 1.创建写入流
// 语法:fs.createWriteStream('文件路径',[可配置的选项])
let ws = fs.createWriteStream('./resources/文件流.txt', { flags: 'a', encoding: 'utf-8' });
// console.log(ws);

// 监听文件打开事件
ws.on('open', function () {
    console.log('文件打开');
})

// 监听文件写入准备事件
ws.on('ready', function () {
    console.log('文件写入准备完成');
})

// 文件写入流
ws.write('helloword\n', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('内容流入成功');
    }
})
ws.write('helloword1\n', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('内容1流入成功');
    }
})
ws.write('helloword2\n', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('内容2流入成功');
    }
})
ws.write('helloword3\n', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('内容3流入成功');
    }
})
ws.write('helloword4\n', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('内容4流入成功');
    }
})

// 文件写入流关闭
ws.end(function () {
    console.log('内容流入关闭');
})

// 监听文件关闭事件
ws.on('close', function () {
    console.log('文件写入完成,关闭!');
})