let fs = require('fs');

// 删除文件,删除的文件不进入回收站
fs.unlink('./resources/delete.txt', function () {
    console.log('删除成功');
})