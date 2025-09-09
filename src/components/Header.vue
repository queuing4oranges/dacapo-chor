<template>
    <header class="header p-2 mx-auto mb-4">
        <b-nav class="d-flex justify-content-end align-items-center">
            <div class="d-flex align-items-center">
                <b-nav-item class="note-btn">
                    <a href="/" title="Zurück zum Start">
                    <MusicalNoteButton height="60" width="60" />
                    </a>
                </b-nav-item>
                <b-nav-item
                    v-for="(link, idx) in navLinks"
                    :key="idx"
                    class="mx-3 nav-links"
                >
                    <a :href="'#' + link.linkto" class="nav-link-with-underline">
                        {{ link.title }}
                        <img class="underline" :src="underlineSvg" alt="underline" />
                    </a>
                </b-nav-item>
                <b-nav-item>
                    <a
                        href="https://www.instagram.com/dacapo.chor/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fs-1 bi bi-instagram" title="Mehr von uns auf Instagram"></i>
                    </a>
                </b-nav-item>
            </div>
        </b-nav>
    </header>
</template>

<script setup>
import MusicalNoteButton from './reusables/MusicalNoteButton.vue';
import underlineSvg from '@/assets/underline.svg';

const navLinks = [
    { title: "Über uns", alt: 'Über uns', linkto: 'ueber-uns' },
    { title: "Repertoire", alt: 'Repertoire & Auftritte', linkto: 'repertoire' },
    { title: "Kontakt", alt: 'Kontakt', linkto: 'kontakt'  },
    { title: "Mitglieder gesucht", alt: 'Mitglieder gesucht', linkto: 'mitglieder' },
];

</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        background-color: transparent;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;

    b-nav {
        margin: auto;
        width: 90%;
    }

    .nav-links {
        a {
            position: relative;
            display: inline-block;
            text-decoration: none;
            color: $logo-color;
        }

        .underline {
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 100%;
            height: auto;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }

        a:hover .underline {
            opacity: 1;
        }
    }

    .note-btn:hover {
        opacity: 0.8;
    }

    i {
        color: $accent2;
        transition: opacity 0.3s ease;
        &:hover {
            opacity: 0.8;
        }
    }
}

</style>
