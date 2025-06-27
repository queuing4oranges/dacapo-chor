<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <HeroTitle />
        <div class="h-100 w-75 mt-3 d-flex justify-content-center align-items-center">
            <figure>
                <img :src="vorstand" alt="Vorstand">
                <figcaption>Unser Vorstand: v.l.n.r. Julia Wnetrzak, Anne Sonntag, Ricardo Friedrich</figcaption>
            </figure>
            <span class="px-5 d-flex flex-column align-items-start">
                <p>
                    <strong>da capo e.V.</strong> ist seit 2024 ein gemeinnütziger Verein mit Sitz in Obercunnersdorf
                    &minus; einer
                    2000-Seelen-Gemeinde im Herzen der Oberlausitz. Aktuell zählt er 18 Mitglieder mit unterschiedlicher
                    Gesangserfahrung.
                    Unsere Auftritte dienen bisher vor allem karitativen Zwecken, beispielsweise in Wohnheimen für
                    Ältere
                    oder Menschen mit Behinderung.
                </p>
                <br>
                <p>
                    <strong><a href="https://www.google.com" target="_blank">Hier</a></strong> findet ihr unsere Satzung.
                </p>
                <br>
                <p>"da capo" bedeutet übrigens in der Musik so viel wie "noch einmal" oder "von vorne".</p>
            </span>
        </div>
        <div>
            <p>Unser Chorleiter und Vocal Coach: Rico Jank</p>

        </div>




        <!-- Unser Chorleiter und Vocal Coach: Rico Jank (Foto Rico)
        Unser Vorstand: v.l.n.r. Julia Wnetrzak, Anne Sonntag, Ricardo Friedrich (Foto Vorstand)

        Hier findet ihr unsere Satzung (interner Link bei ""Hier""). ""da capo"" bedeutet übrigens in der Musik so
        viel
        wie ""noch einmal"" oder ""von vorne"".
        " -->
    </div>
</template>

<script setup>
    import HeroTitle from './HeroTitle.vue';
    import vorstand from "@/assets/vorstand.png";
</script>

<style lang="scss" scoped>
    strong {
        color: $logo-color;
    }
</style>