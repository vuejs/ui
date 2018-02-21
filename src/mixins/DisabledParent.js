// @vue/component
export default {
  provide () {
    return {
      injectedDisableState: this.injectedDisableState,
    }
  },

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      injectedDisableState: {
        value: this.disabled,
      },
    }
  },

  watch: {
    disabled (value, oldValue) {
      if (value !== oldValue) this.injectedDisableState.value = value
    },
  },
}
