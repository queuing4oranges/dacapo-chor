<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 35.437985 18.913558"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(73.973458,-251.21574)">
      <path
        style="mix-blend-mode:normal;fill:#046b52;fill-opacity:1;stroke:none;stroke-width:0.547952;stroke-dasharray:none;stroke-opacity:1"
        d="m -59.363999,253.54233 c 0.35166,0.0296 0.36843,-2.03846 0.121759,-2.26693 -0.24691,-0.22868 -1.820639,0.27852 -2.591179,0.36575 l -2.564839,0.40058 -3.471361,0.5532 -0.051,1.08359 0.157381,4.0799 0.57454,7.18287 c -1.09641,-0.27222 -2.57649,-0.22349 -4.33264,0.77166 -1.9509,1.10551 -2.941519,2.7873 -2.212569,3.7563 0.72889,0.9689 2.901049,0.85824 4.85177,-0.24717 1.95072,-1.10546 2.63248,-3.18015 2.50736,-3.60169 -0.029,-0.0977 -0.189951,-2.90777 -0.31545,-3.66341 l -0.35134,-4.43398 -0.13796,-2.98976 0.84088,-0.056 3.164859,-0.33242 z"
      />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: 134, // matches original width (approx.)
  },
  height: {
    type: [String, Number],
    default: 71, // matches original height (approx.)
  },
})
</script>

