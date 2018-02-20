<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueLoadingIndicator</h2>
      <div class="grid col-3">
        <VueLoadingIndicator class="small"/>
        <VueLoadingIndicator/>
        <VueLoadingIndicator class="big"/>
        <VueLoadingIndicator class="primary small"/>
        <VueLoadingIndicator class="primary"/>
        <VueLoadingIndicator class="primary big"/>
        <VueLoadingIndicator class="accent small"/>
        <VueLoadingIndicator class="accent"/>
        <VueLoadingIndicator class="accent big"/>
      </div>
      <div class="row">
        Inline:
        <VueLoadingIndicator class="inline small"/>
        <VueLoadingIndicator class="inline small primary"/>
        <VueLoadingIndicator class="inline small accent"/>
        <VueLoadingIndicator class="inline"/>
        <VueLoadingIndicator class="inline primary"/>
        <VueLoadingIndicator class="inline accent"/>
        <VueLoadingIndicator class="inline big"/>
        <VueLoadingIndicator class="inline big primary"/>
        <VueLoadingIndicator class="inline big accent"/>
      </div>
      <div class="row">
        <VueButton @click="loading = !loading">Toggle loading overlay</VueButton>
        <VueLoadingIndicator
          v-if="loading"
          class="overlay fixed primary big"
        >
          <VueButton @click="loading = false">Close</VueButton>
        </VueLoadingIndicator>
      </div>
    </div>

    <div class="ui-test">
      <h2>VueLoadingBar</h2>

      <div class="grid col-4">
        <VueLoadingBar :value="0"/>
        <VueLoadingBar :value=".5"/>
        <VueLoadingBar :value="1"/>
        <VueLoadingBar unknown/>
        <VueLoadingBar class="primary" :value="0"/>
        <VueLoadingBar class="primary" :value=".5"/>
        <VueLoadingBar class="primary" :value="1"/>
        <VueLoadingBar class="primary" unknown/>
        <VueLoadingBar class="accent" :value="0"/>
        <VueLoadingBar class="accent" :value=".5"/>
        <VueLoadingBar class="accent" :value="1"/>
        <VueLoadingBar class="accent" unknown/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
    }
  },
}
</script>

