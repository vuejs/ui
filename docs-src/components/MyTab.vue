<template>
  <VueTab
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot/>
  </VueTab>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>
