import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import router from './router/router';
// Bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// Bootstrap for Vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import * as BootstrapVueNext from 'bootstrap-vue-next';

//createApp(App).use(router).mount('#app');
const app = createApp(App)

app.use(router)
app.use(BootstrapVueNext.BootstrapVueNext)

app.mount('#app')