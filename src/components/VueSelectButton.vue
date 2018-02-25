<template>
  <VueGroupButton
    class="vue-select-button"
    v-bind="$attrs"
    v-on="$listeners"
    v-close-popover="!keepOpen"
    @selected="onSelect"
  >
    <slot/>
  </VueGroupButton>
</template>

<script>
import VueDropdownButton from './VueDropdownButton.vue'

export default {
  name: 'VueSelectButton',

  extends: VueDropdownButton,

  inject: [
    'VueSelect',
  ],

  props: {
    selectLabel: {
      type: String,
      default: null,
    },
  },

  methods: {
    onSelect (selected) {
      if (selected) {
        this.VueSelect.setCurrentChild(this)
      }
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-select-button
  border-radius $br !important
</style>
