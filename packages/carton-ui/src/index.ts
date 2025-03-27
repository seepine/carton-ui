import type { App } from 'vue'
import { CButton } from './c-button'
import { CCheckbox } from './c-checkbox'

export * from './c-button'
export * from './c-checkbox'

const components = [CButton, CCheckbox]
export const ComponentNames = components.map(item => item.name)

export function install(app: App) {
  components.forEach(item => {
    if (item.install!) {
      app.use(item)
    } else if (item.name) {
      app.component(item.name, item)
    }
  })
}

export default {
  install,
}
