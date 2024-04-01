<template>
  <nav class="headerWrapper">
    <div class="logo">
      <RouterLink to="/">Movieland</RouterLink>
    </div>
    <div class="navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About us</RouterLink>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="postcss" scoped>
.headerWrapper {
  @apply bg-eaire_black h-16 w-full text-2xl flex flex-row gap-10 items-center;
}
.logo {
  @apply pl-2 md:pl-5;
}

.navbar {
  @apply flex w-full gap-3 justify-end pr-2 md:pr-5;
}
</style>
