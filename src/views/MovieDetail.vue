<template lang="">
  <div class="movieDetails">
    <div>
      <div v-if="movie.Poster !== 'N/A'" class="moviePoster">
        <img :src="movie.Poster" alt="Movie Poster" />
      </div>
      <div v-else class="moviePoster">
        <img
          src="https://w0.peakpx.com/wallpaper/310/869/HD-wallpaper-black-screen-space-thumbnail.jpg"
          alt="Default Movie Poster"
        />
      </div>
    </div>
    <div class="aboutMovie">
      <p class="title">{{ movie.Title }}</p>
      <p>
        Released: <span>{{ movie.Released }}</span>
      </p>
      <p>
        Genre: <span>{{ movie.Genre }}</span>
      </p>
      <p>
        Type: <span class="uppercase">{{ movie.Type }}</span>
      </p>
      <p>
        Runtime: <span>{{ movie.Runtime }}</span>
      </p>
      <p class="plot">
        Plot: <span>{{ movie.Plot }}</span>
      </p>
      <p>
        Actors: <span>{{ movie.Actors }}</span>
      </p>
      <p>
        IMDb Rating: <span>{{ movie.imdbRating }}</span>
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import env from '@/env.js'

const movie = ref({})
const route = useRoute()

onBeforeMount(() => {
  fetch(`http://www.omdbapi.com/?apikey=${env.apiKey}&i=${route.params.id}&plot=full`)
    .then((response) => response.json())
    .then((data) => {
      movie.value = data
    })
})
</script>
<style lang="postcss" scoped>
.movieDetails {
  @apply flex flex-col md:flex-row py-10 px-10 lg:px-20 w-full;
}
.moviePoster {
  @apply w-full;
}
.aboutMovie {
  @apply w-full md:px-12 mt-7 md:mt-0 flex flex-col gap-3;
}
.title {
  @apply text-6xl;
}
span {
  @apply italic;
}
.plot {
  @apply text-justify;
}
</style>
