<script setup>
    import logo from "@/assets/dacapo-logo.svg";
    import group from "@/assets/group-pic.png";
</script>

<template>
    <div class="h-100 d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex align-items-center mb-5">
            <span class="mx-3">
                <img :src="logo" alt="Logo">
            </span>
            <span class="m-3">
                <h1 class="hero-title mb-0">da capo</h1>
                <p class="fs-1 mb-0">Chorgemeinschaft aus der Oberlausitz</p>
            </span>
        </div>
        <div>
            <img :src="group" alt="Gruppenbild" class="group-img">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .hero-title {
        font-size: 7rem;
        color: $logo-color;
        line-height: 0.7;
    }
    .group-img {
        width: 45rem;
        height: auto;
    }
</style>
