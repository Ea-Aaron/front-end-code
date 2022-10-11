const express = require('express')
const router = express.Router()


router.get('/text',(req,res) => {
	res.send('测试成功')
})

// 引入首页滑块数据
const indexData = require('../datas/index.json')
// 滑块接口
router.get('/getIndexData', (req,res) => {
	res.send({
		code: 200,
		data: indexData
	})
})

// 引入首页分类数据
const indexCateList = require('../datas/indexCateList.json')
// 首页分类接口
router.get('/getIndexCateList', (req,res) => {
	res.send({
		code: 200,
		data: indexCateList
	})
})

module.exports = router;

