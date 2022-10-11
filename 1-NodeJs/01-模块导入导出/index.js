let a = 123;
let b = 456;
let c = 789;

// exprots 就是默认的导出对象
exports.a = a;
module.exports.c = c;

// 系统默认设置: exports = module.exports
// exports = { user: '小明' }; // { a: 123, c: 789 }
module.exports = { user: '小明' }; // { user: '小明' }

// 使用 exports 时,只能当个设置属性 exports.c = c;
// 使用 module.exports 可以单个设置属性,也可以整个赋值

// node中每个模块的最后,都会 return module.exports
// 如果需要导出多个成员时必须使用exports.add = XXX; exports.foo = XXX;或者使用module.exports.add = XXX; module.export.foo = XXX;