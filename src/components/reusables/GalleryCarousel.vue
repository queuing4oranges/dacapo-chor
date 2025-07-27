<template>
    <div class="carousel">
        <div class="inner" :style="{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }">
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
    <div class="controls">
        <button @click="prev" :disabled="isAtStart">
            <i class="bi bi-chevron-double-left"></i>
        </button>
        <button @click="next" :disabled="isAtEnd">
            <i class="bi bi-chevron-double-right"></i>
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
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
const slidesPerView = 3;

// Go to the previous slide
function prev() {
    if (currentIndex.value > 0) currentIndex.value --
}

// Go to the next slide
function next() {
    if (currentIndex.value < maxIndex) currentIndex.value ++
}

const maxIndex = cards.length - slidesPerView // Prevent empty space next to current index
const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value === maxIndex);
const centerIndex = computed(() => currentIndex.value + Math.floor(slidesPerView / 2))

</script>

<style scoped lang="scss">
.carousel {
  width: 90%;
  height: auto;
  overflow: hidden;
  margin: 1rem auto;
  background-color: $background;
}

.inner {
  display: flex;
  transition: transform 0.4s ease;
}

.gallery-card {
  min-width: calc(33.3% - 0.6rem);
  height: 100%;
  border-top-right-radius: 10%;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  background-color: $background;
//   opacity: 0.5;

//   &.is-center {
//     opacity: 1;
//   }
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
  width: 7%;
  justify-content: space-between;
}

button {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    color: $accent;
    border: 0.1rem solid $accent;
    background-color: transparent;

    &:disabled {
        opacity: 0.5;
    }

    &:hover {
        background-color: $accent;
        color: $logo-color;
    }
}

</style>
