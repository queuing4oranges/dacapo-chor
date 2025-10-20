<template>
    <div
        class="observe-section about-container d-flex flex-column justify-content-center"
        id="ueber-uns">
        <div class="page-title">
            <h1>Über uns</h1>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <div class="about-container-content w-75">
                <figure v-intersect data-animation="slide-in-fwd-left">
                    <img :src="vorstand" alt="Vorstand" class="vorstand-img">
                    <figcaption class="mt-1 vorstand-caption">Unser Vorstand: Julia Wnetrzak, Anne Sonntag, Ricardo Friedrich</figcaption>
                </figure>
                <span class="about-text-container px-2 px-md-3 px-lg-5 d-flex flex-column align-items-between h-100">
                    <p class="about-font-size">
                        <strong>da capo e.V.</strong> ist seit 2024 ein gemeinnütziger Verein mit Sitz in Obercunnersdorf
                        &minus; einer
                        2000-Seelen-Gemeinde im Herzen der Oberlausitz. Aktuell zählt er 18 Mitglieder mit unterschiedlicher
                        Gesangserfahrung.
                        Unsere Auftritte dienen bisher vor allem karitativen Zwecken, beispielsweise in Wohnheimen für
                        Ältere
                        oder Menschen mit Behinderung.
                    </p>
                    <p class="about-font-size">"da capo" bedeutet übrigens in der Musik so viel wie "noch einmal" oder "von vorne".</p>
                    <div class="about-chorleiter">
                        <div class="satzung">
                            <p class="mb-1 about-font-size">Hier findet ihr unsere Satzung</p>
                            <a href="/Vereinssatzung.pdf" target="_blank" rel="noopener" download class="text-decoration-none">
                                <button v-if="!isMobile" class="button-52 d-flex align-items-center" aria-label="Download Satzung">
                                    <p class="satzungs-text me-2 mb-0">Satzung</p>
                                    <i class="bi bi-file-pdf"></i>
                                </button>
                                <b-button v-else variant="outline-primary" aria-label="Download Satzung">
                                    <i class="bi bi-file-pdf" aria-hidden="true"></i>
                                </b-button>
                            </a>
                        </div>
                        <figure v-intersect data-animation="slide-in-fwd-right" class="img-container">
                            <img :src="Rico" alt="Chorleiter Rico">
                            <figcaption class="mt-1 d-flex flex-column">
                                <span>Unser Chorleiter und </span>
                                <span>Vocal Coach: Rico Jank</span>
                            </figcaption>
                        </figure>
                    </div>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import vorstand from "@/assets/vorstand.png";
import Rico from "@/assets/chorleiter.png";

const props = defineProps({
    activeLink: String,
    isMobile: Boolean
});

</script>

<style lang="scss" scoped>
.about-container,
.about-container * {
    box-sizing: border-box;
}

.about-container {
    width: 100%;
    min-height: 100vh;
    max-width: 100vw;
    background-image: url('@/assets/pattern-bg-about.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-x: hidden;

    .about-container-content {
        display: flex;
        justify-content: center;
        align-items: start;
        width: 100%;
        max-width: 100%;
    }

    .page-title {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }

    .page-title h1 {
        background-color: #fff;
    }

    .vorstand-caption {
        background-color: #fff;
    }

    .about-text-container {
        width: 43.75rem;
        background-color: #fff;
        padding: 1rem;
        max-width: 100%;
    }

    .about-font-size {
        font-size: 1.25rem;
    }

    .about-chorleiter {
        display: flex;
        justify-content: space-between;
        align-items:center;
    }

    .satzung {
        margin-top: 3rem;
    }

    .vorstand-img {
        width: 37.5rem;
        box-shadow:
            rgba(59, 72, 65, 0.19) 0px 10px 20px,
            rgba(59, 72, 65, 0.23) 0px 6px 6px;
        max-width: 100%;
    }

    strong {
        color: $logo-color;
    }

    .img-container {
        img {
            width: 200px;
            box-shadow:
                rgba(59, 72, 65, 0.19) 0px 10px 20px,
                rgba(59, 72, 65, 0.23) 0px 6px 6px;
            max-width: 100%;
        }
    }

    .button-52 {
        font-size: 16px;
        font-weight: 200;
        letter-spacing: 1px;
        padding: 13px 20px 13px;
        outline: 0;
        border: 1px solid black;
        cursor: pointer;
        position: relative;
        background-color: transparent;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        z-index: 0;
        overflow: visible;
        color: black;

        &:hover,
        &:hover .satzungs-text {
            color: #4fc9d2;
        }

        .satzungs-text {
            color: black;
            font-weight: bolder;
        }
    }

    .button-52::after {
        content: "";
        background-color: #b37800;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: 0.2s;
    }

    .button-52:hover::after {
        top: 0px;
        left: 0px;
        background-color: #046b52;
    }
}

// Styling for mobiles
@media (max-width: 992px) {
    .about-container {
        min-height: 100vh;

        .about-container-content {
            display: flex;
            flex-direction: column;
        }

        .about-text-container {
            width: 100%;
            box-sizing: border-box;
        }

        .about-font-size {
            font-size: 1rem;
        }

        .vorstand-img {
            width: 100%;
        }

        .about-chorleiter {
            align-items: start;
            .satzung {
                display: flex;
                flex-direction: column;
                margin-top: 1.5rem;
            }
        }

        .img-container img {
            width: 100px;
        }

        .button-52 {
            font-size: 12px;
            padding: 6.5px 10px 6.5px;
        }

        .btn.btn-outline-primary {
            color: #d1f3e2;
            background-color: #b37800;
            border: none;
            border-radius: 0;
        }

        figcaption {
            font-size: 0.75rem;
        }
    }
}
</style>
