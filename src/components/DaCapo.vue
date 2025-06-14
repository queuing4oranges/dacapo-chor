<script setup>
    import HeroTitle from './HeroTitle.vue';
    import link1 from "@/assets/link1.png";
    import link2 from "@/assets/link2.png";
    import link3 from "@/assets/link3.png";
    import link4 from "@/assets/link4.png";

    const images = [
        { src: link1, alt: 'Über uns', linkto: '/über-uns' },
        { src: link2, alt: 'Repertoire & Auftritte', linkto: '/repertoire' },
        { src: link3, alt: 'Kontakt', linkto: '/kontakt'  },
        { src: link4, alt: 'Mitglieder gesucht', linkto: '/mitglieder-gesucht' },
    ];
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div class="h-100 mt-5 d-flex justify-content-center align-items-center">
            <div class="img-container mx-2" v-for="(img, index) in images" :key="index">
                <router-link :to="img.linkto" >
                    <img
                        :src="img.src"
                        :alt="img.alt"
                        class="link-img"
                        @click="console.log('hello world')"
                    />
                </router-link>
                <div class="w-100 mb-0 img-label">{{ img.alt }}</div>
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
</style>
