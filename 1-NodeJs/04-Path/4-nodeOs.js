let os = require('os');

// 获取cpu的信息
// console.log(os.cpus());

// 获取内存大小
console.log(os.totalmem());  // 4178636800

// 查看系统架构
console.log(os.arch());  //x64

// 查看剩余内存量
console.log(os.freemem());  //1004097536

// 查看系统运行平台
console.log(os.platform());  //win32