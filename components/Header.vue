<script setup></script>

<template>
  <header class="flex items-center justify-between pt-[2.9rem]">
    <div class="flex items-center gap-4">
      <img src="/logo.svg" alt="Marico" />
      <h1 class="font-extrabold text-white text-4xl leading-normal">Marico</h1>
    </div>
    <div class="flex items-center space-x-10 max-md:hidden">
      <NuxtLink
        to="#about"
        class="text-secondary hover:text-primary transition-colors text-xl"
        >About</NuxtLink
      >
      <NuxtLink
        to="#pricing"
        class="text-secondary hover:text-primary transition-colors text-xl"
        >Pricing</NuxtLink
      >
      <NuxtLink
        to="#blog"
        class="text-secondary hover:text-primary transition-colors text-xl"
        >Blog</NuxtLink
      >
    </div>
    <div class="flex gap-1">
      <UButton label="Login" size="xs" variant="ghost" class="max-sm:hidden" />
      <UButton label="Signup" size="xs" />
    </div>
  </header>
</template>
