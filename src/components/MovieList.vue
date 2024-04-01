<template lang="">
  <div class="movieList">
    <div v-for="movie in movies" :key="movie.imdbID" class="movie">
      <RouterLink :to="'/movie/' + movie.imdbID" class="movieLink">
        <div class="productImage">
          <div v-if="movie.Poster !== 'N/A'">
            <img :src="movie.Poster" alt="Movie Poster" />
          </div>
          <div v-else>
            <img
              src="https://w0.peakpx.com/wallpaper/310/869/HD-wallpaper-black-screen-space-thumbnail.jpg"
              alt="Default Movie Poster"
            />
          </div>
          <p class="movieType">{{ movie.Type }}</p>
        </div>
        <div class="detail">
          <p class="year">{{ movie.Year }}</p>
          <p class="title">{{ movie.Title }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
defineProps({
  movies: Array
})
</script>
<style lang="postcss" scoped>
.movieList {
  @apply flex flex-wrap mx-2 pb-20 px-5;
}
.movie {
  @apply py-4 px-2 flex-grow flex-shrink;
}
.movieLink {
  @apply flex flex-col h-full;
}
.productImage {
  @apply relative block;
}
img {
  @apply block w-full h-[275px] max-h-[275px] object-cover;
}
.movieType {
  @apply absolute py-2 px-4 bg-forest_green text-anti_flash_white bottom-4 left-0 uppercase;
}
.detail {
  @apply bg-pa_green py-4 px-2 flex flex-col w-full;
}
.year {
  @apply text-sm;
}
.title {
  @apply font-semibold text-lg;
}
</style>
