<template>
  <div class="parcours-section">
    <div class="intro">Voici mon parcours !</div>

    <div v-for="item in parcoursData" :key="item.section || item.title || item.degree" class="parcours-item">
      <!-- Section headers -->
      <div v-if="item.section" class="section-header">
        {{ item.section }}
      </div>

      <!-- Experience items -->
      <div v-else-if="item.title" class="experience-item">
        <div class="experience-title">{{ item.title }}</div>
        <div class="experience-meta">
          <span class="company">{{ item.company }}</span>
          <span class="period">{{ item.period }}</span>
        </div>
        <ul class="bullets" v-if="item.bullets">
          <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </div>

      <!-- Formation items -->
      <div v-else-if="item.degree" class="formation-item">
        <div class="formation-degree">{{ item.degree }}</div>
        <div class="formation-meta">
          <span class="school">{{ item.school }}</span>
          <span class="period">{{ item.period }}</span>
        </div>
        <div class="formation-details" v-if="item.details">{{ item.details }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    title: "Développeur Full-Stack — Stage",
    company: "APID",
    period: "Nov 2022 - Déc 2022",
    bullets: [
      "Développement d'une IA (deep learning) — Océan Hackathon 2022 (Keras, TensorFlow...)",
      "Développement web & auto-formation sur Django",
      "Conception de base de données (schéma conceptuel)",
      "Sauvegarde et versioning via GIT (Méthode Agile)"
    ]
  },
  {
    title: "Technicien N1 Systèmes et Réseaux",
    company: "Barrau Business Systems",
    period: "Déc 2022 - Janv 2023",
    bullets: [
      "Maintenance de parc informatique",
      "Déploiement de matériel informatique",
      "Déploiement via WAPT"
    ]
  },
  {
    title: "Développeur Full-Stack — Alternance",
    company: "Skazy",
    period: "Fév 2023 - Fév 2024",
    bullets: [
      "Développement Symfony",
      "Développement CMS (Drupal, Joomla, WordPress)",
      "Développement Front (AngularJS)",
      "Dockerisation",
      "Méthode agile (SCRUM)"
    ]
  },
  {
    title: "Développeur Full-Stack",
    company: "APID",
    period: "Juil 2025 - Sep 2025",
    bullets: [
      "Projet de simulation de crise en temps réel — Client : Base Aérienne 186",
      "Orchestration d'agents IA (LangGraph / LangChain)",
      "Développement web & intégration avec Next.js",
      "Automatisation des tests"
    ]
  }
];

const formations = [
  {
    degree: "Baccalauréat Général (Diplômé)",
    school: "Lycée Lapérouse",
    period: "Fév 2021 - Déc 2021",
    details: "Baccalauréat - Spécialité Math & Informatique"
  },
  {
    degree: "BTS SIO (Diplômé)",
    school: "Lycée du Grand Nouméa",
    period: "Fév 2022 - Nov 2023",
    details: "Services Informatiques aux Organisations — spécialité SLAM"
  },
  {
    degree: "Licence 3 MIAGE (Diplômé)",
    school: "UNC",
    period: "Fév 2024 - Août 2025",
    details: "MIAGE (Méthodes informatiques appliquées à la gestion des entreprises)"
  }
];

// Fusionner en un seul tableau avec sections
const parcoursData = [
  { section: "EXPÉRIENCES" },
  ...experiences,
  { section: "FORMATIONS" },
  ...formations
];
</script>

<style scoped>
.parcours-section {
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
}

.intro {
  margin-bottom: 0.75rem;
}

.parcours-item {
  margin-bottom: 1rem;
}

.section-header {
  font-weight: 700;
  color: var(--color-primary);
  font-size: 1.1rem;
  margin: 1.5rem 0 0.75rem 0;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.25rem;
}

.section-header:first-of-type {
  margin-top: 0.5rem;
}

/* Experience styles */
.experience-item, .formation-item {
  margin-bottom: 1.5rem;
  padding-left: 0.5rem;
  border-left: 2px solid var(--color-text-200);
}

.experience-title, .formation-degree {
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.experience-meta, .formation-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--color-text-200);
  font-size: 0.9rem;
}

.company, .school {
  font-weight: 600;
}

.period {
  font-style: italic;
}

.bullets {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.bullets li {
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.25rem;
  color: var(--color-text-200);
  line-height: 1.4;
}

.bullets li::before {
  content: "•";
  color: var(--color-primary);
  position: absolute;
  left: 0;
}

.formation-details {
  color: var(--color-text-200);
  font-style: italic;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .experience-meta, .formation-meta {
    flex-direction: column;
    gap: 0.25rem;
  }

  .section-header {
    font-size: 1rem;
  }
}
</style>
