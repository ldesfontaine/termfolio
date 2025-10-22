<template>
  <div class="help-section">
    <div class="help-title">Commandes Disponibles:</div>
    <div class="commands-grid">
      <div v-for="cmd in commands" :key="cmd.command" class="command-item">
        <span class="command-name">{{ cmd.command }}</span>
        <span class="command-desc">{{ cmd.desc }}</span>
      </div>
    </div>
    <div class="help-footer">
      <div>Appuyez sur <span class="key">[Tab]</span> pour l'auto-complétion.</div>
      <div>Appuyez sur <span class="key">[Échap]</span> pour effacer la ligne de saisie.</div>
      <div>Utilisez <span class="key">[Flèche Haut]</span> et <span class="key">[Flèche Bas]</span> pour naviguer dans l'historique des commandes.</div>
    </div>
  </div>
</template>

<script setup>
const commands = [
  { command: "about", desc: "- à propos de moi" },
  { command: "clear", desc: "- nettoyer le terminal" },
  { command: "parcours", desc: "- mon parcours" },
  { command: "help", desc: "- affiche toutes les commandes" },
  { command: "projects", desc: "- mes projets" },
  { command: "skills", desc: "- mes competences" },
  { command: "socials", desc: "- réseaux sociaux" },
  { command: "themes", desc: "- changer de thème" },
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
