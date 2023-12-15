import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { svgSpritePlugin } from 'vue-svg-sprite'
import vueClickOutsideElement from 'vue-click-outside-element'

createApp(App).use(router).use(store).use(svgSpritePlugin).use(vueClickOutsideElement).mount('#app')