// 引入 path
const path = require('path');
// console.log(path);

let strPath = 'http://news.cctv.com/2021/01/25/ARTIS1IKxFFk3RPpcYG0YwrV210125.shtml';
// 获取路径信息的扩展名
console.log(path.extname(strPath)); //.shtml

// 拼接 路径
let arr = ['sxt', 'qianduan', 'nodejs'];
// resolve() 参数时字符串 会把参数拼接到当前路径的后面
console.log(path.resolve(...arr));  //d:\File\WebHTML\NodeJS\04-Path\sxt\qianduan\nodejs

// __dirname  获得当前执行文件所在目录的完整目录名
console.log(__dirname); // d:\File\WebHTML\NodeJS\04-Path
// join() 会单独拼接参数
console.log(path.join(...arr));  // sxt\qianduan\nodejs

let info = path.join(__dirname, ...arr)
console.log(info);  // d:\File\WebHTML\NodeJS\04-Path\sxt\qianduan\nodejs

let str = "d://sxt/xinwen/sat.txx";
// 我只想要str路径下最后面个路径信息
let arrPath = str.split('/');
console.log(arrPath);

let arr1 = arrPath.slice(arrPath.length - 2);
console.log(arr1); //[ 'xinwen', 'sat.txx' ]