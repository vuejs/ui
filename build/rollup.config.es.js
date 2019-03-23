import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'vue-ui',
    file: 'dist/vue-ui.esm.js',
    format: 'es',
  },
  external: [
    'focus-visible',
    'v-tooltip',
    'vue-resize',
  ],
})

export default config
