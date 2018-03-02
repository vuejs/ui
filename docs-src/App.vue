<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="main-page"/>
  </div>
</template>

<style lang="stylus">
@import "~@style"

a
  text-decoration none

body
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  margin 0

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
  border-bottom solid 1px $vue-color-light-neutral

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active
      color #42b983

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
