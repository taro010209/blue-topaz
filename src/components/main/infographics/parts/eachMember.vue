<script setup>
import infographicsEach from '@/components/main/infographics/parts/infographicsEach.vue'
import generalSVGUse from '@/components/parts/generalSVGUse.vue'
import observer from '@/components/parts/observer.js'
import { onMounted } from 'vue'
import anime from 'animejs'

const animeFunc = (entry) => {
  anime
    .timeline()
    .add({
      targets: '[data-anime="infographicsMember"] .infographics_wrapper__number',
      innerHTML: [0, 6],
      easing: 'linear',
      duration: 600,
      round: 1,
    })
    .add(
      {
        targets: '[data-anime="infographicsMember"] .megaphone_wrapper__each',
        opacity: [0, 1],
        scale: [0.2, 1],
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      },
      '-=600'
    )
}
onMounted(() => {
  observer.singleObserver(animeFunc, '[data-anime="infographicsMember"]')
})
</script>

<template>
  <infographicsEach>
    <template #heading>部員数</template>
    <template #inner>
      <dd class="infographics_wrapper__inner">
        <p class="infographics_wrapper__member">
          <span class="infographics_wrapper__number"> </span>
          <span class="infographics_wrapper__people">人</span>
        </p>
        <div class="megaphone_wrapper">
          <p v-for="(image, index) in 6" :key="index" class="megaphone_wrapper__each">
            <generalSVGUse svgHref="./assets/img/icon_megaphone.svg#icon_megaphone" />
          </p>
        </div>
      </dd>
    </template>
  </infographicsEach>
</template>

<style lang="scss" scoped>
.infographics_wrapper__inner {
  padding-top: 56px;
}
.infographics_wrapper__member {
  text-align: center;
}
.infographics_wrapper__number {
  font-family: var(--font-family-en);
  font-weight: 700;
  @include mixin.text(140px, 1);
  color: var(--color-accent);
}
.infographics_wrapper__people {
  color: var(--color-main);
}
.megaphone_wrapper {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 22px;
  justify-content: center;
}
.megaphone_wrapper__each {
  width: 30px;
  height: 27px;
}
svg {
  width: 100%;
  height: 100%;
}
</style>
