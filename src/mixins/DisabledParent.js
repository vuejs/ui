/**
 * (Use with the DisabledChild mixin)
 * Allow disabling an entire tree of components implementing the DisabledChild mixin.
 */
// @vue/component
export default {
  provide () {
    return {
      VueDisableMixin: {
        data: this.injectedDisableData,
      },
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
      injectedDisableData: {
        value: this.disabled,
      },
    }
  },

  watch: {
    disabled (value, oldValue) {
      if (value !== oldValue) this.injectedDisableData.value = value
    },
  },
}
