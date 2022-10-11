function animate(obj, target, callback) {
    // console.log(callback); // callback = funcation() {}  调用的时候 callback()
    // 回调函数：函数可以作为一个参数，见这个函数作为参数传到另一个函数里面
    // 当那个函数执行完毕之后，在执行传进来的这个函数，这个过程就是回调

    // 每次调用新的对象，都会添加一个定时器，而且每个定时器的名字都是一样的 容易歧义
    // 所以修改以下，给每个对象添加一个定时器，这一类对象，都用着一个定时器
    // var obj = {};
    // obj.name = 'aaron';

    // 解决按钮多级点击，创建了多个定时器的问题
    // 让定时器每次执行前，先把以前的定时器清除,只保留当前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长写到定时器里面
        // 步长计算公式：（目标值 - 当前的位置） / 10
        // 当步长大于0是，向上取整  当步长小于0时，向下取整
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        // 停止动画 本质是停止定时器
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if (callback) {
                // 调用函数
                callback();
            }

        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 30)
}