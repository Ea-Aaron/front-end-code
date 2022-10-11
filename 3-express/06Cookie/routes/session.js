var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// 设置session
router.get('/setSession', (req, res) => {
  // 
  req.session.islogin = 'true';
  req.session.username = '小明';
  req.session.viplevel = 5;
  res.send('session设置成功')
})

// 获取session
router.get('/getSession', (req, res) => {
  console.log(req.session);
  if (req.session.islogin == 'true') {
    res.send('欢迎您等级为' + req.session.viplevel + '的' + req.session.username + '先生' + '<a href="/session/sessionOut">退出登录</a>');
  } else {
    res.send('尚未登录,请重新登录!')
  }
})

// 销毁session的路由 用户点击退出登录,session自动销毁,再进入页面显示未登录
router.get('/sessionOut', (req, res) => {
  req.session.destroy(() => {
    console.log('成功销毁当前session');
  });
  res.send('乙退出登录,请重新登录');
})

module.exports = router;
