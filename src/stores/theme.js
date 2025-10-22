import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { themes } from '@/composables/themes'

export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref(themes.dark)
  const themeLoaded = ref(false)

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      currentTheme.value = themes[themeName]
      localStorage.setItem('tsn-theme', themeName)
    }
  }

  const loadTheme = () => {
    const savedTheme = localStorage.getItem('tsn-theme')
    if (savedTheme && themes[savedTheme]) {
      currentTheme.value = themes[savedTheme]
    }
    themeLoaded.value = true
  }

  const cssVariables = computed(() => {
    const theme = currentTheme.value
    return {
      '--color-body': theme.colors.body,
      '--color-primary': theme.colors.primary,
      '--color-secondary': theme.colors.secondary,
      '--color-text-100': theme.colors.text[100],
      '--color-text-200': theme.colors.text[200],
      '--color-text-300': theme.colors.text[300],
      '--color-scroll-handle': theme.colors.scrollHandle,
      '--color-scroll-handle-hover': theme.colors.scrollHandleHover
    }
  })

  return {
    currentTheme,
    themeLoaded,
    setTheme,
    loadTheme,
    cssVariables
  }
})
