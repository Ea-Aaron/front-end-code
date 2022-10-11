const base = 'http://localhost:4455'

export default (url, data={}, method) => {
	return new Promise((resolve, reject) => {
		uni.request({
			// 小程序不存在跨域问题
			url:base + url, // 小程序
		    // url: '/api' + url, // H5
		    data,
			method,
		    success: (res) => {
		        resolve(res.data);
		    },
			fail(err) {
				reject(err)
			}
		});
	})
}