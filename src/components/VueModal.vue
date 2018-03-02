<template>
  <transition
    name="vue-modal"
    :duration="{
      enter: 1000,
      leave: 300,
    }"
  >
    <div
      class="vue-modal"
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
          class="close-button icon-button flat"
          icon-left="close"
          @click="close()"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VueModal',

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

  async mounted () {
    await this.$nextTick()
    this.$el.focus()
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

.vue-modal
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
    background rgba($vue-color-light, .9)

  > .shell
    background $vue-color-light
    border-radius $br
    position relative
    max-width calc(100vw - 200px)
    box-shadow 0 10px 60px rgba($md-black, .16)

    > .close-button
      position absolute
      top 16px
      right @top

    > .header,
    > .body > .default-body,
    > .footer > .actions
      padding 24px

    > .header
      border-bottom solid 1px $md-grey-100

      > .title
        font-size 18px

    > .footer > .actions
      h-box()
      box-center()
      > *
        space-between-x(12px)

  &.small
    > .shell
      max-width 500px

.vue-modal-enter-active,
.vue-modal-leave-active
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

.vue-modal-enter,
.vue-modal-leave-to
  > .backdrop,
  > .shell
    opacity 0

  > .shell
    transform scale(.95)

.vue-modal-enter
  > .shell
    > .body,
    > .footer
      opacity 0
      transform translateY(-20px)
</style>
