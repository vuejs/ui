<template>
  <VDropdown
    ref="popover"
    class="vue-ui-dropdown"
    v-bind="$attrs"
    v-on="$listeners"
    :popover-class="popoverClass"
    :auto-hide="autoHide"
    :offset="offset"
    :disabled="finalDisabled"
    @update:open="onUpdateOpen"
    @keydown.native.tab="onKeyTab"
  >
    <div class="dropdown-trigger">
      <slot name="trigger">
        <VueButton
          :class="buttonClass"
          :icon-left="iconLeft"
          :icon-right="iconRight"
          :disabled="finalDisabled"
        >{{ label }}</VueButton>
      </slot>
    </div>

    <template #popper>
      <VueDisable
        ref="popoverContent"
        class="vue-ui-dropdown-content"
        :class="contentClass"
        :style="{
          minWidth: forceMinSize ? `${width}px` : '0',
        }"
        :disabled="!isOpen"
        @mousedown.native="onPopoverContentMousedown"
      >
        <slot/>
      </VueDisable>
    </template>

    <resize-observer
      v-if="forceMinSize"
      @notify="onResize"
    />
  </VDropdown>
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

    contentClass: {
      type: [String, Array, Object],
      default: null,
    },

    forceMinSize: {
      type: Boolean,
      default: false,
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
      type: [String, Number],
      default: null,
    },

    offset: {
      default: 4,
    },

    noPopoverFocus: {
      type: Boolean,
      default: false,
    },

    popoverClass: {
      type: [String, Array, Object],
      default: undefined,
    },
  },

  data () {
    return {
      isOpen: false,
      width: 0,
    }
  },

  mounted () {
    if (this.forceMinSize) {
      this.$nextTick(this.onResize)
    }
  },

  beforeDestroy () {
    this.removeGlobalMouseEvents()
  },

  methods: {
    onKeyTab (event) {
      // Focus the first focusable element in the popover instead of cycling through the whole app
      // (popover content will be appened at the end of the body)
      if (this.isOpen && !this.noPopoverFocus) {
        const el = this.$refs.popoverContent.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]')
        if (el) {
          event.preventDefault()
          el.focus()
        }
      }
    },

    onPopoverContentMousedown (event) {
      this.$emit('popover-mousedown', event)
      window.addEventListener('mouseup', this.onPopoverContentMouseup)
    },

    onPopoverContentMouseup (event) {
      this.$emit('popover-mouseup', event)
      this.removeGlobalMouseEvents()
    },

    onResize () {
      this.width = this.$el.offsetWidth
    },

    onUpdateOpen (value) {
      this.isOpen = value
    },

    removeGlobalMouseEvents () {
      window.removeEventListener('mouseup', this.onPopoverContentMouseup)
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-ui-dropdown
  display inline-block
  vertical-align middle
  position relative

  .trigger
    &:focus
      outline none
    &::-moz-focus-inner
      border 0

  .trigger,
  .dropdown-trigger,
  .dropdown-trigger > *
    &:not(.icon-button)
      width 100%

.vue-ui-dropdown-content.vue-ui-disable
  box-sizing border-box
  > *
    &:not(.vue-ui-grid)
      display block
      width 100%
      min-width 150px

    &.vue-ui-grid
      &.default-gap
        padding 8px 12px
      &.big-gap
        padding 20px 24px

  > .section-title
    padding 6px 14px
    opacity .8
</style>
