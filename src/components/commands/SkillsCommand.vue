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
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "Bash", "C", "SQL"]
  },
  {
    category: "Cybersecurity",
    skills: ["Digital Forensics", "Network Security", "Penetration Testing", "CTFs", "Incident Response"]
  },
  {
    category: "Web Technologies",
    skills: ["React", "Vue.js", "Node.js", "HTML/CSS", "REST APIs"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Linux", "Git", "Docker", "Wireshark", "Metasploit", "Burp Suite"]
  }
]
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
