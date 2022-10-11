let fs = require('fs');
let { fsRead, fsWrite } = require('./code');

// 读取某一个文件夹下所有的文件名
const txtPath = './resources/code.txt';
fs.readdir('../02-fs文件操作/resources', (err, files) => {
    if (err) {
        // console.log(err);
    } else {
        // console.log(files);
        files.forEach(async function (filename, i) {
            let content = await fsRead('./resources/' + filename);
            await fsWrite(txtPath, content);
        })
    }
})