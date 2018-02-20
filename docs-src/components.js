import Vue from 'vue'

// To extract the component name
const nameReg = /([a-z0-9]+)\./i

function registerGlobalComponents (components) {
  components.keys().forEach(key => {
    const name = key.match(nameReg)[1]
    Vue.component(name, components(key).default)
  })
}

// Require all the components that start with 'BaseXXX.vue'
const components = require.context('./components', true, /Base[a-z0-9]+\.(jsx?|vue)$/i)
// Registration
registerGlobalComponents(components)

// Webpack HMR
if (module.hot) {
  module.hot.accept(components.id, () => {
    const components = require.context('./components', true, /Base[a-z0-9]+\.(jsx?|vue)$/i)
    registerGlobalComponents(components)
  })
}
