<template>
  <div id="app" :style="themeStore.cssVariables" class="app-container">
    <Terminal />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Terminal from './components/Terminal.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.loadTheme()
})
</script>

<style>
*, ::before, ::after {
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  background-color: var(--color-body, #1D2A35);
  color: var(--color-text-100, #cbd5e1);
}

#app {
  height: 100vh;
  width: 100vw;
}

.app-container {
  height: 100vh;
  width: 100vw;
  background-color: var(--color-body);
  transition: background-color 0.3s ease;
  display: flex;
  flex-direction: column;
}

/* Custom Scroll Bar */
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: var(--color-body);
}

::-webkit-scrollbar-thumb {
  background: var(--color-scroll-handle, #19252E);
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-scroll-handle-hover, #162028);
}

input[type=text] {
  background-color: var(--color-body);
  color: var(--color-text-100);
  caret-color: var(--color-primary);
}

input[type=text]:focus-visible {
  outline: none;
}

.sr-only {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
</style>
