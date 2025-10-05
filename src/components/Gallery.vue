<template>
    <div
        class="observe-section gallery-container"
        id="galerie"
    >
        <div class="page-title">
            <h1>Galerie</h1>
        </div>
        <div class="carousel-container col-12 col-lg-6">
            <GalleryCarousel />
        </div>
    </div>
</template>

<script setup>
import GalleryCarousel from "./reusables/GalleryCarousel.vue"

</script>

<style scoped lang="scss">
.gallery-container,
.gallery-container * {
    box-sizing: border-box;
}

.gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
    max-width: 100vw;
    overflow-x: hidden;
}

.gallery-container::before {
    content: "";
    position: absolute;
    background-image: url("@/assets/mitglieder-bg-overlay.svg");
    inset: 0;
    background-size: cover;
    background-position-y: top;
    opacity: 0.3;
    z-index: -1;
    pointer-events: none;
    min-height: 100vh;
    width: 100%;
    height: 100%;
}

@media (max-width: 992px) {
    .gallery-container {
        display: flex;
        justify-content: flex-start;
        min-height: auto;
        height: auto;

        &::before {
            min-height: 0; /* reset pseudo-element */
            height: 100%;
        }

        .carousel-container {
            padding: 3rem;
            max-width: 100%;
            overflow: hidden;
        }
    }
}
</style>

