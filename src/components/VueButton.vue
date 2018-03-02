<template>
  <component
    :is="component"
    class="vue-button"
    :class="[
      component,
      {
        disabled: finalDisabled,
        loading,
        ghost,
      }
    ]"
    v-bind="$attrs"
    :tabindex="ghost ? -1 : 0"
    role="button"
    :aria-disabled="ghost"
    @click.capture="handleClick"
    @click.capture.native="handleClick"
  >
    <VueLoadingIndicator
      v-if="loading"
    />

    <span
      class="content"
    >
      <VueLoadingIndicator
        v-if="loadingSecondary"
        class="inline small loading-secondary"
      />
      <VueIcon
        v-else-if="iconLeft"
        :icon="iconLeft"
        class="button-icon left"
      />

      <span class="default-slot">
        <slot>
          {{ label }}
        </slot>
      </span>

      <VueIcon
        v-if="iconRight"
        :icon="iconRight"
        class="button-icon right"
      />
    </span>
  </component>
</template>

<script>
import DisabledChild from '../mixins/DisabledChild'

export default {
  name: 'VueButton',

  inheritAttrs: false,

  mixins: [
    DisabledChild,
  ],

  props: {
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

    loading: {
      type: Boolean,
      default: false,
    },

    loadingSecondary: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    component () {
      if (this.$attrs.to) {
        return 'router-link'
      } else if (this.$attrs.href) {
        return 'a'
      } else {
        return 'button'
      }
    },

    ghost () {
      return this.finalDisabled || this.loading || this.loadingSecondary
    },
  },

  methods: {
    handleClick (event) {
      if (this.ghost) {
        event.preventDefault()
        event.stopPropagation()
        event.stopImmediatePropagation()
      } else {
        this.$emit('click', event)
      }
    },
  },
}
</script>

<style lang="stylus">
@import "../style/base"

@import "../style/imports"

$focus-color = $vue-color-dark

colors($dark, $light, $invert = false)
  if $invert
    $foreground = $light
    $background = $dark
  else
    $foreground = $dark
    $background = $light
  button-colors($foreground, $background)
  &.flat
    button-colors($dark, transparent)
    &:not(.ghost)
      &:hover,
      &:active,
      .vue-dropdown.open .dropdown-trigger &
        button-colors($foreground, $background)

.vue-button
  display inline-block
  vertical-align middle
  border none
  font-family inherit
  text-decoration none
  cursor pointer
  user-select none
  position relative
  box-sizing border-box
  border-radius $br
  padding 8px 16px
  font-size 14px
  line-height 16px
  &.big
    padding 14px 20px
    font-size 16px
    .vue-icon
      width 20px
      height @width
  // Round style
  &.round
    border-radius 17px
    // Focus
    &:focus:focus-visible::after
      border-radius (@border-radius + 1px)
    // Big button
    &.big
      border-radius 22px
      // Focus
      &:focus:focus-visible::after
        border-radius (@border-radius + 1px)
  &.flat
    button-transitions()
  > .content
    h-box()
    box-center()
  &:not(.icon-button)
    > .content
      > .button-icon
        &.left
          margin-right 6px
        &.right
          margin-left 6px
      > .loading-secondary
        margin-right 6px
  &.icon-button
    padding 8px
    width 32px
    height @width
    &.big
      padding 12px
      width 44px
      height @width
  &.ghost
    cursor default
  &.disabled
    opacity .5
    filter grayscale(50%)
  &.loading
    > .content
      visibility hidden
  > .vue-loading-indicator
    position absolute
    top 0
    bottom 0
    left 0
    right 0
  // Colors
  colors($vue-color-dark, $vue-color-light-neutral)
  &.primary
    colors($vue-color-primary, $vue-color-light, true)
  &.accent
    colors($vue-color-accent, $vue-color-light, true)
  &.danger
    colors($vue-color-danger, $vue-color-light, true)
  &.warning
    colors($vue-color-warning, $vue-color-light, true)
  &.info
    colors($vue-color-info, $vue-color-light-neutral)
  &.success
    colors($vue-color-success, $vue-color-light-neutral)
  disable-focus-styles()
  // Keyboard focus style
  &:focus:focus-visible
    z-index 1
    &::after
      content ''
      display block
      position absolute
      top -1px
      bottom @top
      left @top
      right @top
      border 1px solid
      border-radius ($br + 1px)
      animation vue-focus .3s forwards
</style>
