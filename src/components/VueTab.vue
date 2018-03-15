<template>
  <component
    :is="VueTabs.data.animate ? 'transition' : 'NoTransition'"
    name="vue-ui-tab"
  >
    <div
      v-show="active"
      class="vue-ui-tab"
      :class="{
        selected: active,
      }"
      role="tabpanel"
      :tabindex="active ? '0' : null"
      :aria-hidden="!active ? 'true' : null"
    >
      <div v-if="contentShown" class="vue-ui-tab-content">
        <slot/>
      </div>
    </div>
  </component>
</template>

<script>
import CoupledChild from '../mixins/CoupledChild'

export default {
  name: 'VueTab',

  components: {
    NoTransition: {
      functional: true,
      render (h, { slots }) {
        return slots().default[0]
      },
    },
  },

  mixins: [
    CoupledChild('VueTabsCoupling'),
  ],

  inject: [
    'VueTabs',
  ],

  props: {
    icon: {
      type: String,
      default: null,
    },

    id: {
      type: [String, Number],
      required: true,
    },

    label: {
      type: String,
      default: '',
    },

    lazy: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    contentShown () {
      return !this.lazy || this.showContent
    },
  },

  data () {
    return {
      showContent: false,
    }
  },

  watch: {
    active (value, oldValue) {
      // Lazy content creation
      if (value && value !== oldValue && !this.showContent) {
        this.showContent = true
      }
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-ui-tab
  outline none
</style>
