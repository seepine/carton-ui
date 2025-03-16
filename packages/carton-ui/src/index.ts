import type { App } from 'vue'
import { CButton } from './c-button'

export * from './c-button'

const components = [CButton]

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
