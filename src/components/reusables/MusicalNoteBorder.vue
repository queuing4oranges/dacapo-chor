<template>
    <div class="svg-border-wrapper" :style="{ width: width + 'px', height: height + 'px' }">
      <svg :viewBox="`0 0 ${width} ${height}`" class="border-svg">
        <!-- Rectangle border -->
        <rect :x="borderPadding" :y="borderPadding"
              :width="width - 2 * borderPadding"
              :height="height - 2 * borderPadding"
              fill="none" stroke="black" stroke-width="4"
        />
  
        <!-- Top edge -->
        <text v-for="(note, i) in topNotes" :key="'top-' + i"
            :x="note.x" :y="borderPadding + 20"
            font-size="24" font-family="Arial"
        >
            {{ note.symbol }}
        </text>
  
        <!-- Bottom edge -->
        <text v-for="(note, i) in bottomNotes" :key="'bottom-' + i"
            :x="note.x" :y="height - borderPadding - 5"
            font-size="24" font-family="Arial"
        >
            {{ note.symbol }}
        </text>
  
        <!-- Left edge -->
        <text v-for="(note, i) in leftNotes" :key="'left-' + i"
            :x="borderPadding" :y="note.y"
            font-size="24" font-family="Arial"
            :transform="`rotate(-90 ${borderPadding} ${note.y})`"
        >
            {{ note.symbol }}
        </text>
  
        <!-- Right edge -->
        <text v-for="(note, i) in rightNotes" :key="'right-' + i"
            :x="width - borderPadding" :y="note.y"
            font-size="24" font-family="Arial"
            :transform="`rotate(90 ${width - borderPadding} ${note.y})`"
        >
            {{ note.symbol }}
        </text>

      </svg>
  
      <div class="content">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  
  const props = defineProps({
    width: { default: 300 },
    height: { default: 300 }
  })
  
  const borderPadding = 20
  
  const noteSymbols = ['\u266B', '\u266A', '\u266C', '\u2669']
  
  function randomNotes(count) {
    return Array.from({ length: count }, () => ({
      symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)]
    }))
  }
  
  // dynamically calculate positions based on size
  const topNotes = computed(() => {
    const count = Math.floor((props.width - 2 * borderPadding) / 40)
    return Array.from({ length: count }, (_, i) => ({
      x: borderPadding + i * 40,
      symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)]
    }))
  })
  
  const bottomNotes = computed(() => {
    const count = Math.floor((props.width - 2 * borderPadding) / 40)
    return Array.from({ length: count }, (_, i) => ({
      x: borderPadding + i * 40,
      symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)]
    }))
  })
  
  const leftNotes = computed(() => {
    const count = Math.floor((props.height - 2 * borderPadding) / 40)
    return Array.from({ length: count }, (_, i) => ({
      y: borderPadding + i * 40,
      symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)]
    }))
  })
  
  const rightNotes = computed(() => {
    const count = Math.floor((props.height - 2 * borderPadding) / 40)
    return Array.from({ length: count }, (_, i) => ({
      y: borderPadding + i * 40,
      symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)]
    }))
  })
  </script>
  
    <style scoped>
        .svg-border-wrapper {
            position: relative;
            margin: 20px;
            /* box-shadow: 0 0 10px rgba(0,0,0,0.2); */
            border-radius: 10px;
        }

        .border-svg {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .content {
            position: relative;
            z-index: 1;
            padding: 40px;
            text-align: center;
        }
    </style>
