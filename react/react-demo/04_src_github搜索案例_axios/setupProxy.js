const proxy = require('http-proxy-middleware')

module.exports = app => {
    app.use(
        proxy.createProxyMiddleware('/api', {
            target: 'http://localhost:5000',
            // 控制服务器收到的请求头中的 Host 的值，避免服务器做了一些 Host 校验
            /**
             * changeOrigin 设置为 true 时，服务器收到的请求头中的 Host 为：localhost:5000
             * changeOrigin 设置为 false 时，服务器收到的请求头中的 Host 为：localhost:3000
             */
            changeOrigin: true,
            // 重写请求路径，去除请求前缀，保证交给服务器的是正常请求路径（必须配置）
            pathRewrite: {'^/api': ''}
        })
    )
}