<template>
    <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="h-100 w-75 mt-3 d-flex flex-column justify-content-center align-items-center">
            <HeroTitle />
            <div>
                <p>
                    Unser Repertoire reicht von deutschen Volksliedern über moderne Popkultur bis hin zu Traditionals aus Afrika. Hier eine Auswahl an Liedern, die wir gerade einstudieren
                </p>
                <ul>
                    <li>„Amezaliva“</li>
                    <li>„Dos Kelbl“</li>
                    <li>„Love yourself“ (Justin Bieber)</li>
                    <li>„Running up that hill“</li>
                </ul>
                <div>
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
import HeroTitle from './HeroTitle.vue';

</script>