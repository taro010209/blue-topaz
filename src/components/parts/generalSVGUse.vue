<script setup>
defineProps({
  svgHref: String,
});
</script>

<template>
  <svg>
    <use :href="svgHref"></use>
  </svg>
</template>

<style lang="scss" scoped></style>
