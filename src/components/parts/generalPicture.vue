<script setup>
defineProps({
  srcFileDirectory: String,
  srcFileName: String,
  srcFileExtension: String,
  alt: String,
  width: String,
  height: String,
  loading: String,
  decoding: String,
});
</script>

<template>
  <picture>
    <source type="image/webp" :srcset="`${srcFileDirectory}${srcFileName}.webp`" />
    <img :src="`${srcFileDirectory}${srcFileName}.${srcFileExtension}`" :alt="alt" :width="width" :height="height" :loading="loading" :decoding="decoding" />
  </picture>
</template>

<style lang="scss" scoped>
// <generalPicture srcFileDirectory="../assets/img/" srcFileName="" srcFileExtension="" alt="" width="" height="" loading="lazy" decoding="async" />
</style>
