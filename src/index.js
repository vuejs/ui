import VueIcons from './icons'
import VTooltip from 'v-tooltip'
import VueResize from 'vue-resize'
import 'focus-visible'

import './style/base.styl'

export function install (Vue, options = {}) {
  Vue.use(VueIcons)

  Vue.use(VTooltip, Object.assign({
    defaultDelay: { show: 300, hide: 0 },
  }, options.vtooltip))

  Vue.use(VueResize)

  // To extract the component name
  const nameReg = /([a-z0-9]+)\./i

  function registerGlobalComponents (components) {
    components.keys().forEach(key => {
      const name = key.match(nameReg)[1]
      Vue.component(name, components(key).default)
    })
  }

  // Require all the components that start with 'BaseXXX.vue'
  const components = require.context('./components', true, /[a-z0-9]+\.vue$/i)
  // Registration
  registerGlobalComponents(components)
}

const plugin = {
  install,
}

export default plugin
