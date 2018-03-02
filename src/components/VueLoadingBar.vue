<template>
  <div
    class="vue-loading-bar"
    :class="{
      unknown,
    }"
  >
    <div
      class="bar"
      :style="!unknown && { width: `${value * 100}%` }"
    />
  </div>
</template>

<script>
export default {
  name: 'VueLoadingBar',

  props: {
    value: {
      type: Number,
      default: 0,
    },

    unknown: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

colors($foreground, $background)
  background $background
  .bar
    background $foreground

.vue-loading-bar
  height 3px
  position relative

  .bar
    height 100%

  colors($vue-color-dark, $vue-color-light-neutral)
  &.primary
    colors($vue-color-primary, $vue-color-light-neutral)
  &.accent
    colors($vue-color-accent, $vue-color-light-neutral)

  &.unknown
    .bar
      position absolute
      top 0
      animation bar-animation .8s infinite linear

  &.ghost
    height 0
    z-index 300
    background transparent
      .bar
        height 3px

@keyframes bar-animation
  0%
    left 0
    right 100%
  50%
    left 0
    right 0
  100%
    left 100%
    right 0
</style>
