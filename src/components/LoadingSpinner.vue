<template>
  <div class="" role="status">
    <span class="">Loading...</span>
  </div>
</template>
<style lang="postcss" scoped>
div {
  @apply inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em]  motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white;
}
span {
  @apply flex justify-center items-center !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)];
}
</style>
