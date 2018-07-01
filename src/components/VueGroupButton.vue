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
    button-colors($vue-ui-color-dark, $vue-ui-color-light-neutral)
    .vue-ui-dark-mode &
      button-colors($vue-ui-color-light, $vue-ui-color-dark)
      &.vue-ui-select-button
        button-colors($vue-ui-color-light, $vue-ui-color-dark-neutral)

  &.selected
    .vue-ui-group.has-indicator.primary &
      button-colors($vue-ui-color-primary, $vue-ui-color-light-neutral)
      .vue-ui-dark-mode &
        button-colors($vue-ui-color-primary, $vue-ui-color-dark)
    .vue-ui-group.has-indicator.accent &
      button-colors($vue-ui-color-accent, $vue-ui-color-light-neutral)
      .vue-ui-dark-mode &
        button-colors(lighten($vue-ui-color-accent, 60%), $vue-ui-color-dark)

  .vue-ui-group:not(.has-indicator) &
    &.selected
      &:not(.primary):not(.accent):not(.danger):not(.warning):not(.info):not(.success):not(.flat)
        button-colors($vue-ui-color-light, $vue-ui-color-dark)
        .vue-ui-dark-mode &
          button-colors($vue-ui-color-light, $vue-ui-color-dark-neutral)
          &.vue-ui-select-button
            background lighten($vue-ui-color-dark-neutral, 30%)

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
    width 100%
    &:not(.flat)
      &:not(:first-child)
        border-top-left-radius 0
        border-top-right-radius 0
      &:not(:last-child)
        border-bottom-left-radius 0
        border-bottom-right-radius 0
      &.round.selected
        background $vue-ui-color-light-neutral !important
        .vue-ui-dark-mode &
          background $vue-ui-color-dark !important
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
</style>
