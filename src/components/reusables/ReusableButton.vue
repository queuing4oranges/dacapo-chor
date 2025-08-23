<template>
    <button
        class="reusable-button"
        role="button"
        :style="{
            '--bg-color': bgColor,
            '--hover-color': hoverColor || bgColor,
            '--height': height,
            '--width': width
        }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <span class="reusable-btn-text">
            <slot></slot>
        </span>
    </button>
</template>

<script setup>
const props = defineProps({
    bgColor: { type: String, default: '#fc4936' },
    hoverColor: { type: String, default: ''},
    height: { type: String, default: '40px'},
    width: { type: String, default: '100px'},
})
const { bgColor, hoverColor, height, width } = props
const isHovered = false;
</script>

<style scoped>
.reusable-button {
    font-size: 16px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    padding: 0;
    position: relative;
    background-color: transparent;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    z-index: 0;
}

.reusable-button:after {
    content: "";
    background-color: var(--bg-color);
    width: 100%;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transform: translate(7px, 7px);
    transition: 0.2s;
    z-index: -1;
}

.reusable-button:hover::after {
    background-color: var(--hover-color);
    transform: translate(0, 0);
    top: 0px;
    left: 0px;
}

.btn-text {
    position: relative;
    z-index: 1; /* always above colored background */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-bottom: 0;
}

@media (min-width: 768px) {
    .reusable-button {
        padding: 13px 50px 13px;
    }
}
</style>