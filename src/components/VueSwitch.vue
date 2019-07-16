<template>
  <div
    class="vue-ui-switch"
    :class="{
      selected: value,
      disabled: finalDisabled,
      focus: focused,
    }"
    :tabindex="disabled ? -1 : 0"
    role="checkbox"
    :aria-disabled="disabled"
    :aria-checked="!!value"
    @click="toggleValue"
    @keydown.enter="focused = true; toggleValue($event)"
    @keydown.space="focused = true; toggleValue($event)"
    @blur="focused = false"
  >
    <div class="content">
      <VueIcon
        v-if="icon"
        :icon="icon"
      />
      <span class="slot">
        <slot/>
      </span>
      <div class="wrapper">
        <div class="bullet"/>
      </div>
    </div>
  </div>
</template>

<script>
import DisabledChild from '../mixins/DisabledChild'

export default {
  name: 'VueSwitch',

  model: {
    event: 'update',
  },

  mixins: [
    DisabledChild,
  ],

  props: {
    icon: {
      type: String,
      default: null,
    },

    value: {},
  },

  data () {
    return {
      focused: false,
    }
  },

  computed: {
    valueModel: {
      get () { return this.value },
      set (value) { this.$emit('update', value) },
    },
  },

  methods: {
    toggleValue () {
      if (this.finalDisabled) return
      this.valueModel = !this.valueModel
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

$width = 32px
$height = 16px

.vue-ui-switch
  display inline-block
  vertical-align middle
  user-select none
  position relative
  disable-focus-styles()
  font-size 14px
  > .content
    h-box()
    align-items center
    > .vue-ui-icon
      margin-right 6px
    > .wrapper
      width $width
      height $height
      margin-left 8px
      border-radius (@height / 2)
      background $vue-ui-primary-100
      transition background .3s
      position relative
      padding 1px
      box-sizing border-box
      .vue-ui-dark-mode &
        background $vue-ui-gray-700
      .bullet
        width (@height - 2px)
        height (@height - 2px)
        border-radius 50%
        background $vue-ui-gray-800
        transition margin-left .2s ease-in-out, transform .2s ease-in-out
        .vue-ui-dark-mode &
          background $vue-ui-white

  &.no-margin
    > .content
      > .wrapper
        margin 0

  &.selected
    > .content
      > .wrapper
        background $vue-ui-primary-500
        .bullet
          margin-left ($width - $height)

  &.right,
  &.extend-right
    > .content
      flex-direction row-reverse
      > .wrapper
        margin-left 0
        margin-right 8px
      > .vue-ui-icon
        margin-right 0
        margin-left 6px

  &.right
    > .content
      justify-content flex-end

  &.big
    font-size 16px

  &:not(.disabled)
    cursor pointer
    &:hover
      > .content
        > .wrapper
          .bullet
            background $vue-ui-gray-600
            .vue-ui-dark-mode &
              background $vue-ui-gray-100
    &:active
      > .content
        > .wrapper
          .bullet
            transform scale(.8)

  &.disabled
    opacity .5

  &.extend-left
    > .content
      > .slot
        flex 100% 0 1
      > .wrapper
        margin-right 0

  &.extend-right
    > .content
      > .slot
        flex 100% 0 1
        text-align right
      > .wrapper
        margin-left 0

  .vue-ui-dropdown-content > &
    > .content
      min-width 100%
      padding 8px 14px
      box-sizing border-box

  // Focus
  &.focus,
  &:focus.focus-visible
    > .content > .wrapper::after
      content ''
      display block
      position absolute
      top -1px
      bottom @top
      left @top
      right @top
      border 1px solid
      border-radius ($height / 2 + 1px)
      animation vue-ui-focus .6s forwards
      .vue-ui-dark-mode &
        animation vue-ui-focus-dark .6s forwards
</style>
