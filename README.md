# dist-server
dist static &amp; proxy server

单页面应用打包出来的代理静态`dist`文件

#### applicable scene
* 静态托管
* 跨域代理

如非跨域无法解决项目，建议使用ngxin直接代理到dist目录

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

## 测试
`npm run dev`

## 部署

#### nginx配置参考

```text
location /some/ {
    proxy_pass http://127.0.0.1:8088/;
    proxy_set_header Host      $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_redirect http:// $scheme://;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    autoindex on;
}
```  
#### 使用进程守护  
`pm2 start index.js`  

#### 如何使用history router模式？
```
安装
`yarn add connect-history-api-fallback`

配置server
```
...
const history = require('connect-history-api-fallback');
...

app.use(history({
  index: '/index.html'
}));
```

二级目录部署项目配置，以vue为例
```
// router.js
{
...
mode: 'history',
base: '/二级目录/',
...
}
```

```
// vue.config.js
...
publicPath: '/二级目录/',
...
```
