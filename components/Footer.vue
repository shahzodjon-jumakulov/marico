<script setup></script>

<template>
  <footer class="flex items-center justify-between py-[2.9rem]">
    <div class="flex flex-col">
      <div class="flex items-center gap-4">
        <img src="/logo.svg" alt="Marico" />
        <h1 class="font-extrabold text-white text-4xl leading-normal">
          Marico
        </h1>
      </div>
      <a
        href="mailto:info@marico.co"
        target="_blank"
        class="text-secondary text-2xl"
        >info@marico.co</a
      >
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
      <UButton label="Sign in" variant="ghost" class="!ml-3" />
    </div>
  </footer>
</template>
