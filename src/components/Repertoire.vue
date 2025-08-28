<template>
    <div
        class="repertoire-container h-100 d-flex flex-column justify-content-center" 
        id="repertoire">
        <div class="page-title">
            <h1>Repertoire</h1>
        </div>
        <div class="h-100 d-flex justify-content-center align-items-center">
            <div class="h-100 w-75 mt-5 d-flex align-items-start justify-content-center">
                <div class="w-50 px-5">
                    <p class="fs-5">
                        Unser Repertoire reicht von deutschen Volksliedern über moderne Popkultur bis hin zu Traditionals aus Afrika. Hier eine Auswahl an Liedern, die wir gerade einstudieren
                    </p>
                    <ul class="fs-5">
                        <li v-for="song in songs" class="single-song d-flex">
                            <span class="single-note"><GreenNote height="80" width="40" /></span>
                            <p class="fs-5 m-0">{{ song.title }}</p>
                        </li>
                    </ul>
                </div>
                <div class="video-column w-50 px-5">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vn943x1Y8hc?si=BwxqBl1dfuOSzipP"
                        title="YouTube video player" 
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                        >
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import GreenNote from '@/components/reusables/NoteGreen.vue';

const songs = [
    { id: 1, title: "Amezaliva" },
    { id: 2, title: "Dos Kelbl" },
    { id: 3, title: "Love yourself (Justin Bieber)" },
    { id: 4, title: "Running up that hill" }
]

</script>

<style language="scss" scoped>
.repertoire-container {
        width: 100%;
    min-height: 100vh;
    background-color: #d1f3e2;
    
    .green-note {
        height: 1.5rem;
    }
    
    ul {
        list-style-type: none;
        
        li {
            display: flex;
            justify-content: start;
            align-items: center;
            
            &:hover p {
                color: #fc4936;
            }
        }
    }
    
    .video-column {
        background: #fff;
        font-family: Montserrat, sans-serif;;
        font-size: 24px;
        line-height: 30px;
        font-weight: bold;
        color: #009688;
        padding: 40px;
        box-shadow:
            inset #02372c 0 0 0 5px, 
            inset #03503f 0 0 0 1px, 
            inset #046b52 0 0 0 10px, 
            inset #2c9c7a 0 0 0 11px, 
            inset #3fa88b 0 0 0 16px, 
            inset #4fc9d2 0 0 0 17px, 
            inset #d1f3e2 0 0 0 21px, 
            inset #bfecf7 0 0 0 22px;
        text-shadow: 3px 3px 1px #bfecf7;
    }
}
</style>