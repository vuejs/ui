<template>
  <VueButton
    class="vue-dropdown-button"
    v-bind="$attrs"
    v-on="$listeners"
    v-close-popover="!keepOpen"
  >
    <slot/>
  </VueButton>
</template>

<script>
export default {
  name: 'VueDropdownButton',

  inheritAttrs: false,

  props: {
    keepOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"
.vue-dropdown-content .vue-dropdown-button
  border-radius 0
  background transparent
  button-transitions()
  text-align left

  > .content
    min-width 100%
    justify-content flex-start

  &:not(:hover)
    color $color-dark
    > .content
      > .button-icon
        svg
          fill @color
</style>
