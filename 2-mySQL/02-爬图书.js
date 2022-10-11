let mysql = require('mysql');
let axios = require('axios');
let cheerio = require('cheerio');

// 创建连接数据库对象
let con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'book'
    // useConnectionPooling: true
});

// 建立连接
con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功');
    }
});

let page = 1; // 第一页的网页
let count = 1; // 第一本书

// 延时函数
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
    // let allPage = await getNum();
    for (let i = 1; i <= 3; i++) {
        getPageUrl(i);
        // for循环运行一次,睡眠3秒钟,在进行下一次循环,确保每次请求,服务器都能接受
        sleep(3000);
    }
}

// 获取第N个页面所有的书籍的链接
async function getPageUrl(num) {
    let httpUrl = 'https://sobooks.cc/page/' + num;
    let res = await axios.get(httpUrl);
    // console.log(res.data);

    let $ = cheerio.load(res.data);
    // 获取所有书籍的链接
    $('#cardslist .card-item .thumb-img>a').each((i, ele) => {
        let href = $(ele).attr('href');
        getBookinfo(href);
    })
};

// 根据地址获取书籍的详细信息
async function getBookinfo(href) {
    let res = await axios.get(href);
    let $ = cheerio.load(res.data);

    // 书名
    let bookname = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(1)').text().substring(3);

    // 作者
    let author = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(2)').text().substring(3);

    // 格式
    let format = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(3)').text().substring(3);

    // 标签
    let tag = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(4)').text().substring(3);

    // 时间
    let pubtime = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(5)').text().substring(3);

    // 评分
    let score = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(6) > b').attr('class');
    // score = score.substring(score.length - 1);
    score = score[score.length - 1];

    // 书籍所属分类
    let cataory = $('#mute-category > a').text().trim();

    // 书籍图片
    let bookimg = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookpic > img').attr('src');

    // 书籍内容
    let brief = $('.article-content').html();

    // 书籍链接
    let bookUrl = href;
    // 将数据写入数据库
    con.query('insert into book (bookname,author,format,tag,pubtime,score,cataory,bookimg,brief,bookUrl) values (?,?,?,?,?,?,?,?,?,?)', [bookname, author, format, tag, pubtime, score, cataory, bookimg, brief, bookUrl], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}
// getPageUrl(page);
// getBookinfo('https://sobooks.cc/books/17690.html')
spider();