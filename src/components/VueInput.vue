<template>
  <div
    class="vue-input"
    :class="{
      disabled,
      focused
    }"
    @click="focus()"
  >
    <div class="content">
      <VueLoadingIndicator
        v-if="loading"
        class="small"
      />

      <VueIcon
        v-else-if="iconLeft"
        :icon="iconLeft"
        class="input-icon left"
      />

      <slot name="left"/>

      <input
        ref="input"
        class="input"
        :type="type"
        v-model="valueModel"
        :placeholder="placeholder"
        :disabled="disabled"
        @focus="focused = true"
        @blur="focused = false"
      >

      <slot name="right"/>

      <VueIcon
        v-if="iconRight"
        :icon="iconRight"
        class="input-icon right"
      />

      <div class="border"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueInput',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    iconLeft: {
      type: String,
      default: null,
    },

    iconRight: {
      type: String,
      default: null,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    placeholder: {
      type: String,
      default: undefined,
    },

    selectAll: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'text',
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
      set (value) { this.$emit('input', value) },
    },
  },

  methods: {
    focus () {
      const input = this.$refs.input
      input.focus()
      if (this.selectAll) {
        input.setSelectionRange(0, input.value.length)
      }
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

colors($color)
  > .content
    > .border
      background $color
  &.focused
    > .content
      > .vue-loading-indicator
        .animation
          border-right-color $color
          border-bottom-color $color
      > .input-icon
        svg
          fill darken($color, 20%)

.vue-input
  $lightened = lighten($color-dark, 50%)
  display inline-block
  vertical-align middle
  box-sizing border-box

  > .content
    h-box()
    box-center()
    padding 8px 14px
    border none
    color $color-dark
    border-radius 3px
    transition background .3s
    position relative

    > .input
      font-family inherit
      font-size inherit
      color @color
      padding 0
      border none
      background transparent
      width 0
      flex 100% 1 1
      &::placeholder
        color $lightened
      // Disable noisy browser styles
      outline none
      &::-moz-focus-inner
        border 0

    > .input-icon
      &.left
        margin-right 8px
      &.right
        margin-left 8px
      svg
        fill $lightened
        transition fill .3s

    > .vue-loading-indicator
      margin-right 8px
      .animation
        border-right-color $lightened
        border-bottom-color $lightened

    > .border
      position absolute
      bottom 0
      left 30%
      right @left
      opacity 0
      height 2px
      pointer-events none
      transition left .15s, right .15s, opacity .15s

  &:not(.flat)
    > .content
      background lighten($color-light-neutral, 70%)

  colors($color-primary)

  &.accent
    colors($color-accent)

  &.focused
    &:not(.flat)
      > .content
        background $color-light
        border-bottom-left-radius 0
        border-bottom-right-radius 0
        > .border
          left 14px
          right @left
          opacity 1

  &.flat
    > .content
      border-color $color-light
      > .border
        display none

  &:not(.disabled)
    cursor text

  &.disabled
    opacity .5

  .vue-dropdown-content &
    min-width 200px
    padding 0 4px 4px
</style>
