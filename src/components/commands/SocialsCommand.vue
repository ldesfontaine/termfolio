<template>
  <div class="socials-section">
    <div class="intro">Connect with me:</div>
    <div v-for="social in socialsData" :key="social.name" class="social-item">
      <span class="social-name">{{ social.name }}</span>
      <a :href="social.url" target="_blank" class="social-link">
        {{ social.url }}
      </a>
    </div>
  </div>
</template>

<script setup>
const socialsData = [
  {
    name: "GitHub",
    url: process.env.VUE_APP_GITHUB_URL
  },
  {
    name: "LinkedIn",
    url: process.env.VUE_APP_LINKEDIN_URL
  },
  {
    name: "Email",
    url: `mailto:${process.env.VUE_APP_EMAIL}`
  }
]
</script>

<style scoped>
.socials-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.intro {
  margin-bottom: 0.75rem;
}

.social-item {
  display: flex;
  margin-bottom: 0.5rem;
}

.social-name {
  color: var(--color-primary);
  width: 100px;
  font-weight: 600;
}

.social-link {
  color: var(--color-secondary);
  text-decoration: none;
  margin-left: 1rem;
}

.social-link:hover {
  text-decoration: underline;
}
</style>
