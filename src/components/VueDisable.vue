<template>
  <PropagateDisable :disabled="propagateDisabled">
    <slot/>
  </PropagateDisable>
</template>

<script>
import DisabledParent from '../mixins/DisabledParent'
import DisabledChild from '../mixins/DisabledChild'

export default {
  name: 'VueDisable',

  mixins: [
    DisabledChild,
  ],

  components: {
    PropagateDisable: {
      mixins: [
        DisabledParent,
      ],

      render (h) {
        return h('div', { staticClass: 'vue-ui-disable' }, this.$slots.default)
      },
    },
  },

  props: {
    stopPropagation: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    propagateDisabled () {
      return this.stopPropagation ? this.disabled : this.finalDisabled
    },
  },
}
</script>
