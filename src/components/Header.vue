<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import MusicalNoteButton from './reusables/MusicalNoteButton.vue';

    const route = useRoute();
    const isNotRoute = computed(() => route.path === '/');
</script>

<template>
    <header class="header d-flex justify-content-between p-2 mx-auto mb-4">
        <router-link to="/" class="text-decoration-none">
            <span class="d-flex flex-column p-1 note-btn" title="Zurück zum Anfang">
                <MusicalNoteButton height="60" width="60" />
            </span>
        </router-link>
        <template v-if="!isNotRoute">
            <span class="d-flex align-items-center">
                <span class="link-container">
                    <router-link to="/ueber-uns">Über uns</router-link>
                    <router-link to="/repertoire">Repertoire & Auftritte</router-link>
                    <router-link to="/kontakt">Kontakt</router-link>
                    <router-link to="/mitglieder-gesucht">Mitglieder gesucht</router-link>
                </span>
                <a href="https://www.instagram.com/dacapo.chor/" target="_blank" rel="noopener noreferrer">
                    <i class="fs-1 bi bi-instagram" title="Mehr von uns auf Instagram"></i>
                </a>
            </span>
        </template>
    </header>
</template>

<style lang="scss" scoped>
    .header { 
        width: 90%;
        display: flex;
        align-items: center;
        justify-self: anchor-center;
        background-color: transparent;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;

        span.note-btn {
            &:hover {
                opacity: 0.8;
            }
        }

        .link-container {
            display: flex;
            justify-content: space-between;
            a {
                margin: 0 2rem;
                text-decoration: none;
                color: $logo-color;
                &:hover {
                    opacity: 0.8;
                }
            }
        }

        i {
            color: $accent2;
            &:hover {
                opacity: 0.8;
            }
        }
    }
</style>
