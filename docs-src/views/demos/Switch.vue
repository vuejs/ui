<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueSwitch</h2>

      <div class="grid col-2">
        <VueSwitch v-model="boolean">
          Enable setting
        </VueSwitch>
        <VueSwitch class="right" v-model="boolean">
          Enable setting
        </VueSwitch>
        <VueSwitch disabled v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch disabled class="right" v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch class="extend-left" v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch class="extend-left" disabled v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch class="extend-right" v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch class="extend-right" disabled v-model="boolean">
          Disabled setting
        </VueSwitch>
      </div>

      <h3>With icon:</h3>

      <div class="grid col-2">
        <VueSwitch icon="settings" v-model="boolean">
          Enable setting
        </VueSwitch>
        <VueSwitch icon="settings" class="right" v-model="boolean">
          Enable setting
        </VueSwitch>
        <VueSwitch icon="settings" disabled v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch icon="settings" disabled class="right" v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch icon="settings" class="extend-left" v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch icon="settings" class="extend-left" disabled v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch icon="settings" class="extend-right" v-model="boolean">
          Disabled setting
        </VueSwitch>
        <VueSwitch icon="settings" class="extend-right" disabled v-model="boolean">
          Disabled setting
        </VueSwitch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boolean: false,
    }
  },
}
</script>
