import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: JSON.parse(localStorage.getItem('dark-mode')) || false,
  },
  mutations: {
    'SWITCH_THEME': (state, value) => {
      state.darkMode = value
      localStorage.setItem('dark-mode', value)
      const el = document.getElementsByTagName('html')[0]
      if (value) {
        el.classList.add('vue-ui-dark-mode')
      } else {
        el.classList.remove('vue-ui-dark-mode')
      }
    },
  },
  actions: {

  },
})
