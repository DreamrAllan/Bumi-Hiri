<template>
  <div class="home-page">
    <Hero />
    <Destinations />
    <Culture />
    <Activities />
    <Gallery />
    <Contact />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Destinations from '../components/Destinations.vue'
import Culture from '../components/Culture.vue'
import Activities from '../components/Activities.vue'
import Gallery from '../components/Gallery.vue'
import Contact from '../components/Contact.vue'
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
}
</style>
