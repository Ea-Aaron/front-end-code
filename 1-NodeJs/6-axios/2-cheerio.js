const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
// 获取html文档的内容,内容的获取跟jQuery一样

let httpUrl = "https://www.doutula.com/article/list/?page=1";

// 获取页面的总页数
async function getNum() {
    let res = await axios.get(httpUrl);
    let $ = cheerio.load(res.data);
    let btnLength = $('.pagination li').length;
    // 获取倒数第二个li里面的数字就是页面的总页数
    let maxNum = $('.pagination li').eq(btnLength - 2).find('a').text();
    // console.log(maxNum);
    return maxNum;
}

// 延时函数
// for循环时立即执行函数,短时间能够多次发起请求,需要暂停以下,给服务器一个缓冲
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

async function spider() {
    // 获取所有的页面
    let allPage = await getNum();
    for (let i = 1; i <= 2; i++) {
        getListPage(i);
        // for循环运行一次,睡眠3秒钟,在进行下一次循环,确保每次请求,服务器都能接受
        // sleep(3000);
    }
}

// 抓取页面内容
async function getListPage(pageNum) {
    httpUrl = "https://www.doutula.com/article/list/?page=" + pageNum;
    let res = await axios.get(httpUrl);
    // cheerio 解析 html 内容
    let $ = cheerio.load(res.data);

    // 获取当前表情包页面的链接
    $('#home .col-sm-9>a').each((i, ele) => {
        // 结果是对象形式
        // console.log(ele);

        // 获取每个表情包系列的名字,作为目录
        // 只需要文字,不许有后面的日期
        let reg = /(.*?)\d/;
        let title = reg.exec($(ele).find('.random_title').text())[1];
        // 将名字作为文件夹的名字写入
        fs.mkdir('./img/' + title, function (err) {
            if (err) {
                // console.log(err);
            } else {
                console.log('成功创建目录:' + './img/' + title);
            }
        })
        // 获取所有表情包的链接
        let img = $(ele).attr('href');
        parsePage(img, title);
    })
}

// 封装函数,抓取图片
async function parsePage(url, title) {
    let res = await axios.get(url);
    let $ = cheerio.load(res.data);

    // 进入当前链接,获取链接下的图片
    $('.pic-content img').each((i, ele) => {
        let imgUrl = $(ele).attr('src');
        // console.log(imgUrl);

        // 用写入流写入文件
        // 解析图片路径,判断后缀名写入文件
        let extName = path.extname(imgUrl);
        let imgPath = `./img/${title}/${title}-${i}${extName}`;
        let ws = fs.createWriteStream(imgPath);

        // 获取图片也是一个个的请求
        axios.get(imgUrl, { responseType: 'stream' }).then(value => {
            value.data.pipe(ws);
            console.log('图片加载完成:' + imgPath);
            // 关闭写入流
            value.data.on('close', function () {
                ws.close();
            })
        })
    })
}

spider();