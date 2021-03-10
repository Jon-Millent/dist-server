const express = require('express')
const app = express()
const config = require('./config')
const proxy = require('express-http-proxy');

app.use('/', express.static(config.staticPath, config.staticConfig));

config.proxy.forEach(item => {
  app.use(item.path, proxy(item.target, item.config));
})

app.listen(config.port);

if (process.env.mode === 'dev') {
  console.log(`listen: http://127.0.0.1:${config.port}`)
}
