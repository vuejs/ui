<template>
  <div class="demo">
    <div class="ui-test">
      <h2>VueInput</h2>

      <div class="row">Message: {{ string }}</div>

      <div class="grid col-6">
        <VueInput v-model="string" placeholder="Type a message"/>
        <VueInput class="accent" v-model="string" placeholder="Accent input"/>
        <VueInput icon-left="search" v-model="string" placeholder="Type a message"/>
        <VueInput icon-right="lock" type="password" class="accent" v-model="string" placeholder="Password"/>
        <VueInput loading-left v-model="string" placeholder="Type a message"/>
        <VueInput loading-right v-model="string" placeholder="Type a message"/>
        <VueButton icon-left="replay" @click="string = ''">Reset</VueButton>
        <VueInput class="flat" v-model="string" placeholder="Flat input"/>
        <VueInput class="flat" icon-left="search" v-model="string" placeholder="Type a message"/>
        <VueInput class="flat accent" icon-right="arrow_forward" v-model="string" placeholder="Type a message"/>
        <VueInput class="flat" loading-left v-model="string" placeholder="Type a message"/>
        <VueInput class="flat" loading-right v-model="string" placeholder="Type a message"/>
      </div>

      <div class="grid col-6">
        <VueInput disabled v-model="string" placeholder="Type a message"/>
        <VueInput disabled class="accent" v-model="string" placeholder="Accent input"/>
        <VueInput disabled icon-left="search" v-model="string" placeholder="Type a message"/>
        <VueInput disabled icon-right="arrow_forward" class="accent" v-model="string" placeholder="Type a message"/>
        <VueInput disabled loading-left v-model="string" placeholder="Type a message"/>
        <VueInput disabled loading-right v-model="string" placeholder="Type a message"/>
        <VueButton disabled icon-left="replay" @click="string = ''">Reset</VueButton>
        <VueInput disabled class="flat" v-model="string" placeholder="Flat input"/>
        <VueInput disabled class="flat" icon-left="search" v-model="string" placeholder="Type a message"/>
        <VueInput disabled class="flat accent" icon-right="arrow_forward" v-model="string" placeholder="Type a message"/>
        <VueInput disabled class="flat" loading-left v-model="string" placeholder="Type a message"/>
        <VueInput disabled class="flat" loading-right v-model="string" placeholder="Type a message"/>
      </div>

      <div class="row">
        With suggestion: <VueInput icon-left="search" v-model="string" placeholder="Search a fruit" :suggestion="suggestion"/>
      </div>

      <div class="row">Textarea:</div>

      <div class="grid col-6">
        <VueInput type="textarea" rows="4" v-model="string" placeholder="Type a message"/>
      </div>

      <div class="row">Big:</div>

      <div class="row">
        <VueInput v-model="string" placeholder="Type a message" class="big"/>
        <VueButton class="primary icon-button big" icon-left="search"/>
        <VueButton class="big" label="Foobar"/>
      </div>
    </div>

    <div class="ui-test">
      <h2>VueFormField</h2>

      <div class="grid col-2">
        <VueFormField
          title="Type a message"
          subtitle="The message shouldn't be more than 100 characters."
        >
          <VueInput v-model="string" placeholder="Type a message"/>
        </VueFormField>

        <VueFormField
          title="Invalid message"
          status-icon
        >
          <VueInput v-model="string" placeholder="Type a message" status="danger" icon-right="error"/>
          <span slot="subtitle">The message is invalid <a href="https://vuejs.org" target="_blank">doc</a></span>
        </VueFormField>

        <VueFormField
          title="Warning message"
          subtitle="The message is valid"
          status-icon
        >
          <VueInput v-model="string" placeholder="Type a message" status="warning" icon-right="warning"/>
        </VueFormField>

        <VueFormField
          title="Valid message"
          subtitle="The message is valid"
          status-icon
        >
          <VueInput v-model="string" placeholder="Type a message" status="success" icon-right="check_circle"/>
        </VueFormField>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      string: '',
      suggestions: [
        'apple',
        'orange',
        'banana',
      ],
    }
  },

  computed: {
    suggestion () {
      return this.suggestions.find(
        s => s.startsWith(this.string)
      )
    },
  },
}
</script>
