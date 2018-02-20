<template>
  <VueGroupButton
    class="vue-select-button"
    v-bind="$attrs"
    v-on="$listeners"
    v-close-popover="!keepOpen"
  >
    <slot/>
  </VueGroupButton>
</template>

<script>
import VueDropdownButton from './VueDropdownButton.vue'

export default {
  name: 'VueSelectButton',

  extends: VueDropdownButton,

  props: {
    selectLabel: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-select-button
  border-radius 3px !important
</style>
