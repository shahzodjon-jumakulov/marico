<script setup>
const ui = {
  base: '',
  font: 'font-medium',
  rounded: 'rounded-lg',
  size: {
    sm: 'text-xl',
  },
  padding: {
    sm: 'px-5 py-4.5',
  },
  color: {
    white: {
      solid: 'ring-0 text-white bg-blue hover:bg-blue-hover focus-visible:ring-0',
      ghost: 'text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
    },
  },
  default: {
    size: 'sm',
    variant: 'solid',
    color: 'primary',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
  },
}
;
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-4">
      <img src="/logo.svg" alt="Marico" />
      <h1
        class="font-[Poppins] font-extrabold text-white text-4xl leading-normal"
      >
        Marico
      </h1>
    </div>
    <div class="flex gap-1">
      <UButton label="Login" :ui="ui" variant="ghost" />
      <UButton label="Signup" :ui="ui" />
    </div>
  </header>
</template>
