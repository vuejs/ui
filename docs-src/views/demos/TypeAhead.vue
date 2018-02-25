<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueTypeAhead</h2>

      <div class="row">
        <VueTypeAhead
          v-model="choice"
          :suggestions="suggestions"
          :loading="loading"
          placeholder="Vue version"
        />
        <VueTypeAhead
          v-model="choice"
          :suggestions="suggestions"
          :loading="loading"
          placeholder="Show directly"
          show-all
          show-max="30"
        />
        <VueTypeAhead
          v-model="choice"
          :suggestions="suggestions"
          :loading="loading"
          placeholder="Restrict choice"
          show-all
          show-max="30"
          restrict-choice
        />
      </div>
    </div>
  </div>
</template>

<script>
import { versionCompare } from '../../helpers.js'

export default {
  data () {
    return {
      choice: '',
      loading: false,
      versions: [],
    }
  },

  computed: {
    suggestions () {
      return this.versions.slice()
        .sort((a, b) => -versionCompare(a.value, b.value))
    },
  },

  async mounted () {
    this.loading = true
    await this.fetchVersions()
    this.loading = false
  },

  methods: {
    async fetchVersions (page = 1) {
      const response = await fetch(`https://api.github.com/repos/vuejs/vue/releases?page=${page}&per_page=100`)
      const releases = await response.json()

      if (!releases || !(releases instanceof Array)) return false

      this.versions = this.versions.concat(releases.map(
        r => ({ value: /^v/.test(r.tag_name) ? r.tag_name.substr(1) : r.tag_name })
      ))

      const link = response.headers.get('Link')

      if (link && link.indexOf('rel="next"') > -1) {
        await this.fetchVersions(page + 1)
      }
    },
  },
}
</script>
