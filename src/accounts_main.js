import { createApp } from 'vue'
import './style.css'
import App from './AccountsApp.vue'
import router from './router';

createApp(App).use(router).mount('#accounts-app')
