const path = require('path')
console.log(path.join(__dirname, 'dist'))

module.exports = {
  port: 8088,
  staticPath: path.join(__dirname, 'dist'),
  staticConfig: {

  },
  proxy: [
    {
      path: '^/test',
      target: 'https://www.maojita.cn',
      config: {}
    }
  ]
}
