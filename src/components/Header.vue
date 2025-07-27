<script setup>
    import { computed, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import MusicalNoteButton from './reusables/MusicalNoteButton.vue';

    const route = useRoute();
    const isNotRoute = computed(() => route.path === '/');
</script>

<template>
    <header class="header d-flex justify-content-between p-2 mx-auto mb-4">
        <router-link to="/" class="text-decoration-none">
            <span class="d-flex flex-column p-1 note-btn" title="Home">
                <MusicalNoteButton height="40" width="40" />
            </span>
        </router-link>
        <template v-if="!isNotRoute">
            <span class="link-container">
                <router-link to="/über-uns">Über uns</router-link>
                <router-link to="/repertoire">Repertoire & Auftritte</router-link>
                <router-link to="/kontakt">Kontakt</router-link>
                <router-link to="/mitglieder-gesucht">Mitglieder gesucht</router-link>
            </span>
        </template>
        <a href="https://www.instagram.com/dacapo.chor/" target="_blank" rel="noopener noreferrer">
            <i class="fs-1 bi bi-instagram" title="Mehr von uns auf Instagram"></i>
        </a>
    </header>
</template>

<style lang="scss" scoped>
    .header { 
        width: 90%;
        display: flex;
        align-items: center;

        span.note-btn {
            &:hover {
                opacity: 0.8;
            }
        }

        .link-container {
            width: 30%;
            display: flex;
            justify-content: space-between;
            a {
                text-decoration: none;
                color: $logo-color;
                &:hover {
                    opacity: 0.8;
                }
            }
        }

        i {
            color: $accent;
            &:hover {
                opacity: 0.8;
            }
        }
    }

</style>