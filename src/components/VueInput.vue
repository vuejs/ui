<template>
  <div
    class="vue-input"
    :class="{
      disabled: finalDisabled,
      focused,
      'show-suggestion': showSuggestion,
    }"
    @click="focus()"
  >
    <div class="content">
      <VueLoadingIndicator
        v-if="loadingLeft"
        class="small left"
      />

      <VueIcon
        v-else-if="iconLeft"
        :icon="iconLeft"
        class="input-icon left"
      />

      <slot name="left"/>

      <div class="input-wrapper">
        <component
          :is="type === 'textarea' ? type : 'input'"
          ref="input"
          class="input"
          :type="type"
          :value="valueModel"
          @input="valueModel = $event.currentTarget.value"
          :placeholder="placeholder"
          :disabled="finalDisabled"
          v-bind="$attrs"
          @focus="onFocus"
          @blur="onBlur"
          @keydown.tab="onKeyTab"
        />

        <input
          v-if="showSuggestion"
          class="input suggestion"
          :value="suggestion"
          disabled
        >
      </div>

      <slot name="right"/>

      <VueIcon
        v-if="iconRight"
        :icon="iconRight"
        class="input-icon right"
      />

      <VueLoadingIndicator
        v-if="loadingRight"
        class="small right"
      />

      <!-- Focus animation -->
      <div class="border"/>
    </div>
  </div>
</template>

<script>
import DisabledChild from '../mixins/DisabledChild'

export default {
  name: 'VueInput',

  inheritAttrs: false,

  mixins: [
    DisabledChild,
  ],

  props: {
    iconLeft: {
      type: String,
      default: null,
    },

    iconRight: {
      type: String,
      default: null,
    },

    loadingLeft: {
      type: Boolean,
      default: false,
    },

    loadingRight: {
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

    suggestion: {
      type: [String, Number],
      default: null,
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
    showSuggestion () {
      return this.suggestion !== null && this.suggestion !== this.value && this.focused && this.value
    },

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

    onBlur (event) {
      this.focused = false
      this.$emit('blur', event)
    },

    onFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },

    onKeyTab (event) {
      if (this.showSuggestion) {
        this.valueModel = this.suggestion
        event.preventDefault()
        event.stopPropagation()
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
  $lightened = lighten($vue-color-dark, 50%)
  display inline-block
  vertical-align middle
  box-sizing border-box
  width auto
  min-width 200px

  > .content
    h-box()
    box-center()
    padding 0 10px
    border solid 1px $vue-color-light-neutral
    color $vue-color-dark
    border-radius $br
    transition background .3s
    position relative

    > .input-wrapper
      position relative
      width 0
      flex auto 1 1

      > .input
        position relative
        z-index 1
        font-family inherit
        font-size 14px
        line-height 14px
        color @color
        padding 0
        width 100%
        display block
        border none
        background transparent
        &:not(textarea)
          height 30px
        &::placeholder
          color $lightened
        // Disable noisy browser styles
        outline none
        &::-moz-focus-inner
          border 0

      > textarea.input
        padding 8px 0
        resize vertical
        min-height 30px
        box-sizing border-box

      > .suggestion
        position absolute
        z-index 0
        top 0
        left 0
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        color $lightened
        pointer-events none

    > .input-icon
      &.left
        margin-right 6px
      &.right
        margin-left 6px
      svg
        fill $lightened
        transition fill .3s

    > .vue-loading-indicator
      &.left
        margin-right 8px
      &.right
        margin-left 8px
      .animation
        border-right-color $lightened
        border-bottom-color $lightened

    > .border
      position absolute
      bottom -1px
      left 30%
      right @left
      opacity 0
      height 2px
      pointer-events none
      transition left .15s, right .15s, opacity .15s

  &:not(.flat)
    > .content
      background lighten($vue-color-light-neutral, 70%)

  &.show-suggestion
    > .content > .input-wrapper > .input
      &::placeholder
        color transparent

  colors($vue-color-primary)

  &.accent
    colors($vue-color-accent)

  &.focused
    &:not(.flat)
      > .content
        background $vue-color-light
        > .border
          left 0
          right @left
          opacity 1

  &.flat
    > .content
      border-color $vue-color-light
      > .border
        display none

  &.big
    > .content
      padding 0 14px
      > .input-wrapper
        > .input
          font-size 16px
          &:not(textarea)
            height 42px
        > textarea.input
          padding 14px 0

      > .input-icon
        width 20px
        height @width
        &.left
          margin-right 10px
        &.right
          margin-left 10px

  &:not(.disabled)
    cursor text

  &.disabled
    opacity .5

  .vue-dropdown-content &
    min-width 200px
    padding 0 4px 4px
</style>
