<template>
  <v-popover
    class="vue-dropdown"
    trigger="click"
    v-bind="$attrs"
    :popover-class="popoverClass"
    :auto-hide="autoHide"
    :offset="offset"
    :disabled="finalDisabled"
  >
    <div class="trigger">
      <slot name="trigger">
        <VueButton
          :class="buttonClass"
          :icon-left="iconLeft"
          :icon-right="iconRight"
          :disabled="finalDisabled"
        >{{ label }}</VueButton>
      </slot>
    </div>

    <div slot="popover" class="vue-dropdown-content">
      <slot/>
    </div>
  </v-popover>
</template>

<script>
import DisabledChild from '../mixins/DisabledChild'

export default {
  name: 'VueDropdown',

  inheritAttrs: false,

  mixins: [
    DisabledChild,
  ],

  props: {
    autoHide: {
      type: Boolean,
      default: true,
    },

    buttonClass: {
      type: [String, Array, Object],
      default: null,
    },

    iconLeft: {
      type: String,
      default: null,
    },

    iconRight: {
      type: String,
      default: null,
    },

    label: {
      type: String,
      default: null,
    },

    offset: {
      default: 4,
    },

    popoverClass: {
      type: [String, Array, Object],
      default: undefined,
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-dropdown
  display inline-block
  vertical-align middle

.vue-dropdown-content
  > *
    display block
    width 100%
    min-width 150px
</style>
