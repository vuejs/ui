<script>
export default {
  name: 'VueLoadingBar',

  functional: true,

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

  render (h, { props, data }) {
    data.class = [
      data.class,
      {
        unknown: props.unknown,
      },
    ]
    return <div
      class="vue-ui-loading-bar"
      {...data}
    >
      <div
        class="bar"
        style={!props.unknown && { width: `${props.value * 100}%` }}
      />
    </div>
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

colors($foreground, $background)
  background $background
  .bar
    background $foreground

.vue-ui-loading-bar
  height 3px
  position relative

  .bar
    height 100%

  colors($vue-ui-color-dark, $vue-ui-color-light-neutral)
  .vue-ui-dark-mode &
    colors($vue-ui-color-dark-neutral, $vue-ui-color-dark)

  &.primary
    colors($vue-ui-color-primary, $vue-ui-color-light-neutral)
    .vue-ui-dark-mode &
      colors($vue-ui-color-primary, $vue-ui-color-dark)

  &.accent
    colors($vue-ui-color-accent, $vue-ui-color-light-neutral)
    .vue-ui-dark-mode &
      colors($vue-ui-color-accent-light, $vue-ui-color-dark)

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
