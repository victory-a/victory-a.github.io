<script setup lang="ts">
import { expertiseContent } from '../constants/expertise'

const content = expertiseContent
</script>

<template>
  <section id="expertise" class="s-expertise target-section">
    <div class="container">
      <div class="expertise-timelines">
        <div class="timeline-group">
          <h2 class="text-pretitle">{{ content.experienceTitle }}</h2>
          <div class="timeline">
            <div
              v-for="item in content.experience"
              :key="`${item.title}-${item.timeframe}`"
              class="timeline__block"
            >
              <div class="timeline__bullet" />
              <div class="timeline__header">
                <h3 class="timeline__title">
                  <a
                    v-if="item.url"
                    class="timeline__company-link"
                    :href="item.url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="timeline__company-name">{{ item.title }}</span>
                  </a>
                  <template v-else>{{ item.title }}</template>
                </h3>
                <h4 class="timeline__meta">{{ item.meta }}</h4>
                <p class="timeline__timeframe">{{ item.timeframe }}</p>
              </div>
              <div class="timeline__desc">
                <p v-if="item.companyAbout" class="timeline__company">
                  {{ item.companyAbout }}
                </p>
                <ul v-if="item.achievements?.length" class="timeline__achievements">
                  <li v-for="(achievement, index) in item.achievements" :key="index">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-group">
          <h2 class="text-pretitle">{{ content.educationTitle }}</h2>
          <div class="timeline">
            <div
              v-for="item in content.education"
              :key="`${item.title}-${item.timeframe}`"
              class="timeline__block"
            >
              <div class="timeline__bullet" />
              <div class="timeline__header">
                <h3 class="timeline__title">{{ item.title }}</h3>
                <h4 class="timeline__meta">{{ item.meta }}</h4>
                <p class="timeline__timeframe">{{ item.timeframe }}</p>
              </div>
              <div class="timeline__desc">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.s-expertise {
  position: relative;
  z-index: 2;
  padding: var(--vspace-5) 0 var(--vspace-6);
  border-top: 1px solid var(--color-border);
}

.expertise-timelines {
  display: flex;
  flex-direction: column;
  gap: var(--vspace-4);
  max-width: 96rem;
}

.timeline-group .text-pretitle {
  color: var(--color-1);
}

.timeline {
  position: relative;
  padding-left: calc(1.75 * var(--space));
}

.timeline::before {
  content: '';
  position: absolute;
  left: 3px;
  top: 0.6rem;
  bottom: 0;
  width: 1px;
  background: var(--color-border);
}

.timeline__block {
  position: relative;
  padding-bottom: var(--vspace-2);
}

.timeline__block:last-child {
  padding-bottom: 0;
}

.timeline__bullet {
  position: absolute;
  left: calc(-1.75 * var(--space));
  top: 0.6rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-1);
}

.timeline__title {
  font-family: var(--font-1);
  font-size: var(--text-lg);
  font-weight: 500;
  margin: 0 0 0.4rem;
  color: var(--color-text-dark);
}

.timeline__company-link {
  color: inherit;
  text-decoration: none;
}

.timeline__company-link:hover,
.timeline__company-link:focus {
  color: inherit;
}

.timeline__company-name {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.22em;
  text-decoration-color: color-mix(in srgb, var(--color-1) 55%, transparent);
  transition: text-decoration-color 0.25s ease;
}

.timeline__company-link:hover .timeline__company-name,
.timeline__company-link:focus .timeline__company-name {
  text-decoration-color: var(--color-1);
}

@media (prefers-reduced-motion: reduce) {
  .timeline__company-name {
    transition: none;
  }
}

.timeline__meta {
  font-family: var(--font-1);
  font-size: calc(2.1rem * var(--multiplier));
  font-weight: 300;
  margin: 0 0 0.4rem;
  color: var(--color-text-dark);
}

.timeline__timeframe {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-light);
  margin: 0 0 var(--vspace-0_75);
}

.timeline__desc p {
  margin: 0;
  color: var(--color-text);
}

.timeline__desc p.timeline__company {
  margin-bottom: var(--vspace-0_5);
  color: rgba(230, 230, 230, 0.95);
  font-style: italic;
}

.timeline__achievements {
  margin: 0;
  padding: 0;
  color: var(--color-text);
}

.timeline__achievements li {
  position: relative;
  padding-left: 1.1em;
  margin-bottom: 0.55em;
}

.timeline__achievements li:last-child {
  margin-bottom: 0;
}

.timeline__achievements li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-1);
}
</style>
