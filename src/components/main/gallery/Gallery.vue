<script setup>
const images = [
  {
    src: './assets/img/gallery01.webp',
    alt: '大会後に集うBlue Topazとその腕',
    width: '210',
    height: '280',
  },
  {
    src: './assets/img/gallery02.webp',
    alt: 'クリスマスに練習するBlue Topaz',
    width: '210',
    height: '280',
  },
  {
    src: './assets/img/gallery03.webp',
    alt: '硬式野球部の試合を背景に集うBlue Topaz',
    width: '420',
    height: '280',
  },
  {
    src: './assets/img/gallery04.webp',
    alt: 'PR後に集うBlue Topaz',
    width: '280',
    height: '280',
  },
  {
    src: './assets/img/gallery05.webp',
    alt: 'オープンキャンパス後に集うBlue Topaz',
    width: '210',
    height: '280',
  },
  {
    src: './assets/img/gallery06.webp',
    alt: '学園祭後に集うBlue Topaz',
    width: '280',
    height: '280',
  },
  {
    src: './assets/img/gallery07.webp',
    alt: 'ハーフタイムショー後に集うBlue Topaz',
    width: '420',
    height: '280',
  },
  {
    src: './assets/img/gallery08.webp',
    alt: '集いポージングするBlue Topaz',
    width: '210',
    height: '280',
  },
  {
    src: './assets/img/gallery09.webp',
    alt: '硬式野球部の応援後に集うBlue Topaz',
    width: '280',
    height: '280',
  },
  {
    src: './assets/img/gallery10.webp',
    alt: 'クリスマスに練習するBlue Topaz',
    width: '280',
    height: '280',
  },
  {
    src: './assets/img/gallery11.webp',
    alt: 'マスコットとポンポンとBlue Topaz',
    width: '210',
    height: '280',
  },
  {
    src: './assets/img/gallery12.webp',
    alt: '秋晴れとBlue Topaz',
    width: '420',
    height: '280',
  },
];
</script>

<template>
  <section class="gallery">
    <div class="gallery__container">
      <div class="gallery__wrapper">
        <ul v-for="value in 2" :key="index" class="gallery__inner">
          <li v-for="(image, index) in images.slice(0, 6)" :key="`slide-${index}`" class="gallery__img">
            <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" loading="lazy" decoding="async" />
          </li>
        </ul>
      </div>
      <div class="gallery__wrapper">
        <ul v-for="value in 2" :key="index" class="gallery__inner">
          <li v-for="(image, index) in images.slice(6)" :key="`slide-${index}`" class="gallery__img">
            <img :src="image.src" :alt="image.alt" :width="image.width" :height="image.height" loading="lazy" decoding="async" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  padding-top: var(--section-margin-block);
  background-color: var(--color-white);
}
.gallery__wrapper {
  display: flex;
  overflow: hidden;
  &:last-of-type {
    margin-top: 6px;
    @include mixin.mq('pc') {
      margin-top: 10px;
    }
  }
}
.gallery__inner {
  display: flex;
  height: calc(100vw / 2);
  animation-duration: 90s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: both;
  animation-play-state: running;
  @include mixin.mq('tab') {
    height: calc(100vw / 6);
  }
}
.gallery__wrapper:first-of-type .gallery__inner {
  animation-name: slideLeft;
}
.gallery__wrapper:last-of-type .gallery__inner {
  animation-name: slideRight;
}
.gallery__img {
  width: calc(100vw / 2);
  margin-left: 6px;
  @include mixin.mq('tab') {
    width: calc(100vw / 6);
  }
  @include mixin.mq('pc') {
    margin-left: 10px;
  }
}
.gallery__wrapper:first-of-type .gallery__img {
  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(5) {
    width: calc(100vw / 3.6);
    @include mixin.mq('tab') {
      width: calc(100vw / 8);
    }
  }
  &:nth-of-type(3) {
    width: calc(100vw / 1.4);
    @include mixin.mq('tab') {
      width: calc(100vw / 4);
    }
  }
}
.gallery__wrapper:last-of-type .gallery__img {
  &:nth-of-type(2),
  &:nth-of-type(5) {
    width: calc(100vw / 3.6);
    @include mixin.mq('tab') {
      width: calc(100vw / 8);
    }
  }
  &:nth-of-type(1),
  &:nth-of-type(6) {
    width: calc(100vw / 1.4);
    @include mixin.mq('tab') {
      width: calc(100vw / 4);
    }
  }
}
img {
  height: 100%;
  border-radius: var(--border-radius);
  object-fit: cover;
}

@keyframes slideLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes slideRight {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
