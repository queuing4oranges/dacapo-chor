<template>
    <div class="homepage-container d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <img :src="HomeImg" alt="Gruppenbild">
    </div>
</template>

<script setup>
import HeroTitle from './HeroTitle.vue';
import HomeImg from '@/assets/DaCapoHomepageBild.png';
</script>

<style lang="scss" scoped>
.homepage-container {
    min-height: 100vh;
    background-image: url('@/assets/home-bg-overlay.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>