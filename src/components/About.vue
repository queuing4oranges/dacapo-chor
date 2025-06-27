<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div class="h-100 w-75 mt-3 d-flex justify-content-center align-items-start">
            <figure>
                <img :src="vorstand" alt="Vorstand">
                <figcaption>Unser Vorstand: v.l.n.r. Julia Wnetrzak, Anne Sonntag, Ricardo Friedrich</figcaption>
            </figure>
            <span class="px-5 d-flex flex-column align-items-between h-100">
                <p>
                    <strong>da capo e.V.</strong> ist seit 2024 ein gemeinnütziger Verein mit Sitz in Obercunnersdorf
                    &minus; einer
                    2000-Seelen-Gemeinde im Herzen der Oberlausitz. Aktuell zählt er 18 Mitglieder mit unterschiedlicher
                    Gesangserfahrung.
                    Unsere Auftritte dienen bisher vor allem karitativen Zwecken, beispielsweise in Wohnheimen für
                    Ältere
                    oder Menschen mit Behinderung.
                </p>
                <span class="d-flex justify-content-center align-items-end img-container">
                    <figcaption>Unser Chorleiter und Vocal Coach: Rico Jank</figcaption>
                    <img :src="Rico" alt="Chorleiter Rico">

                </span>
            </span>
        </div>
        <div>
            <p>
                Hier findet ihr unsere Satzung
                <BButton>
                    <i class="bi bi-file-earmark-music">
                        <a href="https://www.google.com" target="_blank"></a>
                    </i>
                </BButton>
            </p>
            <p>"da capo" bedeutet übrigens in der Musik so viel wie "noch einmal" oder "von vorne".</p>
        </div>

    </div>
</template>

<script setup>
    import HeroTitle from './HeroTitle.vue';
    import vorstand from "@/assets/vorstand.png";
    import Rico from "@/assets/placeholder.png";
    import { BButton } from 'bootstrap-vue-next';
</script>

<style lang="scss" scoped>
    strong {
        color: $logo-color;
    }

    .img-container {
        img {
            width: 200px;
            border-radius: 50%;
            border: dotted 0.5rem $accent;
        }
    }
</style>
