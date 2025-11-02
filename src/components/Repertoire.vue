<template>
    <div
        class="observe-section repertoire-container"
        id="repertoire"
    >
        <div class="column-wrapper">

            <div class="w-50 w-sm-100 repertoire-content">
                <div class="repertoire-heading">
                    <h1>Repertoire</h1>
                </div>
                <div class="repertoire-column">
                    <p class="fs-5">
                        Unser Repertoire reicht von deutschen Volksliedern über moderne Popkultur bis hin zu Traditionals aus Afrika. Hier eine Auswahl an Liedern, die wir gerade einstudieren
                    </p>
                    <ul class="song-list fs-6">
                        <li v-for="song in songs" class="single-song d-flex">
                            <span class="mini-logo-container me-2">
                                <MiniLogo alt="Logo" class="mini-logo"/>
                            </span>
                            <template v-if="song.url">
                                <a :href="song.url" target="_blank" rel="noopener noreferrer">{{ song.title }}</a>
                            </template>
                            <template v-else>
                                <span>{{ song.title }}</span>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="w-50 w-sm-100 auftritte-content">
                <div class="repertoire-heading">
                    <h1>Vergangene und kommende Auftritte</h1>
                </div>
                <div class="auftritte-column">
                    <ul class="fs-6">
                        <li v-for="auftritt in auftritte" class="single-auftritt d-flex">
                            <span class="mini-logo-container me-2">
                                <MiniLogo alt="Logo" class="mini-logo"/>
                            </span>
                            <span>{{ auftritt.place }}</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import MiniLogo from '@/assets/dacapo-logo.svg';

const songs = [
    { id: 1, title: "Amezaliva" },
    { id: 2, title: "Dos Kelbl" },
    { id: 3, title: "Love yourself (Justin Bieber)" },
    { id: 4, title: "Running up that hill", url: "https://www.youtube.com/embed/vn943x1Y8hc?si=BwxqBl1dfuOSzipP" },
    { id: 5, title: "I want it that way (Backstreet Boys)" },
    { id: 6, title: "Halleluja" },
    { id: 7, title: "Oh holy night" }
]

const auftritte = [
    { place: "AWO Wohnstätten Löbau" },
    { place: "„Mitmachchor“ im Rahmen des „Lebendigen Adventskalender“ bei Löbau lebt e.V." },
    { place: "ASB Pflegeheim Obercunnersdorf" },
    { place: "Hospiz Herrnhut" },
    { place: "Festival „Schwarzer Herbst“, Johanniskirche Löbau" }
]

</script>

<style lang="scss" scoped>
.repertoire-container,
.repertoire-container * {
    box-sizing: border-box;
}

.repertoire-container {
    width: 100%;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-image: url('@/assets/repertoire-bg.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .repertoire-heading {
        color: #046b52;
        margin-bottom: 3rem;
    }

    .column-wrapper {
        width: 75%;
        max-width: 100%;
        display: flex;
        justify-content: start;
        align-items: start;
        margin-top: 7rem;

        .repertoire-content,
        .auftritte-content {
            display: flex;
            flex-direction: column;
            justify-content: start;
            width: 100%;
            max-width: 100%;
            padding: 3rem;
            color: #046b52;
        }

        .repertoire-content .song-list {
            list-style-type: none;

            a {
                color: inherit;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }

    .mini-logo-container {
        min-width: 2rem;
        max-width: 2rem;
        min-height: 2rem;
        max-height: 2rem;
        position: relative;

        & svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    li {
        padding: 0.4rem;
    }
}

/* Styling for mobiles */
@media (max-width: 992px) {
    .repertoire-container {
        .column-wrapper {
            display: flex;
            flex-direction: column;
            margin-top: 0;
            width: 100%;
            max-width: 100%;

            .repertoire-content,
            .auftritte-content {
                width: 100% !important;
                max-width: 100%;
                padding: 2rem;
            }

            .auftritte-content {
                padding-top: 0;
            }

            ul {
                padding: 0;
            }
        }
    }
}
</style>
