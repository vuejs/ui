import VueIcons from './icons'
import VTooltip from 'v-tooltip'
import VueResize from 'vue-resize'
import 'focus-visible'

import 'vue-resize/dist/vue-resize.css'
import 'v-tooltip/dist/v-tooltip.css'

import VueButton from './components/VueButton.vue'
import VueDisable from './components/VueDisable.vue'
import VueDropdown from './components/VueDropdown.vue'
import VueDropdownButton from './components/VueDropdownButton.vue'
import VueFormField from './components/VueFormField.vue'
import VueGroup from './components/VueGroup.vue'
import VueGroupButton from './components/VueGroupButton.vue'
import VueIcon from './components/VueIcon'
import VueInput from './components/VueInput.vue'
import VueLoadingBar from './components/VueLoadingBar'
import VueLoadingIndicator from './components/VueLoadingIndicator'
import VueModal from './components/VueModal.vue'
import VueSelect from './components/VueSelect.vue'
import VueSelectButton from './components/VueSelectButton.vue'
import VueSwitch from './components/VueSwitch.vue'
import VueTab from './components/VueTab.vue'
import VueTabs from './components/VueTabs.vue'
import VueTypeAhead from './components/VueTypeAhead.vue'

// Exported mixins
export { default as CoupledChild } from './mixins/CoupledChild'
export { default as CoupledParent } from './mixins/CoupledParent'
export { default as DisabledChild } from './mixins/DisabledChild'
export { default as DisableScroll } from './mixins/DisableScroll'

// Exported utils
export { generateHtmlIcon } from './icons'

export function install (Vue, options = {}) {
  Vue.use(VueIcons)

  Vue.use(VTooltip, mergeOptions({
    bondary: document.body,
    themes: {
      tooltip: {
        delay: {
          show: 1000,
          hide: 800,
        },
        instantMove: true,
      },
      dropdown: {
        handleResize: false,
      },
    },
  }, options.vtooltip))

  Vue.use(VueResize)

  Vue.component('VueButton', VueButton)
  Vue.component('VueDisable', VueDisable)
  Vue.component('VueDropdown', VueDropdown)
  Vue.component('VueDropdownButton', VueDropdownButton)
  Vue.component('VueFormField', VueFormField)
  Vue.component('VueGroup', VueGroup)
  Vue.component('VueGroupButton', VueGroupButton)
  Vue.component('VueIcon', VueIcon)
  Vue.component('VueInput', VueInput)
  Vue.component('VueLoadingBar', VueLoadingBar)
  Vue.component('VueLoadingIndicator', VueLoadingIndicator)
  Vue.component('VueModal', VueModal)
  Vue.component('VueSelect', VueSelect)
  Vue.component('VueSelectButton', VueSelectButton)
  Vue.component('VueSwitch', VueSwitch)
  Vue.component('VueTab', VueTab)
  Vue.component('VueTabs', VueTabs)
  Vue.component('VueTypeAhead', VueTypeAhead)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin

function mergeOptions (to, from) {
  for (const key in from) {
    if (to[key] && from[key] && typeof to[key] === 'object' && typeof from[key] === 'object') {
      mergeOptions(to[key], from[key])
    } else {
      to[key] = from[key]
    }
  }
  return to
}

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
