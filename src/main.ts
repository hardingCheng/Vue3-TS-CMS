import { createApp } from 'vue'
import rootApp from './App.vue'
import { registerApp } from './global'
import router from './router'
import store from './store'
const app = createApp(rootApp)

app.use(registerApp).use(router).use(store).mount('#app')
