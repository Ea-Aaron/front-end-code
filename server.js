// 1.引入Express
const { request, response, json } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello Ajax');

});

// all 可以接受任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello Ajax POST');

});

app.all('/json-server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个对象
    const data = {
        name: 'aaron'
    };
    // send() 只能接受字符串,所以需要转换
    const str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// 针对 ie
app.get('/ie', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello IE -2');

});

// 延时响应
app.get('/deley', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
});

// jQuery 服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name: "aaron"
    }
    // setTimeout(() => {
    response.send(JSON.stringify(data));
    // }, 3000);
});

// axios 服务
app.all('/axios-server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name: "aaron"
    }
    response.send(JSON.stringify(data));
});

// fetch 服务
app.all('/fetch-server', (request, response) => {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    const data = {
        name: "aaron"
    }
    response.send(JSON.stringify(data));
});

// JSONP 服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("helloword")');
    const data = {
        name: 'aaron'
    };
    let str = JSON.stringify(data);

    response.end(`headle(${str})`);
})

// 检测用户名是否存在
app.all('/checkbox-server', (request, response) => {
    // response.send('console.log("helloword")');
    const data = {
        id: 1,
        msg: '用户名已经存在'
    };
    let str = JSON.stringify(data);

    response.end(`handle(${str})`);
})

// jquery-jsonp 请求
app.all('/jquery-jsonp-server', (request, response) => {
    // response.send('console.log("helloword")');
    const data = {
        uname: "aaron",
        city: ['武汉', '咸宁', '嘉鱼']
    };
    let str = JSON.stringify(data);
    // 接受callback参数
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);
})

// CORS 请求
app.all('/cors-server', (request, response) => {
    // 设置响应头 允许所有网页跨域跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    // 允许用户自定义的请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 允许所有请求方式
    response.setHeader('Access-Control-Allow-Mether', '*');
    response.send('Hello CORS');
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000端口正在监听....");
});