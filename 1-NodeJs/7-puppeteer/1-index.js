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
        headless: false
    }
    let borwser = await puppeteer.launch(options);

    // 开启新的页面
    let page = await borwser.newPage();
    // 访问页面
    await page.goto('https://www.bilibili.com/');
    // 截图
    // await page.screenshot({ path: './img/1.png' });

    // 获取标签链接
    let item = await page.$$eval('#primaryChannelMenu span a', (elements) => {
        // console.log(elements);
        // 创建一个数组去收集信息,收集地址和内容
        let eles = [];
        elements.forEach((ele, i) => {
            // console.log(ele.innerHTML);
            if (ele.getAttribute('href') != '#') {
                var eleObj = {
                    href: 'https:' + ele.getAttribute('href'),
                    text: ele.innerText
                }
                eles.push(eleObj);
                console.log(eleObj);
            }
        })
        return eles;
    });
    // 打印所有的内容
    // console.log(item);

    // 获取页面上的链接之后,让网页自动进入设定好的页面
    let short = await borwser.newPage();
    await short.goto(item[2].href);

    // 监听页面打印
    // page.on('console', (...args) => {
    //     console.log(args);
    // })
}

test();