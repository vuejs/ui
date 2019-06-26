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

  colors($vue-ui-gray-800, $vue-ui-primary-100)
  .vue-ui-dark-mode &
    colors($vue-ui-gray-600, $vue-ui-gray-800)

  &.primary
    colors($vue-ui-primary-500, $vue-ui-primary-100)
    .vue-ui-dark-mode &
      colors($vue-ui-primary-500, $vue-ui-gray-800)

  &.accent
    colors($vue-ui-accent-500, $vue-ui-primary-100)
    .vue-ui-dark-mode &
      colors($vue-ui-accent-300, $vue-ui-gray-800)

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
