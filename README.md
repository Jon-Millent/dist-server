# dist-server
dist static &amp; proxy server

单页面应用打包出来的代理静态`dist`文件

#### Applicable scene
* 静态托管
* 跨域代理

## Use

克隆项目 `git clone https://github.com/Jon-Millent/dist-server.git`

## 目录

* `/dist` 存放打包出来的页面
* `/config.js` 修改配置

## Config

* `port` 监听端口
* `staticPath` 静态路径，默认`dist`
* `staticConfig` 静态配置，参见 https://expressjs.com/zh-cn/starter/static-files.html
* `proxy` 代理配置，参见 https://github.com/chimurai/http-proxy-middleware

## 部署

`pm2 start index.js`
