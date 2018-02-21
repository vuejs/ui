const path = require('path')

module.exports = {
  lintOnSave: false,

  outputDir: path.resolve('./docs'),
  baseUrl: './',

  configureWebpack: {
    entry: {
      app: path.resolve('./docs-src/main.js'),
    },
    resolve: {
      alias: {
        '@style': path.resolve('./src/style/imports.styl'),
        '@': path.resolve('./docs-src'),
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve('./docs-src'))
  },
}
