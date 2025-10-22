<template>
  <div class="simple-output">
    {{ output }}
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useTerminalStore } from '@/stores/terminal'

const props = defineProps({
  command: {
    type: String,
    required: true
  }
})

const terminalStore = useTerminalStore()

const output = computed(() => {
  switch (props.command) {
    case 'pwd':
      return terminalStore.currentDirectory
    case 'whoami':
      return terminalStore.user
    case 'email':
      // Open email client
      window.open('mailto:navaneethms182@gmail.com', '_self')
      return 'navaneethms182@gmail.com'
    case 'gui':
      // Open GUI version
      window.open('https://navnee1h.github.io/', '_blank')
      return 'Opening GUI version...'
    default:
      return ''
  }
})
</script>

<style scoped>
.simple-output {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}
</style>
