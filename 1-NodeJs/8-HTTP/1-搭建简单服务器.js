let http = require('http');

// 创建sever服务器对象
let server = http.createServer();

// 监听当前事件的请求
server.on('request', (req, res) => {
    // 当服务器被请求时,会触发请求时间,并传入请求对象和响应对象
    console.log(req);
    console.log(req.url);
    console.log(req.headers);
    // res.end('helloWord');

    // 传入中文,显示乱码,这是因为没有设置响应的编码类型
    // 设置响应头
    res.setHeader('content-type', 'text/html; charset=utf-8');
    if (req.url == '/') {
        res.end('首页');
    } else if (req.url == '/gnwz') {
        res.end('国内网站');
    } else if (req.url == '/gwwz') {
        res.end('国外网站');
    } else {
        res.end('404!找不到网页')
    }

});

// 服务器监听的端口号
// 端口号为80,则可以直接访问,默认接口为80
server.listen(3000, function () {
    // 启动监听端口成功时执行
    console.log('服务器启动成功!!!');
})