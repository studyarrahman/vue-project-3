import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import jQuery from 'jquery'
import Popper from 'popper.js'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$ = jQuery
app.config.globalProperties.Popper = Popper

app.mount('#app')





