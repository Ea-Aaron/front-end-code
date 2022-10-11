// 静态方法引入 一次性全部引入
// import * as m1 from "./hello.js";

// 获取元素
const btn = document.getElementById('btn');

btn.onclick = function () {
    // 动态引入 需要用的时候再去加载你,节省资源
    // 返回的是 Promise 对象
    import('./hello.js').then(module => {
        console.log(module);
        module.hello();
    })
}