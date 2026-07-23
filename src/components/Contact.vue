<script setup lang="ts">
import { contactContent } from '../constants/contact'

const content = contactContent
</script>

<template>
  <section id="contact" class="s-contact target-section">
    <div class="container">
      <h2 class="text-pretitle">{{ content.pretitle }}</h2>
      <p class="h1 contact-lead">{{ content.lead }}</p>

      <div class="contact-meta">
        <p class="contact-links">
          <a :href="`mailto:${content.email}`">{{ content.email }}</a>
        </p>
        <ul class="contact-social">
          <li v-for="item in content.social" :key="item.label">
            <a :href="item.href" target="_blank" rel="noopener noreferrer">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.s-contact {
  position: relative;
  z-index: 2;
  padding: var(--vspace-5) 0 var(--vspace-3);
  border-top: 1px solid var(--color-border);
}

.s-contact .text-pretitle {
  color: var(--color-1);
  margin-bottom: var(--vspace-1_5);
}

.contact-lead {
  max-width: 90rem;
  margin-bottom: var(--vspace-2);
  color: var(--color-text-light);
}

.contact-meta {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.8rem var(--gutter);
  min-width: 0;
}

.contact-links {
  font-size: var(--text-md);
  margin: 0;
}

.contact-social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85em 1.2em;
  font-size: var(--text-md);
  margin: 0;
}

.contact-links a,
.contact-social a {
  color: var(--color-text-dark);
}

.contact-links a:hover,
.contact-social a:hover {
  color: var(--color-1);
}
</style>
