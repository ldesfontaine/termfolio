<template>
  <div class="education-section">
    <div class="intro">Here is my education background!</div>
    <div v-for="item in educationData" :key="item.title" class="education-item">
      <div class="title">{{ item.title }}</div>
      <div class="desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script setup>
const educationData = [
  {
    title: "B.Sc in Cyber Forensics",
    desc: "MG University | Expected 2026"
  },
  {
    title: "Self-Learner in Cybersecurity",
    desc: "CTFs, open-source projects, and independent research"
  }
]
</script>

<style scoped>
.education-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.intro {
  margin-bottom: 0.75rem;
}

.education-item {
  margin-bottom: 1rem;
}

.title {
  font-weight: 700;
  margin-bottom: 0.275rem;
  color: var(--color-primary);
}

.desc {
  color: var(--color-text-200);
}
</style>
