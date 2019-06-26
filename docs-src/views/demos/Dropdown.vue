<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueDropdown</h2>

      <div class="row">
        <VueDropdown label="Menu">
          <VueDropdownButton icon-left="edit">Edit</VueDropdownButton>
          <VueDropdownButton icon-left="delete">Delete</VueDropdownButton>
          <VueDropdownButton icon-left="lock" keep-open>Keep open</VueDropdownButton>
        </VueDropdown>

        <VueDropdown label="Menu" button-class="primary">
          <VueDropdownButton class="primary" icon-left="edit">Edit</VueDropdownButton>
          <VueDropdownButton class="primary" icon-left="delete">Delete</VueDropdownButton>
          <VueDropdownButton class="primary" icon-left="lock" keep-open>Keep open</VueDropdownButton>
        </VueDropdown>

        <VueDropdown label="Menu" button-class="accent">
          <VueDropdownButton class="accent" icon-left="edit">Edit</VueDropdownButton>
          <VueDropdownButton class="accent" icon-left="delete">Delete</VueDropdownButton>
          <VueDropdownButton class="accent" icon-left="lock" keep-open>Keep open</VueDropdownButton>
        </VueDropdown>

        <VueDropdown>
          <VueButton
            slot="trigger"
            icon-left="more_vert"
            class="icon-button flat"
          />

          <VueDropdownButton class="accent" icon-left="edit">Edit</VueDropdownButton>
          <VueDropdownButton class="accent" icon-left="delete">Delete</VueDropdownButton>
          <VueDropdownButton class="accent" icon-left="lock" keep-open>Keep open</VueDropdownButton>
        </VueDropdown>

        <VueDropdown label="Settings" icon-left="settings" icon-right="keyboard_arrow_down">
          <VueSwitch icon="bookmark" v-model="boolean" class="extend-left">Bookmark</VueSwitch>
          <VueSwitch icon="build" v-model="boolean" class="extend-left">Build</VueSwitch>
          <VueDropdownButton icon-left="settings_backup_restore">Backup and Restore Settings</VueDropdownButton>
        </VueDropdown>

        <VueDropdown label="With input">
          <VueInput v-model="string" placeholder="Search" icon-left="search"/>
          <VueDropdownButton>Result 1</VueDropdownButton>
          <VueDropdownButton>Result 2</VueDropdownButton>
          <VueDropdownButton>Result 3</VueDropdownButton>
        </VueDropdown>

        <VueDropdown label="Grid menu">
          <div class="vue-ui-grid default-gap col-2">
            <VueDropdownButton icon-left="edit">Edit</VueDropdownButton>
            <VueDropdownButton icon-left="delete">Delete</VueDropdownButton>
            <VueDropdownButton icon-left="lock" keep-open>Keep open</VueDropdownButton>
            <VueDropdownButton icon-left="mood">Hello</VueDropdownButton>
          </div>
        </VueDropdown>

        <VueDropdown label="Grid with big gap" placement="right">
          <div class="vue-ui-grid big-gap col-2">
            <VueDropdownButton icon-left="edit" class="big">Edit</VueDropdownButton>
            <VueDropdownButton icon-left="delete" class="big">Delete</VueDropdownButton>
            <VueDropdownButton icon-left="lock" class="big" keep-open>Keep open</VueDropdownButton>
            <VueDropdownButton icon-left="mood" class="big">Hello</VueDropdownButton>
          </div>
        </VueDropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boolean: false,
      string: '',
    }
  },
}
</script>
