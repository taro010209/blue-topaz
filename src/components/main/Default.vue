<script setup>
import { onMounted } from 'vue';
import anime from 'animejs';
import observer from '@/components/parts/observer.js';
import Master from '@/components/form/Master.vue';
import Opening from '@/components/main/opening/Opening.vue';
import FirstView from '@/components/main/firstview/FirstView.vue';
import About from '@/components/main/about/About.vue';
import Infographics from '@/components/main/infographics/Infographics.vue';
import Activity from '@/components/main/activity/Activity.vue';
import Faq from '@/components/main/faq/Faq.vue';
import Join from '@/components/main/join/Join.vue';
import Gallery from '@/components/main/gallery/Gallery.vue';

const openingAnimation = () => {
  const textWrapper = document.querySelectorAll('.opening__lead');
  textWrapper.forEach((element) => {
    element.innerHTML = element.textContent.replace(/\S/g, "<span class='opening__lead_each'>$&</span>");
  });
  anime
    .timeline()
    .add({
      targets: '.opening__lead:first-of-type .opening__lead_each',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 600,
      delay: (el, i) => 70 * (i + 1),
    })
    .add({
      targets: '.opening__lead:last-of-type .opening__lead_each',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 600,
      delay: (el, i) => 70 * (i + 1),
    })
    .add({
      targets: '.opening',
      easing: 'easeInOutExpo',
      translateY: [0, '-100vh'],
      duration: 1100,
    })
    .add(
      {
        targets: '.firstview__img',
        opacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 800,
      },
      '-=700'
    )
    .add(
      {
        targets: '.firstview__heading',
        opacity: [0, 1],
        scale: [0.2, 1],
      },
      '-=200'
    )
    .add(
      {
        targets: '.header',
        easing: 'easeOutQuad',
        translateY: ['-120', 0],
        duration: 400,
      },
      '-=200'
    );
};
const speechBubbleAnimeFunc = (entry) => {
  anime({
    targets: entry,
    opacity: [0, 1],
    scale: [0.2, 1],
    rotate: '10deg',
    duration: 1000,
  });
};
const generalImgShowAnimeFunc = (entry) => {
  entry.classList.add('js_show');
};
onMounted(() => {
  openingAnimation();
  observer.multipleObserver(speechBubbleAnimeFunc, '[data-anime="speechBubble"]');
  observer.multipleObserver(generalImgShowAnimeFunc, '[data-anime="classAssignment"]');
});
</script>

<template>
  <Master>
    <template #main>
      <main id="main" class="main">
        <Opening />
        <FirstView />
        <div class="section_mount">
          <About />
          <Infographics />
          <Activity />
          <Faq />
          <Join />
          <Gallery />
          <section class="note">
            <div class="note__container">
              <small class="note__lead">*サイトの情報は全て2022年度のものです。</small>
            </div>
          </section>
        </div>
      </main>
    </template>
  </Master>
</template>

<style lang="scss" scoped>
main.main {
  position: relative;
  @include mixin.mq('tab') {
    padding-top: 120px;
  }
}
.section_mount {
  position: relative;
  z-index: 2;
}
.note {
  padding: var(--section-margin-block) 0 20px;
  background-color: var(--color-white);
}
.note__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('pc') {
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
.note__lead {
  @include mixin.text(12px);
}
</style>
