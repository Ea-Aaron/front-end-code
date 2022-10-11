let puppeteer = require('puppeteer');

async function test() {
    // puppeteer.launch 实例开启浏览器
    // 可以传入一个option对象, 乐意配置为无界面浏览器,也可以配置有界面浏览器
    // 无界面浏览器性能更高更快,有界面浏览器一般用于调试开发
    let options = {
        // 设置页面的宽高
        defaultViewport: {
            width: 1400,
            height: 800
        },
        // 设置有界面,如果为true,则为无界面模式
        headless: false,

        // 设置每个步骤的毫秒值
        slowMo: 250
    }
    let borwser = await puppeteer.launch(options);

    // 开启新的页面
    let page = await borwser.newPage();
    // 访问页面
    await page.goto('https://www.bilibili.com/');

    // 通过按钮点击来跳转页面
    // 只能获取当前页面上看的见的元素,隐藏元素无法点击
    // let ElementHandle = await page.$$('#primaryChannelMenu span a');
    // ElementHandle[6].click();

    // 获取页面上的输入框,点击搜索,跳转响应页面
    // 获取单个元素 $   获取多个元素 $$
    let inputEle = await page.$('.nav-search-box input[type="text"]');
    // 让光标进入搜索框
    await inputEle.focus();
    // 往输入框输入内容
    await page.keyboard.type('nodejs');

    // 某些网站的搜索按钮第一次点击会弹出广告,这时候设置按钮的最外层元素,不向上冒泡,只触发按钮点击事件
    await page.$eval('.mini-header__content>.nav-search-box', (ele) => {
        // 阻止冒泡
        ele.addEventListener('click', function (e) {
            e.cancelBubble = true;
        })
    })

    // 点击搜索按钮
    let btnEle = await page.$('.nav-search-box button[type="button"]');
    await btnEle.click();
}

test();