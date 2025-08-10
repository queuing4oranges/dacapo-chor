<template>
    <button
        class="reusable-button"
        role="button"
        :style="{
            backgroundColor: isHovered ? hoverColor || color: color,
            height: height,
            width: width
        }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <slot></slot>
    </button>
</template>

<script>
defineProps({
    color: { type: String, default: 'red'},
    height: { type: String, default: '40px'},
    width: { type: String, default: '100px'},
    hoverColor: { type: String, default: ''}
})

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
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.reusable-button:after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 7px;
    left: 7px;
    transition: 0.2s;
}

.reusable-button:hover:after {
    top: 0px;
    left: 0px;
}

@media (min-width: 768px) {
    .reusable-button {
        padding: 13px 50px 13px;
    }
}
</style>