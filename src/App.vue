<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <PageFooter />
  </footer>
</template>

<style scoped>
footer {
  @apply mt-10;
}
</style>
