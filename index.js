const express = require('express')
const app = express()
const config = require('./config')
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/', express.static(config.staticPath, config.staticConfig));

config.proxy.forEach(item => {
  app.use(item.path, createProxyMiddleware(item));
})

app.listen(config.port);

if (process.env.mode === 'dev') {
  console.log(`listen: http://127.0.0.1:${config.port}`)
}
