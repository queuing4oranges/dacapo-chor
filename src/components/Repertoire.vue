<template>
    <div
        class="observe-section repertoire-container"
        id="repertoire">
        <div class="page-title">
            <h1>Repertoire</h1>
        </div>
        <div class="h-100 d-flex justify-content-center align-items-center">
            <div class="h-100 w-75 w-sm-100 repertoire-content-wrapper">
                <div class="repertoire-column">
                    <p class="fs-5">
                        Unser Repertoire reicht von deutschen Volksliedern über moderne Popkultur bis hin zu Traditionals aus Afrika. Hier eine Auswahl an Liedern, die wir gerade einstudieren
                    </p>
                    <ul class="song-list fs-6">
                        <li v-for="song in songs" class="single-song d-flex">
                            <i class="bi bi-music-note ms-2"></i>
                            <span>{{ song.title }}</span>
                        </li>
                    </ul>
                </div>
                <div class="video-column">
                    <div class="video-wrapper">
                        <iframe
                            width="460"
                            height="257"
                            src="https://www.youtube.com/embed/vn943x1Y8hc?si=BwxqBl1dfuOSzipP"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                            >
                        </iframe>
                    </div>
                    <div class="auftritte">
                        <p class="fs-5">
                            Vergangene und kommende Auftritte
                        </p>
                        <ul class="fs-6">
                            <li v-for="auftritt in auftritte" class="single-auftritt d-flex">
                                <i class="bi bi-people-fill me-2 mb-2"></i>
                                <span>{{ auftritt.place }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const songs = [
    { id: 1, title: "Amezaliva" },
    { id: 2, title: "Dos Kelbl" },
    { id: 3, title: "Love yourself (Justin Bieber)" },
    { id: 4, title: "Running up that hill" },
    { id: 5, title: "I want it that way (Backstreet Boys)" },
    { id: 6, title: "Halleluja" },
    { id: 7, title: "Oh holy night" }
]

const auftritte = [
    { place: "AWO Wohnstätten Löbau" },
    { place: "ASB-Seniorenpflegeheim Obercunnersdorf" },
    { place: "„Mitmachchor“ im Rahmen des „Lebendigen Adventskalender“ bei Löbau lebt e.V." },
    { place: "ASB Pflegeheim Obercunnersdorf" },
    { place: "Hospiz Herrnhut" },
]

</script>

<style language="scss" scoped>
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
    flex-direction: column;
    justify-content: center;
    background-image: url('@/assets/repertoire-bg.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .repertoire-content-wrapper {
        display: flex;
        align-items: start;
        justify-content: center;
        width: 100%;
        max-width: 100%;
    }

    .repertoire-column,
    .video-column {
        width: 50%;
        max-width: 100%;
    }

    .repertoire-column {
        padding-left: 3rem;
        padding-right: 3rem;
        max-width: 100%;
    }

    .green-note {
        height: 1.5rem;
    }

    .video-wrapper {
        background: #fff;
        margin-bottom: 3rem;
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /*16:9 aspect ratio (9/16 = 0.5625)*/
        height: 0;

        iframe {
            position: absolute;
            padding: 0.5rem;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: #4fc9d2 dashed 0.5rem;
            max-width: 100%;
            width: 100%;
        }
    }

    .auftritte {
        color: #046b52;

        li:hover {
            color: #b37800;
        }
    }

    /* Custom styling of list */
    .song-list {
        list-style-type: none;
        position: relative;

        li {
            display: flex;
            justify-content: start;
            align-items: center;
            position: relative;
            left: 0;
            color: #046b52;
            list-style: none;
            margin: 8px 0;
            border-left: 2px solid #b37800;
            transition: 0.4s;

            :hover {
                left: 10px;
                color: #000;
            }
        }

        li span {
            position: relative;
            padding: 8px;
            padding-left: 12px;
            display: inline-block;
            z-index: 1;
            transition: 0.4s;
        }

        li:hover span {
            font-weight: 500;
        }

        li:before {
            content: "";
            position: absolute;
            width: 80%;
            height: 100%;
            background: #b37800;
            transform: scaleX(0);
            transform-origin: left;
            transition: 0.4s;
        }

        li:hover:before {
            transform: scaleX(1);
        }
    }
}

/* Styling for mobiles */
@media (max-width: 992px) {
    .repertoire-container {
        .repertoire-content-wrapper {
            display: flex;
            flex-direction: column;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .repertoire-column,
        .video-column {
            width: 100%;
            padding: 0;
            max-width: 100%;
        }

        iframe {
            border: #4fc9d2 dashed 0.25rem !important;
        }

        ul {
            padding: 0;
            margin-bottom: 3rem;
        }

        li:hover span {
            font-weight: 400 !important;
        }

        li:before {
            background: unset !important;
            transition: none;
        }

        li:hover:before {
            transform: scaleX(0);
        }
    }
}
</style>
