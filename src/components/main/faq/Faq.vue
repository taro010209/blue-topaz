<script setup>
import Heading from '@/components/parts/generalHeading.vue';
import Wrapper from '@/components/main/faq/parts/wrapper.vue';
</script>

<template>
  <section class="faq">
    <div class="faq__container">
      <Heading thisTextEn="faq" thisTextJa="ありうる質問" id="faq" class="faq__heading" />
      <Wrapper />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  padding: var(--background-color-margin-block) 0;
  background-color: var(--color-gray);
}
.faq__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('tab') {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  @include mixin.mq('pc') {
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
</style>
