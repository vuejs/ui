<template>
  <div class="demo">
    <div class="ui-test">
      <h2>Colors</h2>

      <div
        v-for="type of ['gray', 'primary', 'accent', 'danger', 'warning', 'info']"
        :key="type"
        class="row"
      >
        <div
          v-for="i in 9"
          :key="i"
          :class="`color-${type}-${i}00`"
          class="color"
        >
          <div class="color-preview"/>
          <div class="label">{{ type }}-{{ i }}00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import "~@style"

.row
  display grid
  grid-template-columns repeat(auto-fit, 60px)
  grid-gap 24px
  margin-bottom @grid-gap

.color
  .color-preview
    width 60px
    height @width
    border-radius 50%

  .label
    opacity .5
    font-size 12px
    margin-top 4px
    text-align center

  for type, typeIndex in 'gray' primary accent danger warning info
    for i in (1..9)
      &.color-{type}-{i}00
        .color-preview
          background lookup('$vue-ui-' + type + '-' + i + '00')
</style>
