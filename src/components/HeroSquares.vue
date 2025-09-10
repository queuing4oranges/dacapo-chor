<template>
    <div class="min-vh-100 home-container d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div class="img-grid">
            <div class="img-container mx-2" v-for="(img, index) in images" :key="index">
                <a
                    :href="'#' + img.linkto"
                    @click="setActiveLink(img.linkto)"
                    class="nav-link-with-underline"
                    :class="{ active: activeLink === img.linkto }"
                >
                    <img
                        :src="img.src"
                        :alt="img.alt"
                        class="link-img nav-link-with-underline"
                    />
                </a>
                <div class="w-100 mb-0 img-label">{{ img.alt }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeroTitle from './HeroTitle.vue';
import link1 from "@/assets/piano.png";
import link2 from "@/assets/noten.png";
import link3 from "@/assets/tuer.png";
import link4 from "@/assets/haus.png";

const props = defineProps({
    activeLink: String
});
const emit = defineEmits(["update:active-link"]);

const images = [
    { src: link1, alt: 'Über uns', linkto: 'ueber-uns' },
    { src: link2, alt: 'Repertoire & Auftritte', linkto: 'repertoire' },
    { src: link3, alt: 'Kontakt', linkto: 'kontakt'  },
    { src: link4, alt: 'Mitglieder gesucht', linkto: 'mitglieder' },
];

const setActiveLink = (link) => {
    emit("update:active-link", link);
};

</script>

<style lang="scss" scoped>
.home-container {
    background-image: url('@/assets/home-bg-overlay.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .img-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        width: 100%;
        max-width: 1400px;
        margin: 2rem auto;
        padding: 1rem;
    }

    .img-container {
        position: relative;
        overflow: hidden;
        text-align: center;

        &:hover .link-img {
        filter: grayscale(0);
            transform: scale(1.1);
            z-index: 2;
        }

        &:hover .img-label {
            color: $accent;
        }

        .link-img {
            display: block;
            filter: grayscale(100%);
            transition: all 0.3s ease;
            transform: scale(1);
            z-index: 1;
            width: 100%;
            height: auto;
            cursor: pointer;
        }

        .img-label {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            background: rgba(36, 36, 36, 0.8);
            padding: 0.8rem 0.8rem;
            font-weight: bold;
            font-size: 1.4rem;
            pointer-events: none;
            white-space: nowrap;
        }
    }
}

// Styling for mobiles
@media (max-width: 768px) {
    .home-container {
        .img-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
        }

        .img-label {
            font-size: 0.75rem !important;
            text-wrap: wrap;
            height: 70px;
        }

        .link-img {
            filter: grayscale(0%) !important;
        }
    }
}

@media (max-width: 992px) {
    .home-container {
        .img-label {
            font-size: 1rem !important;
            text-wrap: wrap !important;
            transform: translate(-50%) !important;
            height: 70px;
        }

        .link-img {
            filter: grayscale(0%) !important;
        }
    }
}

@media (max-width: 1200px) {
    .home-container {
        .img-label {
            font-size: 1rem !important;
            text-wrap: wrap !important;
        }

        .link-img {
            filter: grayscale(0%) !important;
        }
    }
}


</style>
