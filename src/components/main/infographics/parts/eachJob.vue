<script setup>
import infographicsEach from '@/components/main/infographics/parts/infographicsEach.vue';
import observer from '@/components/parts/observer.js';
import { onMounted } from 'vue';
import anime from 'animejs';

const animeFunc = (entry) => {
  anime({
    targets: '[data-anime="infographicsJob"] .infographics_wrapper__answer_text span',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 400,
    delay: (el, i) => 200 * (i + 1),
  });
};
onMounted(() => {
  observer.singleObserver(animeFunc, '[data-anime="infographicsJob"]');
});
</script>

<template>
  <infographicsEach>
    <template #heading>アルバイト</template>
    <template #inner>
      <dd class="infographics_wrapper__inner infographics_wrapper__inner--text">
        <p class="infographics_wrapper__answer_text">全員<br />してる</p>
        <small class="infographics_wrapper__note">※支障なし！</small>
      </dd>
    </template>
  </infographicsEach>
</template>

<style lang="scss" scoped>
// .infographics_wrapper__inner {
//   background-image: url(/assets/img/icon_yen.svg);
//   background-size: 64%;
//   background-position-y: 72px;
// }
</style>
