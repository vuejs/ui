<template>
  <VueButton
    class="vue-ui-dropdown-button"
    v-bind="$attrs"
    v-on="$listeners"
    v-close-popper="!keepOpen"
  >
    <slot/>
  </VueButton>
</template>

<script>
export default {
  name: 'VueDropdownButton',

  inheritAttrs: false,

  props: {
    keepOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"
.vue-ui-dropdown-content .vue-ui-dropdown-button.vue-ui-button
  border-radius 0
  button-transitions()
  text-align left

  > .content
    min-width 100%
    justify-content flex-start
</style>
