<script setup>
defineProps({
  summaryData: String,
  summaryName: String,
});
</script>

<template>
  <div class="convention_wrapper__each">
    <p class="convention_wrapper__data">{{ summaryData }}</p>
    <p class="convention_wrapper__name">{{ summaryName }}</p>
  </div>
</template>

<style lang="scss" scoped>
.convention_wrapper__each {
  padding: 20px;
  border-radius: var(--border-radius);
  background-color: var(--color-gray);
  &:not(:first-of-type) {
    margin-top: 30px;
  }
}
.convention_wrapper__data {
  font-family: var(--font-family-en);
  @include mixin.text(14px);
  text-transform: capitalize;
  color: var(--color-main);
}
.convention_wrapper__name {
  margin-top: 4px;
  @include mixin.text();
}
</style>
