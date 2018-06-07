import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueUiFramework from '../'
import '../dist/vue-ui.css'

Vue.use(VueUiFramework)

Vue.config.productionTip = false

Vue.prototype.log = (...args) => {
  console.log(...args)
}

new Vue({
  router,
  store,
  ...App,
}).$mount('#app')
