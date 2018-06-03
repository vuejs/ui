<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueDisable</h2>

      <div class="row">
        <VueSwitch class="right" v-model="boolean">Disable root</VueSwitch>
      </div>
      <div class="row">
        <VueSwitch class="right" v-model="boolean1a">Disable level 1 A</VueSwitch>
      </div>
      <div class="row">
        <VueSwitch class="right" v-model="boolean1b">Disable level 1 B (with stop propagation)</VueSwitch>
      </div>

      <hr>

      <div class="row">
        <VueDisable :disabled="boolean">
          <div class="row">
            <VueButton
              href="https://vuejs.org/"
              target="_blank"
              icon-right="open_in_new"
            >vuejs.org</VueButton>

            <VueSelect v-model="choice">
              <VueSelectButton value="apple" label="Apple"/>
              <VueSelectButton value="orange" label="Orange"/>
              <VueSelectButton value="pear" label="Pear"/>
            </VueSelect>

            <VueInput v-model="string" placeholder="Type a message"/>

            <VueDropdown label="Menu">
              <VueDropdownButton icon-left="edit">Edit</VueDropdownButton>
              <VueDropdownButton icon-left="delete">Delete</VueDropdownButton>
              <VueDropdownButton icon-left="lock" keep-open>Keep open</VueDropdownButton>
            </VueDropdown>
          </div>

          <div class="row">
            <VueDisable :disabled="boolean1a">
              <div class="row">
                <VueButton
                  href="https://vuejs.org/"
                  target="_blank"
                  icon-right="open_in_new"
                >vuejs.org</VueButton>

                <VueSelect v-model="choice">
                  <VueSelectButton value="apple" label="Apple"/>
                  <VueSelectButton value="orange" label="Orange"/>
                  <VueSelectButton value="pear" label="Pear"/>
                </VueSelect>

                <VueInput v-model="string" placeholder="Type a message"/>

                <VueDropdown label="Menu">
                  <VueDropdownButton icon-left="edit">Edit</VueDropdownButton>
                  <VueDropdownButton icon-left="delete">Delete</VueDropdownButton>
                  <VueDropdownButton icon-left="lock" keep-open>Keep open</VueDropdownButton>
                </VueDropdown>
              </div>
            </VueDisable>
          </div>

          <div class="row">
            <VueDisable :disabled="boolean1b" stop-propagation>
              <div class="row">
                <VueButton
                  href="https://vuejs.org/"
                  target="_blank"
                  icon-right="open_in_new"
                >vuejs.org</VueButton>

                <VueSelect v-model="choice">
                  <VueSelectButton value="apple" label="Apple"/>
                  <VueSelectButton value="orange" label="Orange"/>
                  <VueSelectButton value="pear" label="Pear"/>
                </VueSelect>

                <VueInput v-model="string" placeholder="Type a message"/>

                <VueDropdown label="Menu">
                  <VueDropdownButton icon-left="edit">Edit</VueDropdownButton>
                  <VueDropdownButton icon-left="delete">Delete</VueDropdownButton>
                  <VueDropdownButton icon-left="lock" keep-open>Keep open</VueDropdownButton>
                </VueDropdown>
              </div>
            </VueDisable>
          </div>
        </VueDisable>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boolean: false,
      boolean1a: false,
      boolean1b: false,
      choice: null,
      string: '',
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "~@style"

.row
  margin-bottom 8px
  &:last-child
    margin-bottom 0

.vue-disable
  padding 12px
  border-left solid 10px rgba($vue-ui-color-primary, .2)
</style>
