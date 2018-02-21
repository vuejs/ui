const path = require('path')

module.exports = {
  lintOnSave: false,

  outputDir: './docs',
  baseUrl: './',

  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './docs-src/main.js'),
    },
    resolve: {
      alias: {
        '@style': path.resolve(__dirname, './src/style/imports.styl'),
        '@': path.resolve(__dirname, './docs-src'),
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, './docs-src'))
  },
}
