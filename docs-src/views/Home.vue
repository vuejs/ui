<template>
  <div class="home">
    <div class="side-pane">
      <nav>
        <router-link
          v-for="(demo, index) of demos"
          :key="index"
          :to="{ name: demo.name }"
          class="nav-link"
        >
          {{ demo.meta.label }}
        </router-link>
      </nav>
    </div>

    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import demos from '@/demo-routes'

export default {
  name: 'home',

  created () {
    this.demos = demos
  },
}
</script>

<style lang="stylus" scoped>
@import "~@style"

.home
  display flex

.side-pane
  flex auto 0 0
  background $vue-ui-color-light-neutral
  overflow-y auto
  .vue-ui-dark-mode &
    background $vue-ui-color-darker

.content
  flex 100% 1 1
  width 0
  overflow auto

.nav-link
  display block
  padding 12px
  color $vue-ui-color-dark
  min-width 150px
  .vue-ui-dark-mode &
    color $vue-ui-color-light

  &:hover
    background lighten($vue-ui-color-light-neutral, 25%)
    .vue-ui-dark-mode &
      background lighten($vue-ui-color-dark, 25%)

  &.router-link-active
    background $vue-ui-color-primary
    color $vue-ui-color-light
</style>
