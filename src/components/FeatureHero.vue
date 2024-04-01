<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="feature">
    <RouterLink to="/movie/tt2015381">
      <img
        src="../assets/guardians.avif"
        alt="Guardians of the galaxy poster"
        class="featuredImage"
      />
      <div class="details">
        <p class="title">Guardians of the Galaxy Vol. 2</p>
        <p class="plot">
          After saving Xandar from Ronan's wrath, the Guardians are now recognized as heroes. Now
          the team must help their leader Star Lord (Chris Pratt) uncover the truth behind his true
          heritage.
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
.feature {
  @apply relative;
}
.featuredImage {
  @apply w-full h-full object-cover object-top block lg:max-h-[31.25rem];
}
.details {
  @apply absolute left-0 right-0 bottom-0 bg-black bg-opacity-75 p-4 z-10;
}
.title {
  @apply mb-2 text-xl md:text-3xl;
}
.plot {
  @apply md:text-xl;
}
</style>
