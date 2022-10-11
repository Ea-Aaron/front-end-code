// 输入 node-http-server 可以自动生成一个简单的服务器

// 表示引入http模块
var http = require('http');

/* 
    request  获取客户端传过来的信息
    response 给浏览器响应信息
*/
http.createServer(function (request, response) {

    // 设置响应头
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 表示给页面上面输出一句话并且结束响应
    response.end('Hello World');
}).listen(8081);  // 端口号

console.log('Server running at http://127.0.0.1:8081/');