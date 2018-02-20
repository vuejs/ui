<template>
  <VueButton
    class="vue-group-button"
    :class="{
      selected
    }"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot/>
  </VueButton>
</template>

<script>
export default {
  name: 'VueGroupButton',

  inheritAttrs: false,

  inject: [
    'VueGroup',
  ],

  props: {
    value: {},
  },

  computed: {
    selected () {
      return this.value === this.VueGroup.data.value
    },
  },

  methods: {
    handleClick (...args) {
      this.$emit('click', ...args)
      this.VueGroup.setValue(this.value)
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-group-button.vue-button
  button-transitions()
  &:not(.selected):not(.flat)
    button-colors($color-dark, $color-light-neutral)

  &.selected
    pointer-events none
    .vue-group.has-indicator.primary &
      button-colors($color-primary, $color-light-neutral)
    .vue-group.has-indicator.accent &
      button-colors($color-accent, $color-light-neutral)

  &,
  &.selected
    .vue-group.has-indicator &
      &.flat
        background transparent

  .vue-group:not(.has-indicator) &
    &.selected
      &:not(.primary):not(.accent):not(.danger):not(.warning):not(.info):not(.success):not(.flat)
        button-colors($color-light, $color-dark)

  .vue-group:not(.vertical) &
    &:not(.flat)
      &:not(:first-child)
        border-top-left-radius 0
        border-bottom-left-radius 0
      &:not(:last-child)
        border-top-right-radius 0
        border-bottom-right-radius 0
      &.round
        &:first-child
          padding-left 18px
        &:last-child
          padding-right 18px
        &.icon-button
          &:first-child
            padding-left 12px
          &:last-child
            padding-right 12px

  .vue-group.vertical &
    display flex
    width 100%
    &:not(.flat)
      &:not(:first-child)
        border-top-left-radius 0
        border-top-right-radius 0
      &:not(:last-child)
        border-bottom-left-radius 0
        border-bottom-right-radius 0
      &.round.selected
        background $color-light-neutral !important
        &::before
          content ''
          display block
          position absolute
          top 0
          left 0
          width 100%
          height 100%
          z-index 0
          border-radius 17px
        > .content
          position relative
          z-index 1

  &.flat
    &:hover
      .vue-group.has-indicator &
        button-colors(black, transparent)
    &.selected
      .vue-group.has-indicator:not(.primary):not(.accent) &
        button-colors(black, transparent)
</style>
