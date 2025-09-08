<template>
    <div class="min-vh-100 home-container d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div class="h-100 d-flex align-items-start">
            <div class="img-container mx-2" v-for="(img, index) in images" :key="index">
                <img
                    :src="img.src"
                    :alt="img.alt"
                    class="link-img"
                    @click="scrollTo(img.linkto)"
                />
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

const images = [
    { src: link1, alt: 'Über uns', linkto: 'ueber-uns' },
    { src: link2, alt: 'Repertoire & Auftritte', linkto: 'repertoire' },
    { src: link3, alt: 'Kontakt', linkto: 'kontakt'  },
    { src: link4, alt: 'Mitglieder gesucht', linkto: 'mitglieder-gesucht' },
];

// Scroll element into view
const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth'});
    }
};
</script>

<style lang="scss" scoped>
.home-container {
    background-image: url('@/assets/home-bg-overlay.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .img-container {
        position: relative;
        display: inline-block;
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
            color: white;
            background: rgba(36, 36, 36, 0.8);
            padding: 0.8rem 1.2rem;
            font-weight: bold;
            font-size: 1.8rem;
            pointer-events: none;
            white-space: nowrap;
        }
    }
}

.home-container::before {
/*     content: "";
    position: absolute;
    inset: 0;
    background-image: url("@/assets/bg2.svg");
    background-size: cover;
    background-position-y: center;
    opacity: 0.4;
    z-index: -1;
    pointer-events: none; */
}
</style>
