<script setup>
import infographicsEach from '@/components/main/infographics/parts/infographicsEach.vue';
import observer from '@/components/parts/observer.js';
import { onMounted } from 'vue';
import anime from 'animejs';

const animeFunc = (entry) => {
  let leng;
  let paths = new Array();
  document.querySelectorAll('.infographics_wrapper__graph_body path').forEach((element, index) => {
    paths[index] = element;
    leng = paths[index].getTotalLength();
    paths[index].style.strokeDasharray = leng + ' ' + (leng + 1);
    paths[index].style.strokeDashoffset = 90;
  });

  anime
    .timeline()
    .add({
      targets: '.infographics_wrapper__graph_body path',
      strokeDashoffset: [0, leng],
      easing: 'easeOutQuad',
      duration: 1000,
      delay: 0,
    })
    .add({
      targets: '.infographics_wrapper__graph_first',
      opacity: [0, 1],
      scale: [0.2, 1],
      duration: 500,
    })
    .add(
      {
        targets: '.infographics_wrapper__graph_four',
        opacity: [0, 1],
        scale: [0.2, 1],
        duration: 500,
      },
      '-=300'
    );
};
onMounted(() => {
  observer.singleObserver(animeFunc, '[data-anime="infographicsGrade"]');
});
</script>

<template>
  <infographicsEach>
    <template #heading>学年</template>
    <template #inner>
      <dd class="infographics_wrapper__inner">
        <div class="infographics_wrapper__content">
          <div class="infographics_wrapper__graph">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="infographics_wrapper__graph_data">
              <path class="infographics_wrapper__graph_data--first" d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z" />
              <path class="infographics_wrapper__graph_data--four" d="M13.3974 50C22.1743 34.7981 34.7981 22.1743 50 13.3975C65.2019 4.62063 82.4463 6.06835e-06 100 0L100 100L13.3974 50Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="infographics_wrapper__graph_body">
              <path
                d="M100 -4.37114e-06C44.7715 -4.37114e-06 -2.41411e-06 44.7715 0 100C1.19763e-06 127.399 11.0187 152.223 28.8665 170.285C29.1695 170.592 29.4745 170.897 29.7814 171.199C47.8376 189.008 72.6352 200 100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 -4.37114e-06 100 -4.37114e-06Z"
              />
            </svg>
          </div>
          <p class="infographics_wrapper__graph_four">
            <span class="infographics_wrapper__graph_name">4年生</span>
            <span class="infographics_wrapper__graph_people"><span class="infographics_wrapper__graph_number">1</span>人</span>
          </p>
          <p class="infographics_wrapper__graph_first">
            <span class="infographics_wrapper__graph_name">1年生</span>
            <span class="infographics_wrapper__graph_people"><span class="infographics_wrapper__graph_number">5</span>人</span>
          </p>
        </div>
      </dd>
    </template>
  </infographicsEach>
</template>

<style lang="scss" scoped>
.infographics_wrapper__content {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
}
.infographics_wrapper__graph {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
}
.infographics_wrapper__graph svg {
  width: 100%;
  height: 100%;
  position: absolute;
}
.infographics_wrapper__graph_data--four {
  fill: var(--color-accent);
}
.infographics_wrapper__graph_data--first {
  fill: var(--color-main);
}
.infographics_wrapper__graph_body path {
  fill: none;
  stroke: var(--color-sub);
  stroke-width: 100%;
  stroke-dashoffset: 10;
  transform-origin: top;
}
.infographics_wrapper__graph_first {
  position: absolute;
  bottom: 24px;
  right: 40px;
}
.infographics_wrapper__graph_four {
  position: absolute;
  top: 20px;
  left: 42px;
}
.infographics_wrapper__graph_name,
.infographics_wrapper__graph_people {
  display: block;
  font-weight: 700;
  text-align: center;
  color: var(--color-white);
}
.infographics_wrapper__graph_four .infographics_wrapper__graph_name {
  @include mixin.text(18px, 1, center);
}
.infographics_wrapper__graph_first .infographics_wrapper__graph_name {
  @include mixin.text(26px, 1, center);
}
.infographics_wrapper__graph_number {
  font-weight: 700;
  @include mixin.text(38px, 1, center);
}
</style>
