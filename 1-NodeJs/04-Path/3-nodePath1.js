const { log } = require('console');
let path = require('path');
console.log(path);

// __dirname  获得当前执行文件所在目录的完整目录名
// console.log(__dirname); // d:\File\WebHTML\NodeJS\04-Path

// __filename  获得当前执行文件所在的完整路径
// console.log(__filename);  // d:\File\WebHTML\NodeJS\04-Path\nodePath1.js

// 解析路径 可以将路径信息直接解析出来,解析根目录,所在磁盘,文件扩展名,文件名
console.log(path.parse(__filename));

// 获得当前执行node命令时候得到文件目录名
// console.log(process.cwd()); // d:\File\WebHTML\NodeJS\04-Path