const path = require('path')

module.exports = {
  lintOnSave: false,

  configureWebpack: {
    entry: path.resolve('./docs-src/main.js'),
    output: {
      path: path.resolve('./docs'),
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
