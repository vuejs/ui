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
  background $color-light-neutral
  overflow-y auto

.content
  flex 100% 1 1
  width 0
  overflow auto

.nav-link
  display block
  padding 12px
  color $color-dark
  min-width 150px

  &:hover
    background lighten($color-light-neutral, 25%)

  &.router-link-active
    background $color-primary
    color $color-light
</style>
