module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4455',
        ws: true,
        changeOrigin: true, // 允许跨域
		pathRewrite: {
			'^/api': ''
		}
      }
    }
  }
}