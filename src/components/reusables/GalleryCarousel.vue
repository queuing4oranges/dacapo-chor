<template>
    <div class="carousel">
        <div class="inner" :style="{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }">
            <div
                class="card" 
                v-for="(card, index) in cards" 
                :key="index"
            >
                <img :src="card" :alt="'Slide ' + (index + 1)" />
            </div>
        </div>
    </div>
    <div class="controls">
        <button @click="prev" :disabled="isAtStart">prev</button>
        <button @click="next" :disabled="isAtEnd">next</button>
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
const cards = [img1, img2, img3, img4, img5, img7, img8];
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

const maxIndex = cards.length - slidesPerView // So there is no empty space next to current index
const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value === maxIndex);

</script>

<style scoped>
.carousel {
  width: 90%;
  height: auto;
  overflow: hidden;
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.inner {
  display: flex;
  transition: transform 0.4s ease;
}

.card {
  min-width: 33.3%;
  height: 100%;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.controls {
  text-align: center;
  margin-top: 0.5rem;
}

button {
    color: red;
}

</style>
