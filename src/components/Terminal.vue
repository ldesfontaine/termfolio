<template>
  <div class="terminal-container" :style="themeStore.cssVariables">
    <div class="terminal-body" ref="terminalBody">
      <div class="welcome-message">
        <pre>{{ welcomeMessage }}</pre>
        <p>Bienvenue dans mon portfolio interactif !</p>
        <p>Tapez <span class="command-highlight">'help'</span> pour voir les commandes disponibles.</p>
      </div>

      <!-- Command History -->
      <div v-for="(entry, index) in commandHistory" :key="index" class="command-entry">
        <div class="command-input-line">
          <span class="prompt">{{ terminalStore.prompt }}</span>
          <span class="command-text">{{ entry.command }}</span>
        </div>
        <div class="command-output">
          <component
            :is="getCommandComponent(entry.command, entry.args)"
            :args="entry.args"
            :command="entry.command"
          />
        </div>
      </div>

      <!-- Current Input Line -->
      <div class="current-input-line">
        <span class="prompt">{{ terminalStore.prompt }}</span>
        <input
          ref="commandInput"
          v-model="currentCommand"
          @keydown="handleKeydown"
          class="command-input"
          spellcheck="false"
          autocomplete="off"
          autofocus
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useTerminalStore } from '@/stores/terminal'
import { useThemeStore } from '@/stores/theme'

// Import command components
import AboutCommand from './commands/AboutCommand.vue'
import ParcoursCommand from './commands/ParcoursCommand.vue'
import HelpCommand from './commands/HelpCommand.vue'
import ProjectsCommand from './commands/ProjectsCommand.vue'
import SkillsCommand from './commands/SkillsCommand.vue'
import SocialsCommand from './commands/SocialsCommand.vue'
import ThemesCommand from './commands/ThemesCommand.vue'

const terminalStore = useTerminalStore()
const themeStore = useThemeStore()

const terminalBody = ref(null)
const commandInput = ref(null)
const currentCommand = ref('')
const commandHistory = ref([])
const historyIndex = ref(-1)

const welcomeMessage = `
 _
| |
| |    _   _  ___ __ _ ___
| |   | | | |/ __/ _\` / __|
| |___| |_| | (_| (_| \\__ \\
|______\\__,_|\\___\\__,_|___/

 _____            __            _        _
|  __ \\          / _|          | |      (_)
| |  | | ___  ___| |_ ___  _ __ | |_ __ _ _ _ __   ___
| |  | |/ _ \\/ __|  _/ _ \\| '_ \\| __/ _\` | | '_ \\ / _ \\
| |__| |  __/\\__ \\ || (_) | | | | || (_| | | | | |  __/
|_____/ \\___||___/_| \\___/|_| |_|\\__\\__,_|_|_| |_|\\___| `
const getCommandComponent = (command) => {
  const cmd = command.toLowerCase().trim()

  switch (cmd) {
    case 'about':
      return AboutCommand
    case 'parcours':
      return ParcoursCommand
    case 'help':
      return HelpCommand
    case 'projects':
      return ProjectsCommand
    case 'skills':
      return SkillsCommand
    case 'socials':
      return SocialsCommand
    case 'themes':
      return ThemesCommand
    case 'clear':
      return null // Gérer clear séparément
    default:
      return 'div' // Pour les commandes inconnues
  }
}

const executeCommand = (command) => {
  const trimmedCommand = command.trim()
  if (!trimmedCommand) return

  const [cmd, ...args] = trimmedCommand.split(' ')

  // Gérer les commandes spéciales
  if (cmd.toLowerCase() === 'clear') {
    commandHistory.value = []
    return
  }

  // Ajouter la commande à l'historique
  commandHistory.value.push({
    command: trimmedCommand,
    args: args,
    isUnknown: !getCommandComponent(cmd) && cmd.toLowerCase() !== 'clear'
  })

  // Ajouter à l'historique du terminal
  terminalStore.addToHistory(trimmedCommand)

  // Faire défiler vers le bas
  nextTick(() => {
    scrollToBottom()
  })
}

const handleKeydown = (event) => {
  switch (event.key) {
    case 'Enter':
      executeCommand(currentCommand.value)
      currentCommand.value = ''
      historyIndex.value = -1
      break

    case 'ArrowUp':
      event.preventDefault()
      if (terminalStore.history.length > 0) {
        if (historyIndex.value === -1) {
          historyIndex.value = terminalStore.history.length - 1
        } else if (historyIndex.value > 0) {
          historyIndex.value--
        }
        currentCommand.value = terminalStore.history[historyIndex.value] || ''
      }
      break

    case 'ArrowDown':
      event.preventDefault()
      if (historyIndex.value !== -1) {
        if (historyIndex.value < terminalStore.history.length - 1) {
          historyIndex.value++
          currentCommand.value = terminalStore.history[historyIndex.value] || ''
        } else {
          historyIndex.value = -1
          currentCommand.value = ''
        }
      }
      break

    case 'Escape':
      currentCommand.value = ''
      historyIndex.value = -1
      break

    case 'Tab':
      event.preventDefault()
      autoComplete()
      break
  }
}

const autoComplete = () => {
  const commands = [
    'about', 'clear', 'parcours', 'help', 'projects',
    'skills', 'socials', 'themes'
  ]

  const input = currentCommand.value.toLowerCase()
  const matches = commands.filter(cmd => cmd.startsWith(input))

  if (matches.length === 1) {
    currentCommand.value = matches[0]
  }
}

const scrollToBottom = () => {
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}

const focusInput = () => {
  if (commandInput.value) {
    commandInput.value.focus()
  }
}

onMounted(() => {
  themeStore.loadTheme()
  focusInput()

  // Focaliser l'input lors d'un clic n'importe où dans le terminal
  document.addEventListener('click', focusInput)
})
</script>

<style scoped>
.terminal-container {
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: var(--color-body);
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  flex-direction: column;
}

.terminal-body {
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  background-color: var(--color-body);
  color: var(--color-text-100);
  font-family: 'IBM Plex Mono', monospace;
  min-height: 0;
  height: 100vh;
}

.welcome-message {
  margin-bottom: 1.5rem;
}

.welcome-message pre {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1.2;
  white-space: pre;
}

.welcome-message p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.command-highlight {
  color: var(--color-primary);
  font-weight: 600;
}

.command-entry {
  margin-bottom: 1rem;
}

.command-input-line,
.current-input-line {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.prompt {
  margin-right: 0.5rem;
  color: var(--color-primary);
  font-weight: 600;
  white-space: nowrap;
}

.command-text {
  color: var(--color-text-100);
}

.command-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-text-100);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  caret-color: var(--color-primary);
}

.command-output {
  margin-left: 0.5rem;
  color: var(--color-text-200);
}

/* Custom scrollbar */
.terminal-body::-webkit-scrollbar {
  width: 15px;
}

.terminal-body::-webkit-scrollbar-track {
  background: var(--color-body);
}

.terminal-body::-webkit-scrollbar-thumb {
  background: var(--color-scroll-handle);
}

.terminal-body::-webkit-scrollbar-thumb:hover {
  background: var(--color-scroll-handle-hover);
}

@media (max-width: 768px) {
  .terminal-container {
    height: 100vh;
    border-radius: 0;
  }

  .terminal-body {
    padding: 0.75rem;
  }
}
</style>
