<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueModal</h2>

      <div class="row">
        <VueButton @click="open = true">Open small modal</VueButton>
      </div>
      <div class="row">
        <VueSwitch v-model="locked" class="right">Locked</VueSwitch>
      </div>

      <VueModal
        v-if="open"
        title="Bug report preview"
        :locked="locked"
        class="small"
        @close="open = false"
      >
        <div class="default-body">
          Et accusamus et exercitationem in neque consequatur libero illo. Excepturi voluptas rerum nostrum quidem voluptatem. Quidem harum consectetur voluptate ut. Quia quae accusantium debitis. Quos ad deserunt dolorem. Tenetur qui aspernatur velit.
        </div>

        <div slot="footer" class="actions">
          <VueButton class="primary" @click="open = false">Close</VueButton>
        </div>
      </VueModal>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      locked: false,
    }
  },
}
</script>
