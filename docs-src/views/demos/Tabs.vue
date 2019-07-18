<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueTabs</h2>

      <div class="row">
        <VueTabs :tab-id.sync="tabId">
          <VueTab
            id="tab1"
            label="General"
          >
            <div class="tab-content">Content 1</div>
          </VueTab>
          <VueTab
            id="tab2"
            label="Releases"
          >
            <div class="tab-content">Content 2</div>
          </VueTab>
          <VueTab
            id="tab3"
            label="Stats"
          >
            <div class="tab-content">Content 3</div>
          </VueTab>
        </VueTabs>
      </div>

      <div class="row">
        <VueTabs :tab-id.sync="tabId" group-class="primary start" animate>
          <VueTab
            id="tab1"
            label="General"
            icon="assignment"
          >
            <div class="tab-content">Content 1</div>
          </VueTab>
          <VueTab
            id="tab2"
            label="Releases"
            icon="local_offer"
          >
            <div class="tab-content">Content 2</div>
          </VueTab>
          <VueTab
            id="tab3"
            label="Stats"
            icon="trending_up"
          >
            <div class="tab-content">Content 3</div>
          </VueTab>
        </VueTabs>
      </div>

      <div class="row">
        <VueTabs :tab-id.sync="tabId" group-class="accent end">
          <MyTab
            id="tab1"
            label="General"
          >
            <div class="tab-content">Content 1</div>
          </MyTab>
          <MyTab
            id="tab2"
            label="Releases"
          >
            <div class="tab-content">Content 2</div>
          </MyTab>
          <MyTab
            id="tab3"
            label="Stats"
          >
            <div class="tab-content">Content 3</div>
          </MyTab>
        </VueTabs>
      </div>
    </div>
  </div>
</template>

<script>
import MyTab from '../../components/MyTab.vue'

export default {
  components: {
    MyTab,
  },

  data () {
    return {
      tabId: 'tab1',
    }
  },
}
</script>

<style lang="stylus" scoped>
.tab-content
  padding 24px
</style>
