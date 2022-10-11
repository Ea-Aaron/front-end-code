const url = require('url');
// console.log(url);

let api = 'http://www.baidu.com?name=admin&pass=admin';
// console.log(new URL(api));
// console.log(url.parse(api)); //已经弃用

// 第二个参数不加,这是字符串格式,加上则是对象
// let getvalue = url.parse(api, true).query;
let getvalue = new URL(api)
console.log(getvalue.searchParams.get('name'));
// console.log(getvalue);

// console.log(`姓名:${getvalue.name},密码:${getvalue.pass}`);