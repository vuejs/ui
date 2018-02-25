/**
 * (Use with the DisabledParent mixin)
 * This mixin should be implemented on all components that can be disabled.
 */
// @vue/component
export default {
  inject: {
    VueDisableMixin: {
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
      return this.disabled || (this.VueDisableMixin && this.VueDisableMixin.data.value)
    },
  },
}
