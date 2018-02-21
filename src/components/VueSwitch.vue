<template>
  <label
    class="vue-switch"
    :class="{
      selected: value,
      disabled: finalDisabled,
    }"
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
    <input
      v-if="!finalDisabled"
      type="checkbox"
      v-model="valueModel"
    >
  </label>
</template>

<script>
import DisabledChild from '../mixins/DisabledChild'

export default {
  name: 'VueSwitch',

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

  computed: {
    valueModel: {
      get () { return this.value },
      set (value) { this.$emit('input', value) },
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

$width = 28px
$height = 18px

.vue-switch
  display inline-block
  vertical-align middle
  user-select none
  position relative
  > .content
    h-box()
    align-items center
    > .vue-icon
      margin-right 6px
    > .wrapper
      width $width
      height $height
      margin-left 8px
      border-radius (@height / 2)
      background $color-light-neutral
      transition background .2s
      .bullet
        width @height
        height @height
        border-radius 50%
        background $color-dark
        transition margin-left .2s ease-in-out, transform .2s ease-in-out
  > input
    display block
    margin 0
    padding 0
    position absolute
    cursor pointer
    top 0
    left 0
    width 100%
    height 100%
    opacity 0

  &.no-margin
    > .content
      > .wrapper
        margin 0

  &.selected
    > .content
      > .wrapper
        background $color-primary
        .bullet
          margin-left ($width - $height)

  &.right,
  &.extend-right
    > .content
      flex-direction row-reverse
      > .wrapper
        margin-left 0
        margin-right 8px
      > .vue-icon
        margin-right 0
        margin-left 6px

  &.right
    > .content
      justify-content flex-end

  &:not(.disabled)
    &:hover
      > .content
        > .wrapper
          .bullet
            background lighten($color-dark, 20%)
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

  .vue-dropdown-content &
    > .content
      min-width 100%
      padding 8px 16px
      box-sizing border-box

    &:not(.selected)
      > .content
        > .wrapper
          background $color-light

    &:hover
      > .content
        background lighten($color-light-neutral, 25%)

</style>
