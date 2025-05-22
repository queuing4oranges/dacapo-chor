<script setup>
    import HeroTitle from './HeroTitle.vue';
    import link1 from "@/assets/link1.png";
    import link2 from "@/assets/link2.png";
    import link3 from "@/assets/link3.png";
    import link4 from "@/assets/link4.png";

    const images = [
        { src: link1, alt: 'Über uns' },
        { src: link2, alt: 'Repertoire & Auftritte' },
        { src: link3, alt: 'Kontakt' },
        { src: link4, alt: 'Mitglieder gesucht' },
    ];
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div class="h-100 mt-5 d-flex justify-content-center align-items-center">
            <div class="img-container mx-2" v-for="(img, index) in images" :key="index">
                <img :src="img.src" :alt="img.alt" class="link-img" />
                <div class="w-100 img-label">{{ img.alt }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .img-container {
        position: relative;
        display: inline-block;
        overflow: hidden;
        text-align: center;

        .link-img {
            display: block;
            filter: grayscale(100%);
            transition: all 0.3s ease;
            transform: scale(1);
            z-index: 1;
            width: 100%;
            height: auto;

            &:hover {
                filter: grayscale(0);
                transform: scale(1.1);
                z-index: 2;
            }
        }

        .img-label {
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            background: rgba(75, 74, 74, 0.6);
            padding: 0.8rem 1.2rem;
            font-weight: bold;
            font-size: 1.8rem;
            pointer-events: none;
            white-space: nowrap;
        }
    }
</style>
