import { createApp } from 'vue'
import rootApp from './App.vue'
import 'normalize.css'
import './assets/css/index.less'
// import { registerApp } from './global'
import router from './router'
import store from './store'
const app = createApp(rootApp)
// app.use(registerApp)
app.use(router).use(store).mount('#app')
