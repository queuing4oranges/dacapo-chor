import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/Hero.vue';
import DaCapo from '@/components/DaCapo.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/dacapo', name: 'DaCapo', component: DaCapo },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;