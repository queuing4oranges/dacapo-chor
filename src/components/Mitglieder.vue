<template>
    <div
    class="observe-section mitglieder-container"
    id="mitglieder">
        <div class="page-title">
            <h1>Mitglieder gesucht</h1>
        </div>
        <div class="h-100 mitglieder-content d-flex flex-column justify-content-center">
            <div class="h-100 col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
                <div>
                    <p class="mitglieder-text">
                        <strong>da capo</strong> ist noch immer auf der <strong>Suche nach neuen Mitgliedern</strong>,
                        vor allem nach den Stimmlagen Bass und
                        Tenor. Wichtiger als weitreichende Vorerfahrung ist uns das zwischenmenschliche Auskommen. Wir
                        verstehen uns als weltoffener Chor und sind lgbtq-freundlich.
                    </p>
                </div>
            </div>
            <div class="carousel-section p-2">
                <p class="mitglied-werden">
                    Wenn du Interesse an einer unverbindlichen Schnupperstunde hast, melde dich bei uns!
                    <br>
                    <span class="proben-aufruf">
                        <i class="bi bi-music-note me-2"></i>
                        <strong class="fs-5">Wir proben immer mittwochs von 19.00 bis 21.15 Uhr.</strong>
                        <i class="bi bi-music-note-beamed ms-2"></i>
                    </span>
                </p>
                <GalleryCarousel />
            </div>
        </div>
    </div>
</template>

<script setup>
import GalleryCarousel from "./reusables/GalleryCarousel.vue"

</script>

<style scoped lang="scss">
.mitglieder-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;

    .mitglieder-content {
        min-height: 500px;
        width: 75%;
    }

    .carousel-section {
        align-self: end;
        width: 75%;
    }

    p strong:first-child {
        color: $logo-color;
    }

    .mitglieder-text {
        font-size: 1.2rem;
    }

    .mitglied-werden strong {
        color: $accent2;
    }
}

.mitglieder-container::before {
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
}

@media (max-width: 992px) {
    .mitglieder-container {
        display: flex;
        justify-content: flex-start;

        .mitglieder-content {
            width: 100%;
        }

        .carousel-section {
            align-self: end;
            width: 100%;
        }

        .mitglieder-text,
        .mitglied-werden {
            font-size: 1rem;
            padding: 0 2rem 1rem 2rem;
            margin: 0;
        }

        .proben-aufruf {
            display: block;
            margin-top: 3rem;
        }
    }
}
</style>

