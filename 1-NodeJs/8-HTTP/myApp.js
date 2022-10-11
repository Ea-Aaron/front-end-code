/*
    封装:
        1)构造函数能够实例化对象
        2)app.on() 可以添加路由的事件,根据请求的路径,执行对应的功能
        3)app.run(port, callback) 让服务器运行起来
*/
const http = require('http');
const path = require('path');
const url = require('url')
const fs = require('fs');

class myApp {
    constructor() {
        this.server = http.createServer();
        this.reqEvent = {};

        // 不希望访问的人能够看到今天目录的地址,那么就给他看我们想让他看到的地址
        this.staticPath = '/abc';

        this.server.on('request', (req, res) => {
            // 引入render
            res.render = render;

            // 解析路径
            let pathObj = path.parse(req.url);
            // console.log(pathObj);

            // 判断属性是否存在
            if (pathObj.dir in this.reqEvent) {
                // 直接在这里设置响应头的格式,方便后面调用
                res.setHeader('content-type', 'text/html; charset=utf-8');

                // 存在这个属性,就执行对象的函数
                // 将路径设置为res的一个属性
                res.pathObj = pathObj;
                this.reqEvent[pathObj.dir](req, res);

            } else if (pathObj.dir == this.staticPath) {
                // 引入静态服务器内容
                res.setHeader("content-type", this.getContentType(pathObj.ext))
                let rs = fs.createReadStream('./static/' + pathObj.base)
                rs.pipe(res)

            } else {
                // 如果没有这个属性
                res.setHeader('Content-type', 'text/html; charset=utf-8');
                res.end('<h1>404!页面找不到</h1>')
            }
        })
    }

    // 对应事件
    on(url, fn) {
        this.reqEvent[url] = fn;
    }

    // 服务器运行
    run(port, callback) {
        this.server.listen(port, callback);
    }

    getContentType(extName) {
        switch (extName) {
            case ".jpg":
                return "image/jpeg";
            case ".html":
                return "text/html;charset=utf-8";
            case ".js":
                return "text/javascript;charset=utf-8";
            case ".json":
                return "text/json;charset=utf-8";
            case ".gif":
                return "image/gif";
            case ".css":
                return "text/css"
        }
    }
}

// 封装一个函数,将获取到的数据,渲染到页面对应的位置
function render(option, path) {
    // 这个 data 是 buffer 格式的数据,所以需要转化
    fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            // 这里因为列表内容和普通内容的模板一样,所以先去匹配列表的内容,再去匹配普通内容,反之后续列表内容被普通的内容所覆盖
            data = renderlist(data, option);
            data = renderValue(data, option);
            // 这里使用的是箭头函数,指向箭头函数最开始设置的位置,就是res.render
            this.end(data);
        }
    })
}

// 匹配普通的内容,渲染到页面上
function renderValue(data, option) {
    let reg = /\{\{(.*?)\}\}/igs
    let result;
    while (result = reg.exec(data)) {
        // 去除两边的空格
        let strKey = result[1].trim();

        // 当传入的数据是数组内的对象形式,可以通过这种方式找到想要的数据
        let strValue = eval('option.' + strKey);
        // 拿到数据,就将数据替换掉页面上对应的位置
        data = data.replace(result[0], strValue);
    }
    return data;
}

// 匹配列表内容,渲染到列表内部
function renderlist(data, option) {
    let reg = /\{\%for \{(.*?)\} \%\}(.*?)\{\%forend\%\}/igs;
    let result;
    while (result = reg.exec(data)) {
        let strKey = result[1].trim();
        let strvalue = option[strKey];

        let listStr = '';
        strvalue.forEach((item, i) => {
            // 替换掉<li>{{item}}</li> 中 {{item}}
            listStr = listStr + renderValue(result[2], { item })
        })
        data = data.replace(result[0], listStr);
    }
    return data;
}

// 导出对象
module.exports = myApp;