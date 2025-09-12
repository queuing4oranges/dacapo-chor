<template>
    <div class="controls">
        <button @click="prev" :disabled="isAtStart">
            <i class="bi bi-chevron-double-left"></i>
        </button>
        <button @click="next" :disabled="isAtEnd">
            <i class="bi bi-chevron-double-right"></i>
        </button>
    </div>
    <div class="carousel">
        <div
            class="inner"
            :style="{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                '--slides-per-view': slidesPerView
            }"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
        >
            <div
                class="gallery-card"
                :class="{ 'is-center': index === centerIndex }"
                v-for="(card, index) in cards"
                :key="index"
            >
                <img :src="card" :alt="'Slide ' + (index + 1)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import img1 from "@/assets/gallery1.png";
import img2 from "@/assets/gallery2.png";
import img3 from "@/assets/gallery3.png";
import img4 from "@/assets/gallery4.png";
import img5 from "@/assets/gallery5.png";
import img7 from "@/assets/gallery7.png";
import img8 from "@/assets/gallery8.png";

// Reactive array of slide URLs
const cards = [img2, img1, img7, img3, img5, img4, img8];
const currentIndex = ref(0);

// Go to the previous slide
function prev() {
    if (currentIndex.value > 0) currentIndex.value --
}

// Go to the next slide
function next() {
    if (currentIndex.value < maxIndex.value) currentIndex.value ++
}

// Handle prev/next slide with swiping
const touchStartX = ref(0); // Store x coordinate of where user touches screen

function onTouchStart(e) { // Fired when user puts finger down
    touchStartX.value = e.changedTouches[0].screenX; // Save x position of the first touch point
}

function onTouchEnd(e) {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX.value - touchEndX; // Calculate swiped distance

    // Only fire if swipe is more than 50px (to avoid accidental taps)
    if (Math.abs(diff) > 50) {
        if (diff > 0 && !isAtEnd.value) {
            // Swiped left → go to next slide
            next();
        } else if (diff < 0 && !isAtStart.value) {
            // Swiped right → go to previous slide
            prev();
        }
    }
}

const slidesPerView = computed(() => width.value <=992 ? 1 : 2);
const maxIndex = computed(() => cards.length - slidesPerView.value); // Prevent empty space next to current index
const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value === maxIndex.value);
const centerIndex = computed(() => currentIndex.value + Math.floor(slidesPerView.value / 2));

const width = ref(window.innerWidth);

const updateWidth = () => {
    width.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', updateWidth);
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWidth);
})

</script>

<style scoped lang="scss">
.carousel {
    width: 100%;
    height: auto;
    overflow: hidden;
    margin: 1rem auto;
    cursor: pointer;
}

.inner {
    display: flex;
    transition: transform 0.4s ease;
}

.gallery-card {
    min-width: calc(100% / var(--slides-per-view) - 0.6rem);
    height: 100%;
    border-top-right-radius: 10%;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
}

.gallery-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

.controls {
    text-align: center;
    margin-top: 0.5rem;
    display: flex;
    width: 10%;
    justify-content: space-between;
}

button {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    color: $accent;
    border: 0.2rem solid $accent;
    background-color: transparent;

    &:disabled {
        opacity: 0.5;
    }

    &:hover {
        background-color: $accent;
        color: $logo-color;
    }
}

@media (max-width: 992px) {
    .controls {
        display: none;
    }
}
</style>
