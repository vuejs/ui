<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueSelect</h2>

      <div class="row">
        <VueButton icon-left="replay" @click="choice = null">Reset</VueButton>
        <VueSelect v-model="choice">
          <VueSelectButton value="apple" label="Apple"/>
          <VueSelectButton value="orange" label="Orange"/>
          <VueSelectButton value="banana" label="Banana"/>
        </VueSelect>
        <VueSelect v-model="choice" button-class="flat">
          <VueSelectButton value="apple" label="Apple"/>
          <VueSelectButton value="orange" label="Orange"/>
          <VueSelectButton value="banana" label="Banana"/>
        </VueSelect>
        <VueSelect disabled v-model="choice">
          <VueSelectButton value="apple" label="Apple"/>
          <VueSelectButton value="orange" label="Orange"/>
          <VueSelectButton value="banana" label="Banana"/>
        </VueSelect>
        <VueSelect disabled v-model="choice" button-class="flat">
          <VueSelectButton value="apple" label="Apple"/>
          <VueSelectButton value="orange" label="Orange"/>
          <VueSelectButton value="banana" label="Banana"/>
        </VueSelect>
      </div>
      <div class="row">
        <VueSelect v-model="choice" icon-left="star" style="width: 200px;">
          <VueSelectButton value="apple" label="Apple"/>
          <VueSelectButton value="orange" label="Orange"/>
          <VueSelectButton value="banana" label="Banana"/>
        </VueSelect>
        <VueSelect v-model="choice" button-class="primary" placeholder="Custom placeholder">
          <VueSelectButton value="apple" class="primary" icon-left="flag" label="Apple"/>
          <VueSelectButton value="orange" class="primary" icon-left="star" label="Orange"/>
          <VueSelectButton value="banana" class="primary" icon-left="build" label="Banana"/>
        </VueSelect>
        <VueSelect v-model="choice" button-class="accent">
          <VueSelectButton value="apple" class="accent" icon-left="flag" label="Apple"/>
          <VueSelectButton value="orange" class="accent" icon-left="star" label="Orange"/>
          <VueSelectButton value="banana" class="accent" icon-left="build" label="Banana"/>
        </VueSelect>
        <VueSelect v-model="choice">
          <VueSelectButton v-for="n in 20" :key="n" :value="n" :label="`Option ${n}`"/>
        </VueSelect>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      choice: '',
    }
  },
}
</script>

<style lang="stylus">
.vue-select
  .dropdown-trigger
    .vue-button
      text-align: left
</style>
