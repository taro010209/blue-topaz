<script setup>
import subHeading from '@/components/main/activity/parts/subHeading.vue';
import Img from '@/components/main/activity/parts/trainingImg.vue';
import Summary from '@/components/main/activity/parts/trainingSummary.vue';
</script>

<template>
  <section class="training">
    <div class="training__container">
      <subHeading thisTextEn="training" thisTextJa="練習" class="training__heading" />
      <Img />
      <Summary />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.training {
  margin-top: 80px;
  @include mixin.mq('tab') {
    margin-top: 100px;
  }
  @include mixin.mq('pc') {
    margin-top: 120px;
  }
}
.training__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('tab') {
    display: grid;
    grid-template:
      'heading img' auto
      'summary summary' auto /
      auto 50%;
  }
  @include mixin.mq('pc') {
    grid-template:
      'heading summary' auto
      'img summary' auto /
      448px 510px;
    gap: 0 30px;
  }
  @include mixin.mq('pc') {
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
.training__heading {
  display: flex;
  align-items: center;
  span:last-of-type {
    margin-top: 0;
  }
  @include mixin.mq('tab') {
    grid-area: heading;
    flex-direction: column;
    align-items: flex-start;
  }
}
.scene_wrapper {
  @include mixin.mq('tab') {
    grid-area: img;
    align-self: end;
  }
  @include mixin.mq('pc') {
    align-self: center;
  }
}
.summary_wrapper {
  @include mixin.mq('tab') {
    grid-area: summary;
    width: 100%;
  }
}
</style>
