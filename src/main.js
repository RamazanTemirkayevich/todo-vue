import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import { svgSpritePlugin } from 'vue-svg-sprite'
import vOutsideEvents from 'vue-outside-events'

const pinia = createPinia()

createApp(App).use(router).use(store).use(svgSpritePlugin).use(pinia).use(vOutsideEvents).mount('#app')