/*
    Directive that will be added to any element with v-intersect
    It connects the element to our composable, so animations fire when visible.
*/

import { useIntersectionObserver } from "@/composables/useIntersectionObserver";

export default {
    mounted(el) {
        // Get the animation class
        const animationClass = el.dataset.animation;

        // Use composable to create an IntersectionObserver
        const { observe, unobserve } = useIntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Only handle the current element
                if (entry.target !== el) return;

                // Add/Remove class when entering/leaving viewport
                if (entry.isIntersecting) {
                    el.classList.add(animationClass);
                    unobserve(el); // Stop observing after animation
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% is visible

        // Start observing this element
        observe(el);

        // Store a cleanup function directly on the element
        el._unobserve = () => unobserve(el);
    },

    unmounted(el) {
        // When the element is destroyed, stop observing it
        if (el._unobserve) el._unobserve();
    },
};

/*
    Directives hook into the DOM directly
    - grab animation name for data-animation
    - when element scrolls into view - add the animation class
    - when leaving the element - remove it
*/