<script setup>
import Header from '@/components/form/Header.vue';
import Footer from '@/components/form/Footer.vue';
// アニメ
import observer from '@/components/parts/observer.js';
import { onMounted } from 'vue';
import anime from 'animejs';

const speechBubbleAnime = (entry) => {
  anime({
    targets: entry,
    opacity: [0, 1],
    scale: [0.2, 1],
    rotate: '10deg',
    duration: 1000,
  });
};
const generalImgShow = (entry) => {
  entry.classList.add('js_show');
};
onMounted(() => {
  // OP
  (() => {
    const textWrapper = document.querySelectorAll('.opening__lead');
    textWrapper.forEach((element) => {
      element.innerHTML = element.textContent.replace(/\S/g, "<span class='opening__lead_each'>$&</span>");
    });
    anime
      .timeline()
      // .timeline({ loop: true })
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
          // opacity: [0, 1],
          // translateY: ['0.5em', 0],
          // easing: 'easeOutExpo',
          // duration: 600,
          // offset: '-=600',
          // duration: 1000,
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
  })();
  observer.multipleObserver(speechBubbleAnime, '[data-anime="speechBubble"]');
  observer.multipleObserver(generalImgShow, '[data-anime="classAssignment"]');
});
</script>

<template>
  <Header />
  <slot name="main"></slot>
  <Footer />
</template>

<style lang="scss"></style>
