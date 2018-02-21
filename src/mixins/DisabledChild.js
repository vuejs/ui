// @vue/component
export default {
  inject: {
    injectedDisableState: {
      default: null,
    },
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    finalDisabled () {
      return this.disabled || (this.injectedDisableState && this.injectedDisableState.value)
    },
  },
}
