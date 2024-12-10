const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/diary_reading',
    createProxyMiddleware({
      target: 'http://gsubuntu.iptime.org:5000',
      changeOrigin: true,
      pathRewrite: {
        '^/diary_reading': '/diary_reading'
      },
      onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      },
      onError: (err, req, res) => {
        console.error('Proxy Error:', err);
      }
    })
  );
}; 