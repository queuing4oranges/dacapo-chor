<template>
	<Header />
	<HeroSquares />
	<About />
	<Repertoire />
	<Kontakt />
	<Mitglieder />
</template>

<script setup>
import Header from './components/Header.vue';
import HeroSquares from './components/HeroSquares.vue';
import Kontakt from '@/components/Kontakt.vue';
import About from '@/components/About.vue';
import Mitglieder from '@/components/Mitglieder.vue';
import Repertoire from '@/components/Repertoire.vue';
import { onMounted, ref } from "vue";

const activeLink = ref("");

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
	if (window.scrollTo === 0) {
		activeLink.value = "";
		history.replaceState(null, "", "/")
	}
})
</script>
