<template>
    <BCarousel
        ref="myCarousel"
        controls
        indicators
        ride="carousel"
        :interval="2500"
    >
        <BCarouselSlide
            v-for="(card, index) in cards"
            :key="index"
            :img-src="card"
        />
    </BCarousel>
</template>

<script setup>
import img1 from "@/assets/gallery1.png";
import img2 from "@/assets/gallery2.png";
import img3 from "@/assets/gallery3.png";
import img4 from "@/assets/gallery4.png";
import img5 from "@/assets/gallery5.png";
import img7 from "@/assets/gallery7.png";
import img8 from "@/assets/gallery8.png";
import { BCarouselSlide } from "bootstrap-vue-next";
import { ref } from 'vue'

const cards = [img2, img1, img7, img3, img5, img4, img8];

const myCarousel = ref('myCarousel')
</script>