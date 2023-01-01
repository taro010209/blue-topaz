<script setup>
defineProps({
  thisTextEn: String,
  thisTextJa: String,
});
</script>

<template>
  <h3>
    <span>{{ thisTextEn }}</span>
    <span>{{ thisTextJa }}</span>
  </h3>
</template>

<style lang="scss" scoped>
h3 {
  display: flex;
  align-items: center;
  span {
    display: block;
    &:first-of-type {
      font-family: var(--font-family-en);
      font-weight: 700;
      @include mixin.text(40px, 1, left);
      text-transform: capitalize;
      @include mixin.mq('tab') {
        font-size: 50px;
      }
      @include mixin.mq('pc') {
        font-size: 60px;
      }
    }
    &:last-of-type {
      margin-left: 10px;
      font-weight: 700;
      @include mixin.text(14px, 1, left);
      @include mixin.mq('tab') {
        font-size: 16px;
      }
      @include mixin.mq('pc') {
        font-size: 20px;
      }
    }
  }
}
</style>
