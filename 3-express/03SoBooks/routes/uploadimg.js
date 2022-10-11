var express = require('express');
var router = express.Router();
// 引入上传文件模块
var multer = require('multer');
var fs = require('fs');

// 初始化上传对象
var upload = multer({ dest: './public/upload' }) // 设置上传文件的文件夹

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('uploadimg');
});

// 处理表单上传的文件信息
// 上传文件,需要引入upload.single('filename') 方法,其中 filename 为表单 <input type="file" name="fileimg"> 中的name值
router.post('/', upload.single('fileimg'), (req, res) => {
    // req.file 保存了上传文件的信息
    // console.log(req.file);

    // 上传的文件名字为随机,不好识别,需要重命名
    // fs.rename() 为修改文件名字,第一个参数是旧的文件名字,第二个是新的文件名字,需要加上路径,第三个是回调函数
    let oldpath = req.file.destination + '/' + req.file.filename;
    let newpath = req.file.destination + '/' + req.file.filename + req.file.originalname;
    fs.rename(oldpath, newpath, () => {
        console.log('修改文件名成功');
    })
    res.send('<h1>上传成功</h1><img src="/upload/' + req.file.filename + req.file.originalname + '" />')
})

module.exports = router;