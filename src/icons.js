const icons = require.context('../node_modules/material-design-icons/sprites/svg-sprite', true, /svg-sprite-(\w+)-symbol\.svg$/)

export default {
  install (Vue) {
    const iconsWrapper = document.createElement('div')
    iconsWrapper.style.display = 'none'
    // Load all the SVG symbols
    icons.keys().forEach(key => {
      const result = icons(key)
      iconsWrapper.innerHTML += result
    })
    document.body.insertBefore(iconsWrapper, document.body.firstChild)
  },
}

export function generateHtmlIcon (icon) {
  return `<div class="vue-ui-icon"><svg><use xlink:href="#ic_${icon}_24px"></use></svg></div>`
}
