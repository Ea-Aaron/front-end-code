let fs = require('fs');
const { data } = require('jquery');

fs.readFile('./resources/stu.txt', { flag: 'r', encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        myEvent.emit('fileSuccess', data);
        // 1.查看所有用户的详细信息
        // 2.查看用户的年龄比例
        // 3.查看所有用户的学校信息
    }
})

// 发布订阅模式
let myEvent = {
    event: {
        // 成功时调用的事件处理程序[fn,fn,fn]
    },
    on: function (evenName, evenFn) {
        if (this.event[evenName]) {
            this.event[evenName].push(evenFn);
        } else {
            this.event[evenName] = [];
            this.event[evenName].push(evenFn);
        }
    },
    emit: function (evenName, evenMsg) {
        if (this.event[evenName]) {
            this.event[evenName].forEach(itemFn => {
                itemFn(evenMsg);
            })
        }
    }
};

myEvent.on('fileSuccess', function (evenMsg) {
    console.log('1.查看所有用户的详细信息');
});
myEvent.on('fileSuccess', function (evenMsg) {
    console.log('2.查看用户的年龄比例');
});
myEvent.on('fileSuccess', function (evenMsg) {
    console.log('3.查看所有用户的学校信息');
});