<script>
export default {
  name: 'VueLoadingIndicator',

  functional: true,

  render (h, { data, children }) {
    return <div class="vue-ui-loading-indicator" {...data}>
      <div class="animation" />
      {children}
    </div>
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

colors($color)
  border-color rgba($color, .1)
  border-right-color $color

.vue-ui-loading-indicator
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
    colors($vue-ui-gray-800)
    .vue-ui-dark-mode &
      colors($vue-ui-gray-600)
  &.primary
    > .animation
      colors($vue-ui-primary-500)
  &.accent
    > .animation
      colors($vue-ui-accent-500)
      .vue-ui-dark-mode &
        colors($vue-ui-accent-300)
  &.small
    > .animation
      width 10px
      height @width
  &.big
    > .animation
      width 24px
      height @width
      border-width 3px

  .vue-ui-high-contrast &
    > .animation
      border-width 4px

  &.overlay
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    z-index 1
    > .animation
      margin-bottom 32px
    &:not(.transparent)
      background rgba($vue-ui-white, .95)
      .vue-ui-dark-mode &
        background rgba($vue-ui-gray-900, .95)
    &.fixed
      position fixed

@keyframes rotating
  0%
    transform rotate(0)
  100%
    transform rotate(360deg)
</style>
