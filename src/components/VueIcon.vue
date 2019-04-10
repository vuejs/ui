<script>
export default {
  name: 'VueIcon',

  functional: true,

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  render (h, { props, data }) {
    return <div
      class="vue-ui-icon"
      {...data}
    >
      <svg>
        <use xlinkHref={`#ic_${props.icon}_24px`} />
      </svg>
    </div>
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-ui-icon
  display inline-block
  width 16px
  height @width
  vertical-align bottom
  svg
    width 100%
    height 100%
    fill $vue-ui-color-dark
    pointer-events none

  .vue-ui-dark-mode &
    svg
      fill $vue-ui-color-light

  &.primary
    svg
      fill $vue-ui-color-primary
  &.accent
    svg
      fill $vue-ui-color-accent
  &.danger
    svg
      fill $vue-ui-color-danger
  &.warning
    svg
      fill $vue-ui-color-warning
  &.info
    svg
      fill $vue-ui-color-info
  &.success
    svg
      fill $vue-ui-color-success

  &.top
    position relative
    top -.06rem

  // Size
  &.small
    width 12px
    height @width
  &.medium
    width 18px
    height @width
  &.big
    width 24px
    height @width
  &.large
    width 32px
    height @width
  &.huge
    width 42px
    height @width
  &.gigantic
    width 64px
    height @width
</style>
