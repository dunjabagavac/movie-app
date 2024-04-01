<script setup>
import FeatureHero from '../components/FeatureHero.vue'
import SearchBar from '../components/SearchBar.vue'
import MovieList from '../components/MovieList.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import env from '@/env.js'
import { ref } from 'vue'

let search = ref('')
const movies = ref([])
let errorMessage = ref('')
let isLoading = false

const searchMovies = (searchValue) => {
  search.value = searchValue
  if (searchValue.length !== 0) {
    isLoading = true
    fetch(`http://www.omdbapi.com/?apikey=${env.apiKey}&s=${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'False') {
          movies.value = []
          errorMessage.value = data.Error
        } else {
          movies.value = data.Search
          search.value = ''
          errorMessage.value = ''
        }
      })
    isLoading = false
  }
}
</script>

<template>
  <main>
    <div v-if="movies && movies.length <= 0">
      <FeatureHero />
    </div>
    <SearchBar :search="search" @searchMovies="searchMovies" />
    <div class="loader" v-if="isLoading">
      <LoadingSpinner />
    </div>
    <div v-else>
      <div v-if="movies && movies.length > 0">
        <MovieList :movies="movies" />
      </div>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.loader {
  @apply flex justify-center items-center;
}
.error {
  @apply text-xl bg-red-700 rounded-lg w-80 flex justify-center items-center m-auto;
}
</style>
