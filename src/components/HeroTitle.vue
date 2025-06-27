<script setup>
    import logo from "@/assets/dacapo-logo.svg";
</script>

<template>
    <div class="d-flex align-items-center mb-2">
        <span class="mx-3">
            <img :src="logo" alt="Logo" class="logo-img">
        </span>
        <span class="m-3">
            <h1 class="hero-title mb-0">da capo</h1>
            <p class="fs-2 mb-0">Chorgemeinschaft aus der Oberlausitz</p>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    .hero-title {
        font-size: 6rem;
        color: $logo-color;
        line-height: 0.8;
    }

    .logo-img {
        height: 7rem;
    }
</style>
