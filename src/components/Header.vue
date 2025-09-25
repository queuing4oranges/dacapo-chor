<template>
    <header class="header p-2 mx-auto mb-4 d-flex justify-content-end">
        <!-- Desktop nav -->
        <b-nav v-if="!isMobile" class="milk-glass d-flex align-items-center">
            <b-nav-item class="note-btn">
                <a href="/" title="Zurück zum Start">
                    <i class='fs-1 bi bi-music-note-list'></i>
                </a>
            </b-nav-item>
            <b-nav-item
                v-for="(link, idx) in navLinks"
                :key="idx"
                class="mx-3 nav-links"
            >
                <a
                    :href="'#' + link.linkto"
                    class="nav-link-with-underline"
                    :class="{ active: activeLink === link.linkto }"
                    @click="handleLinkClick(link.linkto)"
                >
                    {{ link.title }}
                    <UnderlineSvg class="underline" alt="underline" />
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
        </b-nav>
    </header>

    <!-- Mobile toggle -->
    <span
        v-show="isMobile"
        class="header-toggle fs-1"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
    >
        <i :class="isOpen ? 'bi bi-x-lg' : 'bi bi-music-note-list'"></i>
    </span>

    <!-- Mobile overlay -->
    <transition name="fade">
        <div
            v-if="isMobile && isOpen"
            class="mobile-overlay"
            @click="isOpen = false"
        ></div>
    </transition>

    <!-- Mobile menu with slide in transition -->
    <transition name="slide">
        <b-nav v-if="isMobile && isOpen" vertical class="mobile-header">
            <b-nav-item>
                <a href="/">
                    <i class="fs-2 bi bi-house"></i>
                </a>
            </b-nav-item>
            <b-nav-item
                v-for="(link, idx) in navLinks"
                :key="idx"
                class="mx-3 mobile-nav-links"
                @click="handleLinkClick(link.linkto)"
            >
                <a :href="'#' + link.linkto">{{ link.title }}</a>
            </b-nav-item>
            <b-nav-item>
                <a
                    href="https://www.instagram.com/dacapo.chor/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fs-2 bi bi-instagram"></i>
                </a>
            </b-nav-item>
        </b-nav>
    </transition>
</template>

<script setup>
import UnderlineSvg from '@/assets/underline.svg';
import { ref } from "vue";

const props = defineProps({
    activeLink: String,
    isMobile: Boolean
});

const emit = defineEmits(["update:active-link"]);

const isOpen = ref(false);

const navLinks = [
    { title: "Über uns", alt: 'Über uns', linkto: 'ueber-uns' },
    { title: "Repertoire", alt: 'Repertoire & Auftritte', linkto: 'repertoire' },
    { title: "Kontakt", alt: 'Kontakt', linkto: 'kontakt'  },
    { title: "Galerie", alt: 'Galerie', linkto: 'galerie' },
];

const setActiveLink = (link) => emit('update:active-link', link);

const handleLinkClick = (link) => {
    setActiveLink(link);
    isOpen.value = false;
};

</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
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

        a:hover .underline,
        a.active .underline {
            opacity: 1 !important;
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

.header-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    z-index: 500;
    cursor: pointer;
    opacity: 1;
    color: #b37800;
}

.mobile-header {
    position: fixed;
    width: 70%;
    top: 60px;
    right: 15px;
    border-radius: 3%;
    background-color: #d1f3e2;
    padding: 1rem;
    z-index: 400;
    display: flex;
    flex-direction: column;

    .mobile-nav-links {
        a {
            text-decoration: none;
            color: #046b52;
            padding-left: 0;
        }
    }

    .bi-house {
        color: #046b52;
    }

    .bi-instagram{
        color: #b37800;
    }

    i {
        opacity: 1;
    }
}

/* Overlay for mobile menu */
.mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 300;
}

/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

/* Mobile menu slide in/out stronger */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
    opacity: 0;
    transform: translateY(-60px) scale(0.95);
}
.slide-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.slide-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}
.slide-leave-to {
    opacity: 0;
    transform: translateY(-60px) scale(0.95);
}

@media (min-width: 993px) {
    .header-toggle {
        display: none;
    }
}
</style>
