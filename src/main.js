import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'
import router from './router/router';

//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// BootstrapVueNext components
import { BNav, BNavItem } from 'bootstrap-vue-next';

import intersect from '@/directives/intersect';

//createApp(App).use(router).mount('#app');
const app = createApp(App);

app.use(router);
app.directive("intersect", intersect);

// Register individual BootstrapVueNext components
app.component('BNav', BNav);
app.component('BNavItem', BNavItem);

app.mount('#app');
