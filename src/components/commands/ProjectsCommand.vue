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
    title: "Terminal Portfolio",
    desc: "A terminal-style portfolio website built with React",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://github.com/navnee1h/terminal-portfolio"
  },
  {
    title: "Cybersecurity Tools",
    desc: "Collection of cybersecurity scripts and tools",
    stack: ["Python", "Bash", "Networking"],
    link: null
  },
  {
    title: "CTF Solutions",
    desc: "My solutions and writeups for various CTF challenges",
    stack: ["Python", "Cryptography", "Forensics"],
    link: null
  }
]
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
