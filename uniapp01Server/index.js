const express = require("express")
// 导入路由
const router = require('./router/index')

// 创建服务器
const app = express()

app.use('/',router)

// 监听
app.listen(4455, (req,res) => {
	console.log('服务器启动成功....');
	console.log('http://localhost:4455');
})