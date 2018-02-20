<script>
export default {
  name: 'VueIcon',

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  render (h) {
    return h('div', {
      staticClass: 'vue-icon',
      on: { click: event => this.$emit('click', event) },
    }, [
      h('svg', [
        h('use', { attrs: {
          'xlink:href': `#ic_${this.icon}_24px`,
        }}),
      ]),
    ])
  },
}
</script>

<style lang="stylus">
.vue-icon
  display inline-block
  width 16px
  height @width
  svg
    width 100%
    height 100%
    fill black
    pointer-events none
  &.small
    width 12px
    height @width
  &.medium
    width 14px
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
