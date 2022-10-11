// 导入封装的服务器
let myApp = require('./myApp');

// 实例化服务器
let app = new myApp();

app.on('/', (req, res) => {
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>这是首页</h1><img src="./abc/tu.jpg">');
});
app.on('/gnxw', (req, res) => {
    res.setHeader('content-type', 'text/html; charset=utf-8');
    // 判断路径里面有没有index.html这段信息,有就是国内新闻页,不是就是详情页,对链接进行分类
    if (res.pathObj.base == 'index.html') {
        res.end('这是国内新闻');
    } else {
        res.end('这是国内新闻详情页');
    }

});

// 监听服务器端口
app.run(80, function () {
    console.log('服务已经启动:', 'http://127.0.0.1');
})