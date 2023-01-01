<script setup>
import Heading from '@/components/parts/generalHeading.vue';
import Procedure from '@/components/main/join/parts/procedure.vue';
import Link from '@/components/main/join/parts/link.vue';
</script>

<template>
  <section class="join">
    <div class="join__container">
      <div class="heading_wrapper">
        <span class="heading_wrapper__speech_bubble" data-anime="speechBubble">男子も歓迎！</span>
        <Heading thisTextEn="join" thisTextJa="入部方法" id="join" class="heading_wrapper__heading" />
      </div>
      <Procedure />
      <Link />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.join {
  padding-top: var(--section-margin-block);
  background-color: var(--color-white);
}
.join__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('pc') {
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
.heading_wrapper {
  width: fit-content;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
  @include mixin.mq('tab') {
    padding-top: 10px;
  }
}
.heading_wrapper__speech_bubble {
  @include mixin.speechBubble();
}
.heading_wrapper__heading {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
