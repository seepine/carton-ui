import { defineClientConfig } from '@vuepress/client'
import TDesign from 'tdesign-vue-next'
import Ui from 'carton-ui/src'

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'
import 'carton-ui/src/index.scss'
import './configs/styles/index.scss'
import { onMounted, onUnmounted } from 'vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(TDesign)
    app.use(Ui)
  },
  setup() {
    onMounted(() => {
      const themeChange = () => {
        let isDark = false
        try {
          isDark = document.documentElement.classList.contains('dark')
        } catch (e) {}
        if (isDark) {
          document.documentElement.setAttribute('theme-mode', 'dark')
        } else {
          document.documentElement.removeAttribute('theme-mode')
        }
      }
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'class') {
            themeChange()
          }
        })
      })
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })
      themeChange()

      onUnmounted(() => {
        observer.disconnect()
      })
    })
  },
})
