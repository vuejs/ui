export default {
  name: 'VueIcon',

  functional: true,

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  render (h, { props, data }) {
    return <div
      class="vue-ui-icon"
      {...data}
    >
      <svg>
        <use href={`#ic_${props.icon}_standard`} />
      </svg>
    </div>
  },
}
