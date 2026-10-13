import { createApp } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/tokens.css'
import './styles/base.css'
import App from './App.vue'

gsap.registerPlugin(ScrollTrigger)

// Prevent the small upward jump on refresh: browser + ScrollTrigger
// both try to restore scroll and fight each other.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
ScrollTrigger.clearScrollMemory()

createApp(App).mount('#app')
