<script setup>
defineProps({
  thisTextEn: String,
  thisTextJa: String,
});
</script>

<template>
  <h2>
    <span data-anime="heading">{{ thisTextEn }}</span>
    <span>{{ thisTextJa }}</span>
  </h2>
</template>

<style lang="scss" scoped>
h2 {
  span {
    display: block;
    &:first-of-type {
      font-family: var(--font-family-en);
      font-weight: 700;
      @include mixin.text(48px, 1, center);
      letter-spacing: 0.06em;
      text-transform: capitalize;
      @include mixin.mq('tab') {
        font-size: 62px;
      }
      @include mixin.mq('pc') {
        font-size: 80px;
      }
    }
    &:last-of-type {
      margin-top: 10px;
      font-weight: 700;
      @include mixin.text(18px, 1, center);
      letter-spacing: 0.06em;
      @include mixin.mq('tab') {
        font-size: 20px;
      }
      @include mixin.mq('pc') {
        font-size: 24px;
      }
    }
  }
}
</style>
