# HTTP
HTTP (Hypertext Transfer Protocol) 协议 [超文本传输协议]，协议详细规定了浏览器和万维网服务器之间互相通信的规则。
约定， 规则

## 请求报文
重点是格式和参数
```
行      请求类型(GET/POST) / URL(s?ie=utf-8) / HTTP协议版本(HTTP/1.1)
头      Host: atguigu.com
        Cookie: name=guigu
        Content-Type: applocation/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
        如果是 GET 请求，这部分为空；如果是POST请求，可以为空也可以不为空
```

## 响应报文
```
行      HTTP/1.1  响应状态码(200)  响应状态字符串(OK)
头      Content-Type: text/html;charset=utf-8
        Content-Length: 2048
        Content-Encoding: gzip (压缩方式)
空行
体      <html>
            <head>
            </head>
            <body>
                <h1>aaron</h1>
            </body>
        </html>
```
* 404   服务器找不到请求的网页
* 403   服务器拒绝请求
* 401   请求要求身份验证。对于需要登录的网页，服务器可能返回此响应
* 500   （服务器内部错误）服务器遇到错误，无法完成请求
* 200   成功处理了请求，一般情况下都是返回此状态码