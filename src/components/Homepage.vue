<template>
    <div class="homepage-container d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <HeroSquares
            :active-link="activeLink"
            :is-mobile="isMobile"
            @update:active-link="setActiveLink"
        />
    </div>
</template>

<script setup>
import HeroSquares from './HeroSquares.vue';
import HeroTitle from './HeroTitle.vue';

</script>

<style lang="scss" scoped>
.homepage-container {
    min-height: 100vh;
    background-image: url('@/assets/Gruppenbild.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    img {
        max-width: 100%;
    }
}
</style>
