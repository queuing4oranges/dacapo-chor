import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/components/Hero.vue';
import HeroSquares from '@/components/HeroSquares.vue';
import Kontakt from '@/components/Kontakt.vue';
import About from '@/components/About.vue';
import Mitglieder from '@/components/Mitglieder.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/dacapo', name: 'DaCapo', component: HeroSquares },
    { path: '/über-uns', name: 'About', component: About },
    { path: '/kontakt', name: 'Kontakt', component: Kontakt },
    { path: '/mitglieder-gesucht', name: 'Mitglieder', component: Mitglieder },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;