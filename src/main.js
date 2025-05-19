import { createApp } from 'vue'
import './assets/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue'
import router from './router/router';

createApp(App).use(router).mount('#app');
