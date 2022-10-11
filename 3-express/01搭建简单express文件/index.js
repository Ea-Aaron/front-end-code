let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('<h1>我是首页</h1>')
});

app.listen(8080, () => {
    console.log('服务器启动成功:', 'http://127.0.0.1:8080');
})