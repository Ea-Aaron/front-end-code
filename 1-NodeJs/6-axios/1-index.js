let axios = require('axios');
// console.log(axios);

// 爬虫 获取网站信息
let httpUrl = "https://www.bilibili.com/";
axios.get(httpUrl, {
    // 设置请求头,让网站允许你访问
    headers: {
        'upgrade-insecure-requests': 1,
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36 Edg/88.0.705.50'
    }
}).then(value => {
    console.log(value);
})