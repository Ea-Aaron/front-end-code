var express = require('express');

// 引入加密算法 md5
var crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 设置cookie
router.get('/setcookie', (req, res) => {
  // 设置cookie,有效期默认为一个会话,当浏览器关闭,会话就结束了.cookie也就会消失
  // res.cookie('siLogin', 'true');
  // maxAge 设置这个cookie的有效时间 ,过了10s,当前cookie失效
  // httpOnly 无法从控制台获取当前cookie
  // res.cookie('siLogin', 'true', { maxAge: 10000, httpOnly: true })

  // 设置加密
  res.cookie('login', 'true', { signed: true });
  res.send('cookie设置成功');
})

router.get('/login', (req, res) => {
  console.log(req.cookies);
  // 将登录的cookie获取,然后发送给服务器,保持登陆状态
  if (req.cookies.siLogin == 'true') {
    res.send('登陆成功');
  } else {
    res.send('登陆失败')
  }
})

// 获取机密的cookie
router.get('/adminSecter', (req, res) => {
  // 解析加密之后的cookie,获取加密之前的cookie值
  // console.log(req.signedCookies);
  // res.send('加密cookie');
  if (req.signedCookies.login == 'true') {
    res.send('登陆成功,加密cookie');
  } else {
    res.send('登陆失败,加密cookie');
  }
})

// md5加密原理
router.get('/secret', (req, res) => {
  // 需要加密的字符串
  let password = '252525';
  // 加密的算法
  let sf = crypto.createHash('md5');
  // 对字符串进行加密
  sf.update(password);
  // 对二进制加密数据以字符串形式显示
  let content = sf.digest('hex');
  res.send(content);
})

// 存储密文和对应的明文
let secretCookie = {};

// 将密文和明文存储进自己设置的密码库中
function setSecretCookie(secretStr, str) {
  secretCookie[secretStr] = str;
}

// 获取秘闻对应的明文
function getSecretCookie(secretStr) {
  return secretCookie[secretStr];
}

// 设置加密方式 ,获取密文
function jiami(str) {
  let pass = str;
  let fs = crypto.createHash('md5');
  fs.update(pass);
  let content = fs.digest('hex');
  return content;
}

// 自己封装的加密
router.get('/appSecret', (req, res) => {
  let secretStr = jiami('true');
  res.cookie('resister', secretStr);
  // 将密文和明文保存
  setSecretCookie(secretStr, 'true');
  res.send('cookie加密成功')
})
// 获取加密的内容
router.get('/getAppSecret', (req, res) => {
  let content = getSecretCookie(req.cookies.resister);
  res.send('密文内容为:' + content);
})
module.exports = router;
