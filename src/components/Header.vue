<script setup>
    import MusicalNoteButton from './reusables/MusicalNoteButton.vue';
</script>

<template>
    <header class="header d-flex justify-content-between p-2 mx-auto">
        <router-link to="/" class="text-decoration-none">
            <span class="d-flex flex-column p-1 note-btn" title="Home">
                <MusicalNoteButton height="40" width="40" />
                Home
            </span>
        </router-link>
            <a href="https://www.instagram.com/dacapo.chor/" target="_blank" rel="noopener noreferrer">
                <i class="fs-1 bi bi-instagram" title="Mehr von uns auf Instagram"></i>
            </a>
    </header>
</template>

<style lang="scss" scoped>
    .header { 
        width: 90%;

        span.note-btn {
            &:hover {
                opacity: 0.8;
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