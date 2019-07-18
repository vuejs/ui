<template>
  <div
    class="vue-ui-group"
    :class="{
      'has-indicator': indicator,
    }"
  >
    <div class="content-wrapper">
      <div class="content">
        <slot/>
      </div>
      <resize-observer v-if="indicator" @notify="updateIndicator()"/>
    </div>

    <div
      v-if="indicator && indicatorStyle"
      class="indicator"
      :style="{
        top: `${indicatorStyle.top}px`,
        left: `${indicatorStyle.left}px`,
        width: `${indicatorStyle.width}px`,
        height: `${indicatorStyle.height}px`,
      }"
    >
      <div class="content">
        <slot name="indicator"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueGroup',

  model: {
    event: 'update',
  },

  provide () {
    return {
      VueGroup: {
        data: this.injection,
        setValue: this.setValue,
      },
    }
  },

  props: {
    value: {},

    indicator: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      injection: {
        value: this.value,
      },

      indicatorStyle: null,
    }
  },

  watch: {
    value (value, oldValue) {
      if (value !== oldValue) {
        this.injection.value = value
        this.updateIndicator()
      }
    },
  },

  mounted () {
    this.updateIndicator()
  },

  methods: {
    setValue (value) {
      this.$emit('update', value)
    },

    updateIndicator () {
      this.$nextTick(() => {
        const el = this.$el.querySelector('.selected')
        if (el) {
          const offset = {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight,
          }
          let parent = el.offsetParent
          while (parent && parent !== this.$el) {
            offset.top += parent.offsetTop
            offset.left += parent.offsetLeft
            parent = parent.offsetParent
          }
          this.indicatorStyle = offset
        } else {
          this.indicatorStyle = null
        }
      })
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

indicator(direction)
  > .indicator
    padding-{direction} 1px
    > .content
      border-{direction} solid 2px rgba($vue-ui-gray-800, .7)
      .vue-ui-dark-mode &
        border-{direction}-color $vue-ui-white
  &.primary
    > .indicator
      > .content
        border-{direction}-color rgba($vue-ui-primary-500, .7)
  &.accent
    > .indicator
      > .content
        border-{direction}-color rgba($vue-ui-accent-500, .7)
        .vue-ui-dark-mode &
          border-{direction}-color $vue-ui-accent-300

.vue-ui-group
  position relative

  > .content-wrapper
    position relative

    > .content
      display flex
      align-items stretch
      justify-content center

      > .vue-ui-button
        flex auto 1 0

  &.start
    > .content-wrapper > .content
      justify-content flex-start

  &.end
    > .content-wrapper > .content
      justify-content flex-end

  &.vertical
    > .content-wrapper > .content
      flex-direction column

  &.inline
    display inline-block
    vertical-align middle

  > .indicator
    $time = .15s
    position absolute
    transition top $time ease-in-out, left $time ease-in-out, width $time ease-in-out, height $time ease-in-out
    pointer-events none
    box-sizing border-box
    h-box()
    box-center()

    > .content
      width 100%
      height 100%

  &:not(.vertical)
    &:not(.top-indicator)
      indicator(bottom)
    &.top-indicator
      indicator(top)
    &.small-indicator
      > .indicator
        > .content
          width 12px

  &.vertical
    &:not(.left-indicator)
      indicator(right)
    &.left-indicator
      indicator(left)
    &.small-indicator
      > .indicator
        > .content
          height 12px

  &.min-size
    > .content-wrapper > .content
      > .vue-ui-button
        flex auto 0 0

  &.extend
    > .content-wrapper > .content
      > .vue-ui-button
        &:not(.icon-button)
          flex 100% 1 1
          width 0

</style>
