<template>
    <div class="mitglieder-container d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div class="mitglieder-content d-flex justify-content-between w-75">
            <section class="w-25 d-flex justify-content-center">
                <div class="h-100 mt-3 d-flex flex-column justify-content-center align-items-start">
                    <div class="">
                        <p>
                            <strong>da capo</strong> ist noch immer auf der <strong>Suche nach neuen Mitgliedern</strong>,
                            vor allem nach den Stimmlagen Bass und
                            Tenor. Wichtiger als weitreichende Vorerfahrung ist uns das zwischenmenschliche Auskommen. Wir
                            verstehen uns als weltoffener Chor und sind lgbtq-freundlich.
                        </p>
                    </div>
                    <div class="">
                        <p class="mitglied-werden">
                            Wenn du Interesse an einer unverbindlichen Schnupperstunde hast, melde dich bei uns!
                            <br>
                            <i class="bi bi-music-note me-2"></i>
                            <strong class="fs-5">Wir proben immer mittwochs von 19.00 bis 21.15 Uhr.</strong>
                            <i class="bi bi-music-note-beamed ms-2"></i>
                        </p>
                    </div>
                </div>
            </section>
            <section class="w-75 carousel-section">
                <GalleryCarousel />
            </section>
        </div>
    </div>
</template>

<script setup>
import GalleryCarousel from "./reusables/GalleryCarousel.vue"
import HeroTitle from "./HeroTitle.vue"

</script>

<style scoped lang="scss">
.mitglieder-container {
    position: relative;
    
    .mitglieder-content {
        min-height: 500px;
    }

    .carousel-section {
        align-self: end;
    }

    p strong:first-child {
        color: $logo-color;
    }

    .mitglied-werden strong {
        color: $accent2;
    }
}

.mitglieder-container::before {
    content: "";
    position: absolute;
    background-image: url("@/assets/chor-bw.png");
    inset: 0;
    background-size: cover;
    background-position-y: top;
    opacity: 0.3;
    z-index: -1;
    pointer-events: none;
    min-height: 100vh;
}
</style>

