/**
 * (Use with the CoupleParent mixin)
 * This mixin should be used on children components of a component implementing the CoupledParent mixin.
 * @param {string} name Name of the injection
 */
export default function (name) {
  // @vue/component
  return {
    inject: [
      name,
    ],

    computed: {
      active () {
        return this[name].activeChild === this
      },
    },

    created () {
      this[name].$_addCoupledChild(this)
    },

    beforeDestroy () {
      this[name].$_removeCoupledChild(this)
    },
  }
}
