<script setup lang="ts">
import Circles from './components/Circles.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Expertise from './components/Expertise.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useSmoothScroll } from './composables/useSmoothScroll'

const { handleClick } = useSmoothScroll()
</script>

<template>
  <div id="top" class="pagewrap" @click="handleClick">
    <Circles />
    <Navbar />
    <main class="s-content">
      <Hero />
      <Expertise />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.s-content {
  position: relative;
  z-index: 2;
}
</style>
