let myApp = require('./myApp');

// 实例化服务器
let app = new myApp();

// 模板引擎的原理

// 根据电影页,显示不同的内容
app.on('/movie', (req, res) => {
    // res.setHeader('content-type', 'text/html; charset=utf-8');  //每次访问都需要设置响应头,那么就直接封装到服务器中
    // 电影里面的第一个数据,就是 /movie/1 ,第二个数据是 /movie/2
    let movies = [
        {
            name: "雪暴",
            brief: "电影《雪暴》讲述了在一座极北的边陲小镇，一伙穷凶极恶、作案手法老到的悍匪为抢夺黄金，打劫运金车，并借助大雪掩盖了所有犯罪痕迹。为了探求真相，警察王康浩暗地里搜集证据，熟悉地形，终于在一场灾难级的暴雪降临时，与谋财害命的悍匪发生了惊心动魄的正面对决……",
            author: "张震",
            stars: ['小明', '小红', '小张']
        }, {
            name: "少年的你",
            brief: "陈念（周冬雨 饰）是一名即将参加高考的高三学生，同校女生胡晓蝶（张艺凡 饰）的跳楼自杀让她的生活陷入了困顿之中。胡晓蝶死后，陈念遭到了以魏莱（周也 饰）为首的三人组的霸凌，魏莱虽然表面上看来是乖巧的优等生，实际上却心思毒辣，胡晓蝶的死和她有着千丝万缕的联系。",
            author: "周冬雨 ",
            stars: [
                {
                    name: '小明',
                    gender: '男'
                }, {
                    name: '小红',
                    gender: '女'
                }, {
                    name: '小张',
                    gender: '男'
                }
            ]
        }
    ];
    // pathObj 有一个属性为bage,可以读取路径最后面的信息
    let index = res.pathObj.base;
    if (index == 0) {
        res.render(movies[index], './8-动态生成页面0.html');
    } else {
        res.render(movies[index], './8-动态生成页面1.html');
    }

})

// 监听服务器端口
app.run(80, function () {
    console.log('服务器已经启动:', 'http://127.0.0.1/movie/');
})