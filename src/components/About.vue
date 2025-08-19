<template>
    <div class="about-container h-100 d-flex flex-column justify-content-center">
        <HeroTitle />
         <div class="h-100 d-flex justify-content-center align-items-start">
            <div class="w-75 mt-5 d-flex justify-content-center align-items-start">
                <figure class="slide-in-fwd-left">
                    <img :src="vorstand" alt="Vorstand" class="vorstand-img">
                    <figcaption class="mt-1 vorstand-caption">Unser Vorstand: Julia Wnetrzak, Anne Sonntag, Ricardo Friedrich</figcaption>
                </figure>
                <span class="px-5 d-flex flex-column align-items-between h-100" style="width: 700px">
                    <p class="fs-5">
                        <strong>da capo e.V.</strong> ist seit 2024 ein gemeinnütziger Verein mit Sitz in Obercunnersdorf
                        &minus; einer
                        2000-Seelen-Gemeinde im Herzen der Oberlausitz. Aktuell zählt er 18 Mitglieder mit unterschiedlicher
                        Gesangserfahrung.
                        Unsere Auftritte dienen bisher vor allem karitativen Zwecken, beispielsweise in Wohnheimen für
                        Ältere
                        oder Menschen mit Behinderung.
                    </p>
                    <p class="fs-5">"da capo" bedeutet übrigens in der Musik so viel wie "noch einmal" oder "von vorne".</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="mt-5">
                            <p class="mb-1 fs-5">Hier findet ihr unsere Satzung</p>
                            <a href="/docs/Vereinssatzung.pdf" target="_blank" rel="noopener" download class="text-decoration-none">
                                <button class="fs-6 button-52 d-flex align-items-center">
                                    <p class="satzungs-text me-2 mb-0">Satzung</p>
                                    <i class="bi bi-file-pdf"></i>
                                </button>
                            </a>
                        </div>
                        <figure class="slide-in-fwd-right img-container">
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
    import HeroTitle from './HeroTitle.vue';
    import vorstand from "@/assets/vorstand.png";
    import Rico from "@/assets/chorleiter.png";
</script>

<style lang="scss">
.about-container {
    width: 100%;
    min-height: 100vh;
    background-image: url('@/assets/bg2.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    align-items: stretch;

    .vorstand-img {
        width: 600px;
        box-shadow: rgba(59, 72, 65, 0.19) 0px 10px 20px, rgba(59, 72, 65, 0.23) 0px 6px 6px;
    }

    strong {
        color: $logo-color;
    }

    .img-container {
        img {
            width: 200px;
            box-shadow: rgba(59, 72, 65, 0.19) 0px 10px 20px, rgba(59, 72, 65, 0.23) 0px 6px 6px;
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
        background-color: #fc4936;
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

    @media (min-width: 768px) {
        .button-52 {
            padding: 13px 50px 13px;
        }
    }

    // ANIMATIONS
    .slide-in-fwd-left {
        -webkit-animation: slide-in-fwd-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-fwd-left 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slide-in-fwd-left {
        0% {
            -webkit-transform: translateZ(-1400px) translateX(-1000px);
                    transform: translateZ(-1400px) translateX(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateZ(0) translateX(0);
                    transform: translateZ(0) translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-fwd-left {
        0% {
            -webkit-transform: translateZ(-1400px) translateX(-1000px);
                    transform: translateZ(-1400px) translateX(-1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateZ(0) translateX(0);
                    transform: translateZ(0) translateX(0);
            opacity: 1;
        }
    }

    .slide-in-fwd-right {
        -webkit-animation: slide-in-fwd-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-fwd-right 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @-webkit-keyframes slide-in-fwd-right {
        0% {
            -webkit-transform: translateZ(-1400px) translateX(1000px);
                    transform: translateZ(-1400px) translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateZ(0) translateX(0);
                    transform: translateZ(0) translateX(0);
            opacity: 1;
        }
    }
    @keyframes slide-in-fwd-right {
        0% {
            -webkit-transform: translateZ(-1400px) translateX(1000px);
                    transform: translateZ(-1400px) translateX(1000px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateZ(0) translateX(0);
                    transform: translateZ(0) translateX(0);
            opacity: 1;
        }
    }
}
</style>
