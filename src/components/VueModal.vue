<template>
  <transition
    name="vue-ui-modal"
    :duration="{
      enter: 1000,
      leave: 300,
    }"
    appear
  >
    <div
      class="vue-ui-modal"
      :class="{
        locked,
      }"
      tabindex="0"
      role="dialog"
      aria-modal="true"
      @keyup.esc="close()"
    >
      <div
        class="backdrop"
        @click="close()"
      />

      <div
        class="shell"
        @keyup.esc="close()"
      >
        <div class="header">
          <slot name="header">
            <div
              v-if="title"
              class="title"
              v-html="title"
            />
          </slot>
        </div>
        <div class="body">
          <slot/>
        </div>
        <div class="footer">
          <slot name="footer"/>
        </div>

        <VueButton
          v-if="!locked"
          class="close-button icon-button flat round"
          icon-left="close"
          @click="close()"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import DisableScroll from '../mixins/DisableScroll'

export default {
  name: 'VueModal',

  mixins: [
    DisableScroll,
  ],

  props: {
    locked: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: null,
    },
  },

  mounted () {
    this.$nextTick(() => {
      this.$el.focus()
    })
  },

  methods: {
    close () {
      if (!this.locked) {
        this.$emit('close')
      }
    },
  },
}
</script>

<style lang="stylus">
@import "../style/imports"

.vue-ui-modal
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  h-box()
  box-center()
  z-index 100

  > .backdrop
    flex none
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background rgba($vue-ui-white, .9)
    .vue-ui-dark-mode &
      background rgba($md-black, .7)

  > .shell
    background $vue-ui-white
    border-radius ($br * 2)
    position relative
    max-width calc(100vw - 100px)
    max-height calc(100vh - 100px)
    box-shadow 0 20px 60px rgba($md-black, .1)
    v-box()
    align-items stretch
    .vue-ui-dark-mode &
      background $vue-ui-gray-900
      box-shadow 0 20px 60px rgba($md-black, .5)

    > .close-button
      position absolute
      top 20px
      right @top

    > .header,
    > .body > .default-body,
    > .footer > .actions
      padding 24px

    > .header
      > .title
        font-size 18px

    > .body
      overflow-x hidden
      overflow-y auto
      flex auto 1 1
      display flex
      flex-direction column

    > .footer > .actions
      h-box()
      box-center()
      > *
        space-between-x(12px)

      &.space-between
        justify-content space-between
      &.center
        justify-content center
      &.start
        justify-content flex-start
      &.end
        justify-content flex-end

  &.small
    > .shell
      max-width 500px
      min-width 400px

  &.medium
    > .shell
      max-width 800px
      min-width 700px

  &.large
    > .shell
      max-width 1200px
      min-width 700px
      width 60vw

.vue-ui-modal-enter-active,
.vue-ui-modal-leave-active
  > .backdrop
    transition opacity .3s
  > .shell
    transition opacity .3s, transform .3s cubic-bezier(0.0, 0.0, 0.2, 1)
    > .body,
    > .footer
      transition transform .8s cubic-bezier(0, 1, 0, 1), opacity .15s
    > .body
      transition-delay .1s
    > .footer
      transition-delay .2s

.vue-ui-modal-enter,
.vue-ui-modal-leave-to
  > .backdrop,
  > .shell
    opacity 0

  > .shell
    transform scale(.95)

.vue-ui-modal-enter
  > .shell
    > .body,
    > .footer
      opacity 0
      transform translateY(-20px)
</style>
