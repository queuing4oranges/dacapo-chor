<template>
	<Header
		:active-link="activeLink"
		:is-mobile="isMobile"
		@update:active-link="setActiveLink"
	/>
	<Homepage />
	<About :is-mobile="isMobile" />
	<Repertoire />
	<Kontakt :is-mobile="isMobile"/>
	<Gallery :is-mobile="isMobile"/>
	<Impressum />
</template>

<script setup>
import Header from './components/Header.vue';
import Homepage from './components/Homepage.vue';
import Kontakt from '@/components/Kontakt.vue';
import About from '@/components/About.vue';
import Gallery from '@/components/Gallery.vue';
import Repertoire from '@/components/Repertoire.vue';
import Impressum from './components/Impressum.vue';
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

// Global reactive state
const width = ref(window.innerWidth);

const updateWidth = () => {
	width.value = window.innerWidth;
};

onMounted(() => {
	window.addEventListener('resize', updateWidth);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateWidth);
});

const isMobile = computed(() => width.value <= 992);

// Active link state
const activeLink = ref("");
const setActiveLink = (link) => {
	activeLink.value = link;
};

// Intersection Observer for scroll
onMounted(() => {
	const sections = document.querySelectorAll(".observe-section");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");
					activeLink.value = id;

					// Update the URL hash without reloading
					history.replaceState(null, "", `#${id}`);
				}
			});
		},
		{
			threshold: 0.3, // Trigger when 30% is visible
		}
	);

	sections.forEach((section) => observer.observe(section));
});

// Handle scroll to the top - reset hash
window.addEventListener('scroll', () => {
	if (window.scrollY === 0) {
		activeLink.value = "";
		history.replaceState(null, "", "/")
	}
})
</script>
