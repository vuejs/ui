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
        return this[name].activeChild === this.$_couplingProxy
      },
    },

    created () {
      const proxy = this.$_couplingProxy = {}
      for (const key in this.$data) {
        if (key.charAt(0) === '$' || key.charAt(0) === '_') continue
        Object.defineProperty(proxy, key, {
          enumerable: true,
          configurable: false,
          get: () => this.$data[key],
        })
      }
      for (const key in this.$props) {
        if (key.charAt(0) === '$' || key.charAt(0) === '_') continue
        Object.defineProperty(proxy, key, {
          enumerable: true,
          configurable: false,
          get: () => this.$props[key],
        })
      }
      Object.defineProperty(proxy, '$slots', {
        enumerable: false,
        configurable: false,
        get: () => this.$slots,
      })
      this[name].$_addCoupledChild(proxy)
    },

    beforeDestroy () {
      this[name].$_removeCoupledChild(this.$_couplingProxy)
    },
  }
}
