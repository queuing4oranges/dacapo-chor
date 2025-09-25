import { createRouter, createWebHistory } from 'vue-router';

import Kontakt from '@/components/Kontakt.vue';
import About from '@/components/About.vue';
import Gallery from '@/components/Gallery.vue';
import Repertoire from '@/components/Repertoire.vue';
import Homepage from '@/components/Homepage.vue';

const routes = [
    { path: '/', name: 'DaCapo', component: Homepage },
    { path: '/ueber-uns', name: 'About', component: About },
    { path: '/kontakt', name: 'Kontakt', component: Kontakt },
    { path: '/galerie', name: 'Galerie', component: Gallery },
    { path: '/repertoire', name: 'Repertoire', component: Repertoire },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;