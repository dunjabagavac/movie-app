<template lang="">
  <form @submit.prevent="searchMovies" class="searchBar">
    <div class="searchContainer">
      <input type="text" placeholder="Search..." class="searchField" v-model="search" />
      <button type="submit" value="Search" class="searchBtn bg-pa_green">Search</button>
    </div>
  </form>
</template>
<script setup>
import { ref, defineEmits } from 'vue'

const props = defineProps({
  search: String
})

const search = ref(props.search)

const emit = defineEmits(['searchMovies'])

const searchMovies = () => {
  emit('searchMovies', search.value)
}
</script>
<style lang="postcss" scoped>
.searchBar {
  @apply flex flex-col justify-center items-center m-auto p-4;
}
.searchContainer {
  @apply relative md:w-2/3 w-full;
}
.searchField {
  @apply block appearance-none border-none outline-none w-full bg-black text-xl py-2.5 px-4 rounded-lg mb-4 transition duration-200 placeholder:text-pale_white focus:shadow-md shadow-black_shadow h-14;
}
.searchBtn {
  @apply block border-none outline-none max-w-72 p-4 rounded-tr-lg rounded-br-lg text-xl uppercase transition duration-200 active:bg-moss_green absolute inset-y-0 right-0 h-14;
}
</style>
