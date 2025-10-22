<template>
  <div class="skills-section">
    <div class="intro">Here are my technical skills:</div>
    <div v-for="category in skillsData" :key="category.category" class="skills-category">
      <div class="category-title">{{ category.category }}</div>
      <div class="skills-list">
        <span v-for="skill in category.skills" :key="skill" class="skill-item">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const skillsData = [
  {
    category: "Développement",
    skills: [
      "Langages : Python, JS/TS, PHP, Java (etc.)",
      "Frameworks & Libs : React, Angular, Next.js, Symfony, Laravel, Django, FastAPI, LangChain, LangGraph",
      "IA & Données : OpenAI, Mistral, TensorFlow / Keras (océan hackathon)"
    ]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "Conteneurisation : Docker, Docker Compose",
      "Automatisation / CI·CD : Git, GitHub, GitLab CI, Ansible (débutant)",
      "Scripts : Bash & Python (scripts divers)",
      "Gestion de projet : Scrum / Méthode Agile"
    ]
  },
  {
    category: "Systèmes & Réseaux",
    skills: [
      "Systèmes d'exploitation : Linux (Debian, OBarun, Mint), Windows 10 & 11",
      "Réseaux : TCP/UDP, SSH, FTP/SFTP, modèle OSI",
      "Sécurité & Supervision : fail2ban, bonnes pratiques, DevSecOps"
    ]
  },
  {
    category: "Pentest",
    skills: [
      "Reconnaissance",
      "Énumération : SMB, FTP, RDP, SSH, MySQL, SMTP, etc.",
      "Exploitation (Windows & Linux)",
      "Post-exploitation : pivoting, élévation de privilèges",
      "Metasploit Framework"
    ]
  }
];
</script>

<style scoped>
.skills-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.intro {
  margin-bottom: 0.75rem;
}

.skills-category {
  margin-bottom: 1rem;
}

.category-title {
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-item {
  background-color: var(--color-text-300);
  color: var(--color-body);
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
