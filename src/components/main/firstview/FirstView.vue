<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import 'swiper/css';

const images = [
  ['./assets/img/firstview01', '野球部の試合を応援するBlue Topaz'],
  ['./assets/img/firstview02', '学園祭で発表するBlue Topaz'],
  ['./assets/img/firstview03', '躍動するBlue Topaz'],
];
</script>

<template>
  <section class="firstview">
    <div class="firstview__container">
      <h1 class="firstview__heading">
        <span>Blue</span>
        <span>Topaz!</span>
      </h1>
      <swiper
        :modules="[Autoplay, EffectFade]"
        :allowTouchMove="false"
        :speed="1000"
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
        class="firstview__img"
      >
        <SwiperSlide v-for="(image, index) in images" :key="`slide-${index}`">
          <picture>
            <source :srcset="`${image[0]}_pc.webp`" media="(min-width: 744px)" width="1450" height="828" />
            <img :src="`${image[0]}_sp.webp`" :alt="image[1]" width="390" height="844" decoding="async" />
          </picture>
        </SwiperSlide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.firstview {
  position: sticky;
  top: 0;
  overflow: hidden;
  @include mixin.mq('tab') {
    top: 120px;
  }
}
.firstview__container {
  display: grid;
  grid-template: 'content';
  place-items: center;
}
.firstview__heading {
  grid-area: content;
  font-family: var(--font-family-en);
  font-weight: 700;
  @include mixin.text(70px, 1, center);
  text-shadow: 0px 0px 4px rgb(255 255 255 / 40%);
  color: var(--color-white);
  position: relative;
  z-index: 2;
}
.firstview__heading span {
  display: block;
  @include mixin.mq('pc') {
    display: inline-block;
  }
}
// Swiper
.firstview__img {
  grid-area: content;
  width: 100%;
  height: 100vh;
  @include mixin.mq('tab') {
    width: 704px;
    height: 396px;
    border-radius: var(--border-radius);
  }
  @include mixin.mq('pc') {
    width: 100%;
    max-width: 1120px;
    height: 630px;
  }
}
.swiper-slide img {
  height: 100%;
  object-fit: cover;
  transition: 6s 1s linear;
  transform: scale(1.08);
}
.swiper-slide[class*='-active'] img {
  transition-delay: 0s;
  transform: scale(1);
}
</style>
