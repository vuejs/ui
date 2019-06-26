import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'default',
  },
  mutations: {
    'SWITCH_THEME': (state, value) => {
      state.theme = value
      localStorage.setItem('vue-ui:theme', value)
      const el = document.getElementsByTagName('html')[0]
      if (value !== 'default') {
        el.classList.add('vue-ui-dark-mode')
      } else {
        el.classList.remove('vue-ui-dark-mode')
      }
      if (value !== 'high-contrast') {
        el.classList.remove('vue-ui-high-contrast')
      } else {
        el.classList.add('vue-ui-high-contrast')
      }
    },
  },
  actions: {

  },
})
