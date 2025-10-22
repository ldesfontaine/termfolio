<template>
  <div class="projects-section">
    <div class="intro">Here are some of my projects:</div>
    <div v-for="project in projects" :key="project.title" class="project-item">
      <div class="project-header">
        <span class="project-title">{{ project.title }}</span>
        <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
          [View Project]
        </a>
      </div>
      <div class="project-desc">{{ project.desc }}</div>
      <div class="project-stack">
        <span v-for="tech in project.stack" :key="tech" class="tech-item">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "Documentation",
    desc: "Dépôt contenant toutes mes documentations (README, guides, About).",
    stack: ["Markdown"],
    link: "https://github.com/ldesfontaine/Documentation"
  },
  {
    title: "lamp_installer_wp",
    desc: "Script Bash permettant l'installation d'un LAMP et d'un WordPress.",
    stack: ["Bash / Shell (100%)"],
    link: "https://github.com/ldesfontaine/lamp_installer_wp"
  },
  {
    title: "CrunchyTrack",
    desc: "Client Crunchyroll — Deprecated depuis l'ajout des Users sur Crunchyroll.",
    stack: ["JavaScript (78.8%)", "CSS (17.7%)", "HTML (3.5%)"],
    link: "https://github.com/ldesfontaine/CrunchyTrack"
  },
  {
    title: "CrunchyTrackApi",
    desc: "API pour le client CrunchyTrack.",
    stack: ["Python (100%)"],
    link: "https://github.com/ldesfontaine/CrunchyTrackApi"
  },
  {
    title: "Location",
    desc: "Site vitrine de location de véhicules réalisé avec le framework Laravel.",
    stack: ["PHP (54.3%)", "Blade (44.3%)", "Other (1.4%)"],
    link: "https://github.com/ldesfontaine/location"
  }
];
</script>

<style scoped>
.projects-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.intro {
  margin-bottom: 0.75rem;
}

.project-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-text-300);
}

.project-item:last-child {
  border-bottom: none;
}

.project-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.project-title {
  font-weight: 700;
  color: var(--color-primary);
  margin-right: 1rem;
}

.project-link {
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 0.875rem;
}

.project-link:hover {
  text-decoration: underline;
}

.project-desc {
  color: var(--color-text-200);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-item {
  background-color: var(--color-primary);
  color: var(--color-body);
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
}
</style>
