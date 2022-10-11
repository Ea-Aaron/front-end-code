const fs = require('fs');

// 删除空的文件夹
fs.rmdir('abcs', function () {
    console.log('删除成功');
})