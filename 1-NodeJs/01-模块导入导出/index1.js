let a = require('./index');

// 1.在没有任何内容导出去的情况下获取某个文件的内容,会得到一个空对象
// 2.require 获取文件路径时,可以不添加后缀名,默认的后缀名就是 js

// 3.一个模块中的js代码仅在模块第一次被使用时执行一次,并且在使用的过程中进行初始化,之后缓存起来便于后续继续使用
let b = require('./index');

console.log(a);
console.log(b);
console.log(a == b);  // true
