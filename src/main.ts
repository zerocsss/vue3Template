import { createApp } from 'vue'
import { ElButton, ElIcon, ElDialog } from 'element-plus'
import router from "./router"
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(router)
app.use(ElButton)
app.use(ElIcon)
app.use(ElDialog)
app.mount('#app')
