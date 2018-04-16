/**
 * (Use with the CoupledChild mixin)
 * Mixin allowing the automatic collection of children while preserving the virtual dom children order at all times.
 * Useful for creating tabs-style component, when we need to replicate the order of the children to display
 * a group of button (tab strip).
 * @param {string} name Name of the injection
 */
export default function (name) {
  // @vue/component
  return {
    provide () {
      const proxy = {}
      Object.defineProperty(proxy, 'activeChild', {
        get: () => this.activeChild,
      })
      proxy.$_addCoupledChild = this.$_addCoupledChild.bind(this)
      proxy.$_removeCoupledChild = this.$_removeCoupledChild.bind(this)
      return {
        [name]: proxy,
      }
    },

    props: {
      childIndex: {
        default: 0,
      },
    },

    data () {
      return {
        children: [],
        activeChildIndex: parseInt(this.childIndex) || 0,
      }
    },

    computed: {
      activeChild () {
        if (this.activeChildIndex < this.children.length) {
          return this.children[this.activeChildIndex]
        }
      },
    },

    watch: {
      childIndex (val) {
        this.activateChild(parseInt(val) || 0, true)
      },
    },

    methods: {
      /**
       * Activates a child.
       * @param {number} index Index of child to activate
       * @param {boolean} external Indicates if the activation comes from an external source (like props)
       */
      activateChild (index, external = false) {
        const oldIndex = this.activeChildIndex
        if (index < 0) {
          index = 0
        } else if (index >= this.children.length) {
          index = this.children.length - 1
        }
        this.activeChildIndex = index
        this.$emit('update:childIndex', index)
        this.childActivated(index, oldIndex, external)
      },

      /**
       * Hook called when a child is activated.
       * @param {number} index Index of the activated child
       * @param {number} oldIndex Index of the previously activated child
       * @param {boolean} external Indicates if the activation comes from an external source (like props)
       */
      childActivated (index, oldIndex, external) {
        // Override this in component
      },

      /**
       * Add a child component while preserving its order in the children list.
       * @param {object} vm Vue instance
       */
      $_addCoupledChild (vm) {
        // Guard
        if (this.$slots && this.$slots.default) {
          // We need to wait for the instances creation
          this.$nextTick(() => {
            // We need to get the components in the slot
            const childComponents = this.$slots.default.reduce((list, vnode) => {
              if (vnode.child) {
                list.push(vnode.child.$_proxy)
              }
              return list
            }, [])
            // List has the child component in the right order
            // We can now register the child component in the right place
            const index = childComponents.indexOf(vm)
            // Add child
            if (index !== -1) {
              this.children.splice(index, 0, vm)
            }
            // Hook
            this.$_updateChildren('add', index, vm)
          })
        }
      },

      /**
       * Removes a child component. Automatically activates the next remaining component.
       * @param {object} vm Vue instance
       */
      $_removeCoupledChild (vm) {
        const index = this.children.indexOf(vm)
        // Remove child
        if (index !== -1) {
          this.children.splice(index, 1)
        }
        // Hook
        this.$_updateChildren('remove', index, vm)
      },

      /**
       * Hook called when an operation is processed. It will intelligently activate a child if needed.
       * @param {string} operation Name of the operation. Can be 'add' or 'remove'
       * @param {number} index Index of the related child.
       * @param {object} vm Related child Vue instance
       */
      $_updateChildren (operation, index, vm) {
        if (operation === 'add') {
          // If the child was added before the currently active one,
          // we need to move the selection to the right
          if (index <= this.activeChildIndex) {
            this.activateChild(this.activeChildIndex + 1)
          }
          // Default when there is only one child
          if (this.children.length === 1) {
            this.activateChild(0)
          }
        } else if (operation === 'remove') {
          // If we remove a child before the currently active one,
          // we need to move the selection to the left
          if (index <= this.activeChildIndex) {
            this.activateChild(this.activeChildIndex - 1)
          }
        }
      },
    },
  }
}
