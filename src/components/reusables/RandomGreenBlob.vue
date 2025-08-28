<template>
  <svg
    class="blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <linearGradient id="blob-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop stop-color="#D1F3E2" offset="0%" />
        <stop stop-color="#046B52" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#blob-gradient)"
      d="M18.8,-32.5C24.7,-29.1,30.2,-24.8,34.6,-19.3C39,-13.7,42.4,-6.9,42.5,0.1C42.6,7,39.4,14,35.5,20.3C31.5,26.7,26.8,32.4,20.7,36.8C14.7,41.2,7.3,44.3,0.2,43.9C-7,43.6,-13.9,39.9,-20,35.5C-26,31.1,-31.2,26.1,-34.9,20C-38.7,14,-41,7,-40.7,0.2C-40.4,-6.7,-37.6,-13.4,-34.4,-20.4C-31.3,-27.4,-27.8,-34.8,-22,-38.3C-16.2,-41.7,-8.1,-41.3,-0.8,-39.8C6.4,-38.3,12.8,-35.8,18.8,-32.5Z"
      transform="translate(50 50)"
    />
  </svg>
</template>

<style scoped>
.blob-svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
