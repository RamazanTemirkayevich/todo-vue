import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import { svgSpritePlugin } from 'vue-svg-sprite'

const pinia = createPinia()

createApp(App).use(router).use(store).use(svgSpritePlugin).use(pinia).mount('#app')