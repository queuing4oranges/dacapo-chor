<template>
    <BCarousel
        ref="myCarousel"
        controls
        ride="carousel"
        :interval="2500"
        aria-roledescription="carousel"
        aria-label="Image carousel"
        role="region"
        :label-prev="'Previous slide'"
        :label-next="'Next slide'"
        :label-slide="(_, index) => `Go to slide ${index + 1} of ${cards.length}`"
    >
        <!-- Custom accessible indicators -->
        <div class="carousel-indicators" role="tablist">
            <button
            v-for="(_, index) in slides"
            :key="index"
            type="button"
            class="indicator-btn"
            :aria-label="`Go to slide ${index + 1} of ${slides.length}`"
            :aria-current="currentSlide === index ? 'true' : 'false'"
            @click="setSlide(index)"
            :class="{ active: currentSlide === index }"
            ></button>
        </div>

        <BCarouselSlide
            v-for="(card, index) in cards"
            :key="index"
            :img-src="card"
            :img-alt="`Gallery image ${index + 1}`"
            role="group"
            :aria-label="`Slide ${index + 1} of ${cards.length}`"
            class="carousel-slide"
        />
    </BCarousel>
</template>

<script setup>
import { ref } from 'vue'
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-next'

import img1 from '@/assets/gallery1.png'
import img2 from '@/assets/gallery2.png'
import img3 from '@/assets/gallery3.png'
import img4 from '@/assets/gallery4.png'
import img5 from '@/assets/gallery5.png'
import img6 from '@/assets/gallery6.png'
import img7 from '@/assets/gallery7.png'
import img8 from '@/assets/gallery8.png'

const cards = [img2, img1, img7, img3, img5, img6, img4, img8]
const myCarousel = ref(null)
</script>

<style scoped lang="scss">
.carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.indicator-btn {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: transparent;
    transition: background-color 0.3s;
}

.indicator-btn.active,
.indicator-btn:focus-visible {
    background-color: #fff;
    outline: 2px solid #000;
}
</style>
