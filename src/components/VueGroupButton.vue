<template>
  <VueButton
    class="vue-ui-group-button"
    :class="{
      selected,
      flat: flat && !selected,
    }"
    :aria-selected="selected"
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

    flat: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    selected () {
      return this.value === this.VueGroup.data.value
    },
  },

  watch: {
    selected (value, oldValue) {
      if (value !== oldValue) {
        this.$emit('selected', value)
      }
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

.vue-ui-group-button.vue-ui-button
  button-transitions()
  &:not(.selected):not(.flat)
    button-colors($vue-ui-gray-800, $vue-ui-primary-100)
    .vue-ui-dark-mode &
      button-colors($vue-ui-white, $vue-ui-gray-800)
      &.vue-ui-select-button
        button-colors($vue-ui-white, $vue-ui-gray-600)

  &.selected
    .vue-ui-group.has-indicator.primary &
      button-colors($vue-ui-primary-500, $vue-ui-primary-100)
      .vue-ui-dark-mode &
        button-colors($vue-ui-primary-500, $vue-ui-gray-800)
    .vue-ui-group.has-indicator.accent &
      button-colors($vue-ui-accent-500, $vue-ui-primary-100)
      .vue-ui-dark-mode &
        button-colors($vue-ui-accent-300, $vue-ui-gray-800)

  .vue-ui-group:not(.has-indicator) &
    &.selected
      &:not(.primary):not(.accent):not(.danger):not(.warning):not(.info):not(.success):not(.flat)
        button-colors($vue-ui-white, $vue-ui-gray-800)
        .vue-ui-dark-mode &
          button-colors($vue-ui-white, $vue-ui-gray-600)
          &.vue-ui-select-button
            background $vue-ui-gray-400

  &,
  &.selected
    .vue-ui-group.has-indicator &
      &.flat
        &,
        .vue-ui-dark-mode &
          background transparent

  .vue-ui-group:not(.vertical) &
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

  .vue-ui-group.vertical &
    display flex
    &:not(.icon-button)
      width 100%
    &:not(.flat)
      &:not(:first-child)
        border-top-left-radius 0
        border-top-right-radius 0
      &:not(:last-child)
        border-bottom-left-radius 0
        border-bottom-right-radius 0
      &.round.selected
        background $vue-ui-primary-100 !important
        .vue-ui-dark-mode &
          background $vue-ui-gray-800 !important
        .vue-ui-high-contrast &
          background white !important
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
          .vue-ui-high-contrast &
            display none
        > .content
          position relative
          z-index 1

  &.selected
    &,
    .vue-ui-group.vertical &
      .vue-ui-high-contrast &
        background white !important
        color black !important
        font-weight bold
        svg
          fill @color
</style>
