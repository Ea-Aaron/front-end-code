let fs = require('fs');

// 第二个参数: 要修改的的内容  必须填写
// wirte=>w 为覆盖原文件的内容,修改为新的内容
// append=>a 在原文件内容的后面添加新的内容
// writeFile 如果没有找到目标文件,会创建内容空的目标文件在执行后续操作
// fs.writeFile('./resources/text.txt', '红烧狮子头\n', { flag: 'a', encoding: 'utf-8' }, function (err) {
//     if (err) {
//         console.log('写入失败');
//     } else {
//         console.log('写入成功');
//     }
// })

// 需要对文件进行多次添加内容
function WriteFs(url, content) {
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

async function writeList() {
    await WriteFs('./resources/aaron.txt', '1今天吃骚烤');
    await WriteFs('./resources/aaron.txt', '2今天吃骚烤');
    await WriteFs('./resources/aaron.txt', '3今天吃骚烤');
    await WriteFs('./resources/aaron.txt', '4今天吃骚烤');
}

writeList();