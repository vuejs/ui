<template>
  <div class="vue-loading-indicator">
    <div class="animation"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VueLoadingIndicator',
}
</script>

<style lang="stylus">
@import "../style/imports"

colors($color)
  border-right-color $color
  border-bottom-color $color

.vue-loading-indicator
  display flex
  &.inline
    display inline-flex
  flex-direction column
  box-center()

  > .animation
    animation rotating .7s linear infinite
    width 16px
    height @width
    border-radius 50%
    border transparent 2px solid
    colors($color-dark)
  &.primary
    > .animation
      colors($color-primary)
  &.accent
    > .animation
      colors($color-accent)
  &.small
    > .animation
      width 10px
      height @width
  &.big
    > .animation
      width 24px
      height @width
      border-width 3px

  &.overlay
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background rgba($color-light, .95)
    z-index 1
    > .animation
      margin-bottom 32px
    &.fixed
      position fixed

@keyframes rotating
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)
</style>
