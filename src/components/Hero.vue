<script setup>
    import group from "@/assets/group-pic.png";
    import HeroTitle from "./HeroTitle.vue";
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div>
            <router-link to="/dacapo">
                <img :src="group" alt="Gruppenbild" class="group-img">
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .group-img {
        width: 45rem;
        height: auto;
        &:hover {
            opacity: 0.7;
        }
    }
</style>
