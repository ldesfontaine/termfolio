<template>
  <div class="echo-section">
    {{ echoText }}
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  args: {
    type: Array,
    default: () => []
  }
})

const echoText = computed(() => {
  if (props.args.length === 0) return ''

  let text = props.args.join(' ')
  // Remove quotes if present
  text = text.replace(/^['"`]|['"`]$/g, '')
  return text
})
</script>

<style scoped>
.echo-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}
</style>
