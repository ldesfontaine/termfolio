<template>
  <div class="themes-section">
    <div class="intro">Available themes:</div>
    <div v-for="(theme, key) in availableThemes" :key="key" class="theme-item">
      <button
        @click="selectTheme(key)"
        :class="['theme-button', { active: currentTheme.name === key }]"
      >
        {{ theme.name }}
      </button>
      <span v-if="currentTheme.name === key" class="current-indicator">(current)</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { themes } from '@/composables/themes'

const themeStore = useThemeStore()
const currentTheme = computed(() => themeStore.currentTheme)
const availableThemes = themes

const selectTheme = (themeName) => {
  themeStore.setTheme(themeName)
}
</script>

<style scoped>
.themes-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.intro {
  margin-bottom: 0.75rem;
}

.theme-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.theme-button {
  background: none;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.theme-button:hover {
  background-color: var(--color-primary);
  color: var(--color-body);
}

.theme-button.active {
  background-color: var(--color-primary);
  color: var(--color-body);
}

.current-indicator {
  margin-left: 0.5rem;
  color: var(--color-text-200);
  font-style: italic;
}
</style>
