<template>
  <div
    class="vue-ui-form-field"
    :class="{
      focused: injectedData.focused,
      [`status-${injectedData.status}`]: injectedData.status,
    }"
  >
    <div class="wrapper">
      <div class="title">
        <slot name="title">
          <span v-html="title"/>
        </slot>
      </div>
      <div class="content">
        <slot/>
      </div>
      <div
        class="subtitle"
        :class="{
          [`vue-ui-text ${injectedData.status}`]: injectedData.status,
        }"
      >
        <VueIcon
          v-if="subtitleIconId"
          :icon="subtitleIconId"
        />
        <slot name="subtitle">
          <span v-html="subtitle"/>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
const statusIcons = {
  danger: 'error',
  warning: 'warning',
  info: 'info',
  success: 'check_circle',
}

export default {
  name: 'VueFormField',

  provide () {
    return {
      VueFormField: {
        data: this.injectedData,
      },
    }
  },

  props: {
    subtitle: {
      type: String,
      default: undefined,
    },

    subtitleIcon: {
      type: String,
      default: undefined,
    },

    statusIcon: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: undefined,
    },
  },

  data () {
    return {
      injectedData: {
        focused: false,
        status: null,
      },
    }
  },

  computed: {
    subtitleIconId () {
      if (this.subtitleIcon) {
        return this.subtitleIcon
      }

      if (this.statusIcon) {
        const status = this.injectedData.status
        if (status) {
          return statusIcons[status]
        }
      }
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-ui-form-field
  > .wrapper
    &,
    > .content
      v-box()
      align-items stretch

    > .content
      margin 6px 0

      > *
        space-between-y(8px)

    > .title,
    > .subtitle
      transition opacity .3s

    > .subtitle
      font-size 14px
      &:not(.primary):not(.accent):not(.danger):not(.warning):not(.info):not(.success):not(.flat)
        color $vue-ui-gray-600
        .vue-ui-icon
          svg
            fill @color
        .vue-ui-dark-mode &
          color $vue-ui-primary-100
          .vue-ui-icon
            svg
              fill @color

  &:not(.focused)
    > .wrapper
      > .title,
      > .subtitle
        opacity .75
</style>
