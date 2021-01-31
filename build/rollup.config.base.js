import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import requireContext from 'rollup-plugin-require-context'
import { string } from 'rollup-plugin-string'
import fs from 'fs-extra'
import CleanCSS from 'clean-css'
import autoprefixer from 'autoprefixer'
import css from 'rollup-plugin-css-only'

const config = require('../package.json')

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      mainFields: ['module', 'jsnext', 'main', 'browser'],
    }),
    string({
      include: '**/*.svg',
    }),
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@vue/babel-preset-jsx',
        [
          '@babel/env', {
            'modules': false,
          },
        ],
      ],
    }),
    css({
      output: styles => {
        fs.ensureDirSync('dist')
        fs.writeFileSync('dist/vue-ui.css', new CleanCSS().minify(styles).styles)
      },
    }),
    cjs({
      exclude: 'src/**',
    }),
    requireContext(),
    replace({
      VERSION: JSON.stringify(config.version),
    }),
  ],
  watch: {
    include: 'src/**',
  },
  external: [
    'vue',
  ],
}
