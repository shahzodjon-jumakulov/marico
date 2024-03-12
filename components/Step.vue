<script setup>
defineProps(["content"]);
</script>

<template>
  <div class="flex-center flex-col gap-8">
    <div class="flex-center flex-col">
      <p class="text-primary text-2xl font-semibold leading-normal">
        Step {{ content.index }}
      </p>
      <UiTitle :label="content.title" class="text-[4.6rem]" />
      <p class="text-secondary text-3xl leading-normal text-center">
        {{ content.description }}
      </p>
    </div>
    <UButton :label="content.button" variant="outline" v-if="content.button" />
  </div>
</template>
