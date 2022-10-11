let fs = require('fs');

let rs = fs.createReadStream('./resources/video.mp4', { flags: 'r' });
let ws = fs.createWriteStream('./resources/b.mp4', { flags: 'w' });

rs.on('open', function () {
    console.log('读取的文件已经打开');
});

rs.on('close', function () {
    // ws.end();
    console.log('读取流结束');
})

// 每一批数据流入完成
// rs.on('data', function (chunk) {
//     console.log('单批数据流入:' + chunk.length);
//     console.log(chunk);
//     ws.write(chunk, () => {
//         console.log('单批数据流入完成');
//     })
// })

// 利用管道流,可以更快的实现复制文件的操作
rs.pipe(ws);