<script setup>
import Heading from '@/components/parts/generalHeading.vue';
import Event from '@/components/main/activity/Event.vue';
import Convention from '@/components/main/activity/Convention.vue';
import Training from '@/components/main/activity/Training.vue';
</script>

<template>
  <section class="activity">
    <div class="activity__container">
      <Heading thisTextEn="activity" thisTextJa="活動内容" id="activity" class="activity__heading" />
      <Event />
      <Convention />
      <Training />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.activity {
  padding: var(--section-margin-block) 0;
  background-color: var(--color-white);
}
.activity__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('pc') {
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
</style>
