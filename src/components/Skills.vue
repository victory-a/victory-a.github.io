<script setup lang="ts">
import { skillsContent } from '../constants/skills'

const content = skillsContent
</script>

<template>
  <section id="skills" class="s-skills target-section">
    <div class="container">
      <header class="skills-header">
        <h2 class="text-pretitle">{{ content.pretitle }}</h2>
        <p class="h1 skills-intro">{{ content.intro }}</p>
      </header>

      <div class="skills-grid">
        <div
          v-for="group in content.groups"
          :key="group.title"
          class="skill-group"
        >
          <h3 class="skill-group__title text-pretitle">{{ group.title }}</h3>
          <ul class="skill-group__list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.s-skills {
  position: relative;
  z-index: 2;
  padding: var(--vspace-4) 0 var(--vspace-6);
  border-top: 1px solid var(--color-border);
}

.skills-header {
  margin-bottom: var(--vspace-3);
  max-width: 90rem;
}

.skills-header .text-pretitle {
  color: var(--color-1);
}

.skills-intro {
  margin: 0 0 var(--vspace-2);
  color: var(--color-white);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--vspace-2) calc(var(--gutter) * 2);
}

.skill-group__title {
  color: var(--color-1);
  margin-bottom: var(--vspace-0_75);
}

.skill-group__list {
  font-size: var(--text-md);
  color: var(--color-text);
}

.skill-group__list li {
  display: inline;
}

.skill-group__list li:not(:last-child)::after {
  content: ', ';
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
