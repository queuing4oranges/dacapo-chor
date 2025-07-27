import { createRouter, createWebHistory } from 'vue-router';

import HeroSquares from '@/components/HeroSquares.vue';
import Kontakt from '@/components/Kontakt.vue';
import About from '@/components/About.vue';
import Mitglieder from '@/components/Mitglieder.vue';
import Repertoire from '@/components/Repertoire.vue';

const routes = [
    { path: '/', name: 'DaCapo', component: HeroSquares },
    { path: '/über-uns', name: 'About', component: About },
    { path: '/kontakt', name: 'Kontakt', component: Kontakt },
    { path: '/mitglieder-gesucht', name: 'Mitglieder', component: Mitglieder },
    { path: '/repertoire', name: 'Repertoire', component: Repertoire },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;