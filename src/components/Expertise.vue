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
</style>
