import { createApp } from 'vue'
import './style.css'
import App from './AppAccounts.vue'
import router from './utils/router'

createApp(App).use(router).mount('#accounts-app')
