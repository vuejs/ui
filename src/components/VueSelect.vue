<template>
  <VueDropdown
    class="vue-select"
    v-bind="$attrs"
    :icon-left="displayedIcon"
    :icon-right="iconRight"
    :label="displayedLabel"
    :popover-class="['popover', 'select-popover', popoverClass]"
  >
    <template slot="trigger">
      <slot name="trigger" :label="displayedLabel"/>
    </template>

    <VueGroup
      v-model="valueModel"
      class="vertical"
    >
      <slot/>
    </VueGroup>
  </VueDropdown>
</template>

<script>
export default {
  name: 'VueSelect',

  inheritAttrs: false,

  props: {
    iconLeft: {
      type: String,
      default: null,
    },

    iconRight: {
      type: String,
      default: 'keyboard_arrow_down',
    },

    label: {
      type: String,
      default: null,
    },

    placeholder: {
      type: String,
      default: 'Select...',
    },

    popoverClass: {
      type: String,
      default: undefined,
    },

    value: {},
  },

  data () {
    return {
      currentChild: null,
    }
  },

  computed: {
    displayedLabel () {
      if (this.label) {
        return this.label
      } else if (this.currentChild) {
        return this.currentChild.selectLabel ||
          this.currentChild['select-label'] ||
          this.currentChild.label ||
          this.value
      } else if (this.placeholder) {
        return this.placeholder
      } else {
        return this.value
      }
    },

    displayedIcon () {
      if (this.iconLeft) {
        return this.iconLeft
      } else if (this.currentChild) {
        return this.currentChild.icon ||
          this.currentChild.icon ||
          this.currentChild.iconLeft ||
          this.currentChild['icon-left']
      }
    },

    valueModel: {
      get () { return this.value },
      set (value) { this.$emit('input', value) },
    },
  },

  watch: {
    value (value, oldValue) {
      if (value !== oldValue) {
        this.updateChild()
      }
    },
  },

  mounted () {
    this.updateChild()
  },

  methods: {
    updateChild () {
      this.$nextTick(() => {
        this.currentChild = null
        for (const vnode of this.$slots.default) {
          if (vnode.data && (vnode.data.props || vnode.data.attrs)) {
            const value = vnode.data.props && typeof vnode.data.props.value !== 'undefined' ? vnode.data.props.value : vnode.data.attrs.value
            if (value === this.value) {
              this.currentChild = {
                ...vnode.data.attrs,
                ...vnode.data.props,
              }
            }
          }
        }
      })
    },
  },
}
</script>
