<template>
  <div class="help-section">
    <div class="help-title">Available Commands:</div>
    <div class="commands-grid">
      <div v-for="cmd in commands" :key="cmd.command" class="command-item">
        <span class="command-name">{{ cmd.command }}</span>
        <span class="command-desc">{{ cmd.desc }}</span>
      </div>
    </div>
    <div class="help-footer">
      <div>Press <span class="key">[Tab]</span> for auto completion.</div>
      <div>Press <span class="key">[Esc]</span> to clear the input line.</div>
      <div>Use <span class="key">[Up Arrow]</span> and <span class="key">[Down Arrow]</span> to scroll through your command history.</div>
    </div>
  </div>
</template>

<script setup>
const commands = [
  { command: "about", desc: "- about me" },
  { command: "clear", desc: "- clear the terminal" },
  { command: "echo", desc: "- print out anything" },
  { command: "education", desc: "- my education background" },
  { command: "email", desc: "- send me an email" },
  { command: "gui", desc: "- go to GUI version" },
  { command: "help", desc: "- show all available commands" },
  { command: "history", desc: "- view command history" },
  { command: "projects", desc: "- view my projects" },
  { command: "pwd", desc: "- print current directory" },
  { command: "skills", desc: "- view my skills" },
  { command: "socials", desc: "- check out my social links" },
  { command: "themes", desc: "- change theme" },
  { command: "whoami", desc: "- about current user" }
]
</script>

<style scoped>
.help-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.help-title {
  margin-bottom: 0.25rem;
  font-weight: 700;
  color: var(--color-primary);
}

.commands-grid {
  margin-bottom: 1rem;
}

.command-item {
  margin-bottom: 0.25rem;
  display: flex;
}

.command-name {
  color: var(--color-primary);
  width: 120px;
  font-weight: 600;
}

.command-desc {
  color: var(--color-text-200);
  margin-left: 0.5rem;
}

.help-footer {
  font-size: 0.875rem;
  margin-top: 1rem;
  color: var(--color-text-200);
}

.help-footer div {
  margin-bottom: 0.25rem;
}

.key {
  color: var(--color-primary);
  font-weight: 600;
}

@media (max-width: 550px) {
  .help-footer {
    font-size: 0.75rem;
  }
}
</style>
