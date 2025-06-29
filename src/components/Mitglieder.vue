<template>
    <div class="mitglieder-container d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <GalleryCarousel />
        <section class="d-flex justify-content-center">
            <div class="h-100 w-75 mt-3 d-flex justify-content-center align-items-start">
                <div class="w-50 me-2">
                    <p>
                        <strong>da capo</strong> ist noch immer auf der <strong>Suche nach neuen Mitgliedern</strong>,
                        vor allem nach den Stimmlagen Bass und
                        Tenor. Wichtiger als weitreichende Vorerfahrung ist uns das zwischenmenschliche Auskommen. Wir
                        verstehen uns als weltoffener Chor und sind lgbtq-freundlich.
                    </p>
                </div>
                <div class="w-50 ms-2">
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
    </div>
</template>

<script setup>
import GalleryCarousel from "./reusables/GalleryCarousel.vue"
import HeroTitle from "./HeroTitle.vue"

</script>

<style scoped lang="scss">
.mitglieder-container {
    p strong:first-child {
        color: $logo-color;
    }

    .mitglied-werden strong {
        color: $accent;
    }
}
</style>

