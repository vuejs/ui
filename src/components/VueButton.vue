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

      <slot>
        {{ label }}
      </slot>

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
@import "../style/imports"

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
      .vue-dropdown.open > .trigger &
        button-colors($foreground, $background)

.vue-button
  display inline-block
  vertical-align middle
  padding 8px 16px
  border none
  font-family inherit
  font-size 1em
  text-decoration none
  cursor pointer
  user-select none
  position relative
  box-sizing border-box
  border-radius 4px
  &.round
    border-radius 17px
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
    padding 9px
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
  colors($color-dark, $color-light-neutral)
  &.primary
    colors($color-primary, $color-light, true)
  &.accent
    colors($color-accent, $color-light, true)
  &.danger
    colors($color-danger, $color-light, true)
  &.warning
    colors($color-warning, $color-light, true)
  &.info
    colors($color-info, $color-light-neutral)
  &.success
    colors($color-success, $color-light-neutral)
  // Disable noisy browser styles
  outline none
  -webkit-tap-highlight-color rgba(255, 255, 255, 0)
  &::-moz-focus-inner
    border 0

</style>
