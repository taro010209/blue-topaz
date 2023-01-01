<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';

const images = [
  ['./assets/img/training01.webp', '練習するBlue Topaz'],
  ['./assets/img/training02.webp', '練習するBlue Topaz'],
  ['./assets/img/training03.webp', '練習するBlue Topaz'],
  ['./assets/img/training04.webp', '練習するBlue Topaz（クリスマス）'],
];
</script>

<template>
  <div class="scene_wrapper" data-anime="classAssignment">
    <swiper
      :modules="[Autoplay, EffectFade]"
      :allowTouchMove="false"
      :speed="2000"
      :loop="true"
      :loopAdditionalSlides="1"
      :autoplay="{
        delay: 5000,
        waitForTransition: false,
      }"
      :effect="'fade'"
      :effectFade="{
        crossFade: true,
      }"
      class="scene_wrapper__img"
    >
      <SwiperSlide v-for="(image, index) in images" :key="`slide-${index}`">
        <img :src="image[0]" :alt="image[1]" width="960" height="540" loading="lazy" decoding="async" />
      </SwiperSlide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.scene_wrapper {
  margin-top: 30px;
  overflow: hidden;
  border-radius: var(--border-radius);
  @include mixin.mq('tab') {
    margin-top: 0;
  }
}
.scene_wrapper.js_show .scene_wrapper__img {
  opacity: 1;
}
.scene_wrapper__img {
  border-radius: var(--border-radius);
  opacity: 0;
  transition: opacity 0.8s ease-out;
}
</style>
