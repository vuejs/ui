import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-ui',
    file: 'dist/vue-ui.umd.js',
    format: 'umd',
  },
})

export default config
