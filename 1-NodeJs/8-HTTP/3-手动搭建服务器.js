const http = require('http');

http.createServer((req, res) => {
    console.log(req.url); // 获取url

    // 设置响应头
    // 状态码:200   文件类型: html   字符集:utf-8
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });

    res.write('这是nodejs');

    res.end();  //结束响应,必须写
}).listen(3000)