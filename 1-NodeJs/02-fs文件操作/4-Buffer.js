// 1.数组不能进行二进制数据的转换
// 2.js数组不像Java,python等语言效率高
// 3.buffer 在内存空间开辟出固定大小,连续的内存空间

// 将字符串转换为buffer对象
var str = 'helloword';
let buf = Buffer.from(str);  //<Buffer 68 65 6c 6c 6f 77 6f 72 64>
// console.log(buf);

// 读取buffer内容
// console.log(buf.toString()); //helloword

// 开辟一块空的buffer(缓存区)
// 获取一块连续的内存空间,然后清空里面的内容
let buf1 = Buffer.alloc(10);
// buf1[0] = 10;
// buf1[1] = 256;  //溢出久重新开始计算
console.log(buf1); //<Buffer 0a 00 00 00 00 00 00 00 00 00>

// Unsafe 不安全
// 获取一块连续的内存空间,不会清空里面的内容,可能会泄露数据,但是效率高
let buf2 = Buffer.allocUnsafe(10);
console.log(buf2);