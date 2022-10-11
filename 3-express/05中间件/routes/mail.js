let express = require('express');
let routes = express.Router();
// 商场首页
routes.get('/', (req, res) => {
    res.send('商场首页');
})

routes.get('/list', (req, res) => {
    res.send('商场列表页')
})

module.exports = routes;