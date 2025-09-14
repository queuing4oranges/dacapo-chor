<script setup>
import Logo from "@/assets/dacapo-logo.svg";
</script>

<template>
    <div class="hero-title-container d-flex align-items-center mb-2">
        <span class="mx-3 logo-container">
            <Logo alt="Logo" class="logo-img"/>
        </span>
        <span class="hero-title-wrapper m-3">
            <h1 class="hero-title mb-0">da capo</h1>
            <p class="fs-2 mb-0 subtitle">Chorgemeinschaft aus der Oberlausitz</p>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.hero-title-container {
    margin: 6rem auto 0;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: nowrap;
}

.hero-title {
    font-size: 6rem;
    color: $logo-color;
    line-height: 0.8;
}

.logo-container {
    height: 10rem;
    width: 10rem;
    position: relative;

    & svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

// Mobile styles
@media (max-width: 1200px) {
    .hero-title {
        font-size: 5rem;
    }

    .subtitle {
        font-size: 1.5rem;
    }

    .hero-title-container {
        margin: unset;
    }

    .logo-container {
        height: 6rem;
        width: 6rem;
    }
}

@media (max-width: 992px) {
    .hero-title-container {
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero-title-wrapper {
        text-align: center;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 3.5rem;
    }

    .logo-img {
        height: 5rem;
    }
}

@media (max-width: 480px) {
    .hero-title {
       font-size: 2.5rem;
    }

    .subtitle {
        font-size: 1.2rem;
    }

    .logo-img {
        height: 4rem;
    }
}     
</style>
