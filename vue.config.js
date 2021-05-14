module.exports = {
  publicPath: './',
  productionSourceMap: false, // 生产打包时不输出map文件，增加打包速度
  devServer: {
    proxy: {
      // 天气接口的api
      '/skyapi': {
        target: "http://www.freshingair.cn:93",
        changeOrigin: true,
        pathRewrite: {
          '^/skyapi': ''
        }
      }
    }
  }
}