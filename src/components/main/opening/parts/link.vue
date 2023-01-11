<script setup>
import generalSVGUse from '@/components/parts/generalSVGUse.vue';
</script>

<template>
  <div class="link_wrapper">
    <div class="link_wrapper__each">
      <a href="https://www.instagram.com/thu_blue_topaz/" target="_blank" class="link_wrapper__anchor">
        Instagramから入部の申請をする！
        <generalSVGUse svgHref="./assets/img/icon_external_link.svg#icon_external_link" />
      </a>
      <p class="link_wrapper__note">Blue TopazのInstagramに移動します</p>
    </div>
    <div class="link_wrapper__each">
      <a href="https://twitter.com/thu_blue_topaz/" target="_blank" class="link_wrapper__anchor">
        Twitterから入部の申請をする！
        <generalSVGUse svgHref="./assets/img/icon_external_link.svg#icon_external_link" />
      </a>
      <p class="link_wrapper__note">Blue TopazのTwitterに移動します</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link_wrapper {
  margin-top: 50px;
  @include mixin.mq('tab') {
    width: 360px;
    margin: 50px auto 0;
  }
  @include mixin.mq('pc') {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
}
.link_wrapper__each {
  &:last-of-type {
    margin-top: 60px;
    @include mixin.mq('pc') {
      margin-top: 0;
    }
  }
}
.link_wrapper__anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  font-weight: 700;
  @include mixin.text();
  color: var(--color-white);
  background-color: var(--color-accent);
  transition: background-color 0.4s ease;
  @include mixin.mq('pc') {
    padding: 30px 60px;
  }
  @media (any-hover: hover) {
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
}
svg {
  width: 14px;
  height: 14px;
  margin-left: 4px;
}
.link_wrapper__note {
  margin-top: 10px;
  font-weight: 700;
  @include mixin.text(14px, 1.6, center);
  color: var(--color-accent);
}
</style>
