<template>
    <div class="homepage-container d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <HeroSquares />
    </div>
</template>

<script setup>
import HeroSquares from './HeroSquares.vue';
import HeroTitle from './HeroTitle.vue';

</script>

<style lang="scss" scoped>
.homepage-container {
    min-height: 100vh;
    background-image: url('@/assets/Gruppenbild.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    img {
        max-width: 100%;
    }
}
</style>
