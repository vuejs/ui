<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <div class="vue-ui-spacer"/>
      <VueGroup v-model="theme" class="inline">
        <VueGroupButton value="default">Default</VueGroupButton>
        <VueGroupButton value="dark">Dark</VueGroupButton>
        <VueGroupButton value="high-contrast">High contrast</VueGroupButton>
      </VueGroup>
    </div>
    <router-view class="main-page"/>
  </div>
</template>

<script>
export default {
  computed: {
    theme: {
      get () { return this.$store.state.theme },
      set (v) { this.$store.commit('SWITCH_THEME', v) },
    },
  },
  mounted () {
    this.$store.commit('SWITCH_THEME', localStorage.getItem('vue-ui:theme') || 'default')
  },
}
</script>

<style lang="stylus">
@import "~@style"

html,
body,
#app
  height 100%

#app
  v-box()

.main-page
  flex 100% 1 1 !important

#nav
  padding 12px 24px
  border-bottom solid 1px $vue-ui-color-light-neutral
  h-box()
  .vue-ui-dark-mode &
    border-bottom-color $vue-ui-color-dark

  a
    color $vue-ui-color-dark
    display inline-block
    padding 0 6px
    .vue-ui-dark-mode &
       color $vue-ui-color-light-neutral

    &.router-link-exact-active
      color $vue-ui-color-primary

.demo
  padding 24px

  h2
    &:first-child
      margin-top 0

.ui-test
  > .row,
  > .grid
    margin-bottom 12px

  > .grid
    display grid
    grid-gap 12px
    for n in (2..10)
      &.col-{n}
        grid-template-columns repeat(n, 1fr)
</style>
