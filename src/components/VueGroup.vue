<template>
  <div
    class="vue-group"
    :class="{
      'has-indicator': indicator,
    }"
  >
    <div class="content">
      <slot/>
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
      this.$emit('input', value)
    },

    updateIndicator () {
      this.$nextTick(() => {
        const el = this.$el.querySelector('.selected')
        if (el) {
          this.indicatorStyle = {
            top: el.offsetTop,
            left: el.offsetLeft,
            width: el.offsetWidth,
            height: el.offsetHeight,
          }
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
      border-{direction} solid 2px $color-dark
  &.primary
    > .indicator
      > .content
        border-{direction}-color $color-primary
  &.accent
    > .indicator
      > .content
        border-{direction}-color $color-accent

.vue-group
  position relative

  > .content
    h-box()
    align-items stretch
    justify-content center

  &.vertical
    > .content
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

</style>
