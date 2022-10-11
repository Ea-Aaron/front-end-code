// vue配置文件
module.exports = {
    pages: {
        index: {
            // 入口
            entry: 'src/main.js'
        }
    },
    lintOnSave: false, // 关闭eslint检查

    // 配置代理服务器
    /* devServer: {
        proxy: 'http://localhost:5000' // 只能设置一个代理
    } */

    devServer: {
        proxy: {
            '/aaron1': { // 匹配所有以aaron1开头的请求路径
                target: 'http://localhost:5000',
                pathRewrite: { '^/aaron1': '' },
                ws: true,
                changeOrigin: true  // 告诉服务器自己是从5000（true）来，还是8080（false）来的
            },
            '/aaron2': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/aaron2': '' },
                ws: true,
                changeOrigin: true
            }
        }
    }
}