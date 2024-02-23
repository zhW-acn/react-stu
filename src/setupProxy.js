// const { createProxyMiddleware } = require('http-proxy-middleware')
//
// module.exports = function (app) {
//     app.use(
//         createProxyMiddleware('/api/1', {// 带有/api/1的请求就触发该配置
//             target: 'http://localhost:8848', // 请求转发给谁
//             changeOrigin: true, // 控制服务器收到的请求头中host字段的值，该值为true表示服务器收到的请求为代理地址
//             pathRewrite: {'^/api/1': ''} // 正则重写请求路径。
//         })
//     )
// }