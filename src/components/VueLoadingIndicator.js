export default {
  name: 'VueLoadingIndicator',

  functional: true,

  render (h, { data, children }) {
    return <div class="vue-ui-loading-indicator" {...data}>
      <div class="animation" />
      {children}
    </div>
  },
}
