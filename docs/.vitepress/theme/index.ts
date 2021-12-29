import DefaultTheme from 'vitepress/dist/client/theme-default'
import './style.css'
import Toc from './components/Toc.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('toc', Toc)
  }
}