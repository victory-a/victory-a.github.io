<script setup lang="ts">
import { contactContent } from '../constants/contact'

const content = contactContent
</script>

<template>
  <section id="contact" class="s-contact target-section">
    <div class="container">
      <h2 class="text-pretitle">{{ content.pretitle }}</h2>
      <p class="h1 contact-lead">{{ content.lead }}</p>

      <div class="contact-row">
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

        <a
          class="btn btn--medium contact-cv"
          :href="content.cvHref"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ content.cvLabel }}
        </a>
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
}

.contact-lead {
  max-width: 90rem;
  margin-bottom: var(--vspace-2);
  color: var(--color-text-dark);
}

.contact-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gutter);
  flex-wrap: wrap;
}

.contact-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem 1.6rem;
  min-width: 0;
}

.contact-links,
.contact-social {
  font-size: var(--text-md);
  margin: 0;
}

.contact-cv {
  flex-shrink: 0;
}

.contact-links a,
.contact-social a {
  color: var(--color-text-light);
}

.contact-links a:hover,
.contact-social a:hover {
  color: var(--color-1);
}

.contact-social li {
  display: inline;
}

.contact-social li:not(:last-child)::after {
  content: ', ';
  color: var(--color-text-light);
}
</style>
