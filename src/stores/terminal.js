import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTerminalStore = defineStore('terminal', () => {
  const history = ref([])
  const currentDirectory = ref('~')
  const user = ref('visitor')
  const hostname = ref('terminal')

  const clearHistory = () => {
    history.value = []
  }

  const addToHistory = (command) => {
    history.value.push(command)
  }

  const prompt = computed(() => {
    return `${user.value}@${hostname.value}:${currentDirectory.value}$`
  })

  return {
    history,
    currentDirectory,
    user,
    hostname,
    prompt,
    clearHistory,
    addToHistory
  }
})
