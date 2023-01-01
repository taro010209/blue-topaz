<script setup>
import infographicsEach from '@/components/main/infographics/parts/infographicsEach.vue';
import observer from '@/components/parts/observer.js';
import { onMounted } from 'vue';
import anime from 'animejs';

const animeFunc = (entry) => {
  anime({
    targets: '[data-anime="infographicsDepartment"] .infographics_wrapper__number',
    opacity: [0, 1],
    scale: [0.2, 1],
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  });
};
onMounted(() => {
  observer.multipleObserver(animeFunc, '[data-anime="infographicsDepartment"]');
});
</script>

<template>
  <infographicsEach>
    <template #heading>学科</template>
    <template #inner>
      <dd class="infographics_wrapper__inner">
        <p class="infographics_wrapper__text">
          <span class="infographics_wrapper__department">薬学科</span>
          <span class="infographics_wrapper__number">2</span>
          <span class="infographics_wrapper__people">人</span>
        </p>
        <p class="infographics_wrapper__text">
          <span class="infographics_wrapper__department">経営学科</span>
          <span class="infographics_wrapper__number">1</span>
          <span class="infographics_wrapper__people">人</span>
        </p>
        <p class="infographics_wrapper__text">
          <span class="infographics_wrapper__department">児童学科</span>
          <span class="infographics_wrapper__number">1</span>
          <span class="infographics_wrapper__people">人</span>
        </p>
        <p class="infographics_wrapper__text">
          <span class="infographics_wrapper__department">観光経営学科</span>
          <span class="infographics_wrapper__number">1</span>
          <span class="infographics_wrapper__people">人</span>
        </p>
        <p class="infographics_wrapper__text">
          <span class="infographics_wrapper__department">人間文化学科</span>
          <span class="infographics_wrapper__number">1</span>
          <span class="infographics_wrapper__people">人</span>
        </p>
      </dd>
    </template>
  </infographicsEach>
</template>

<style lang="scss" scoped>
.infographics_wrapper__inner {
  padding: 64px 20px 20px 74px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.infographics_wrapper__text {
  display: flex;
  align-items: center;
  @include mixin.text(16px, 1);
  color: var(--color-main);
}
.infographics_wrapper__department,
.infographics_wrapper__number,
.infographics_wrapper__people {
  display: block;
}
.infographics_wrapper__department {
  margin-bottom: -4px;
  font-size: 20px;
}
.infographics_wrapper__number {
  margin-left: 4px;
  font-family: var(--font-family-en);
  font-weight: 700;
  font-size: 42px;
  color: var(--color-accent);
  opacity: 0;
}
.infographics_wrapper__people {
  margin-bottom: -8px;
}
</style>
