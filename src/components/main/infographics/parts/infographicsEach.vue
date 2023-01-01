<script setup></script>

<template>
  <div class="infographics_wrapper__each">
    <dt class="infographics_wrapper__heading"><slot name="heading"></slot></dt>
    <slot name="inner"></slot>
  </div>
</template>

<style lang="scss" scoped>
.infographics_wrapper__each {
  width: 300px;
  height: 300px;
  border-radius: var(--border-radius);
  background-color: var(--color-sub);
  position: relative;
}
.infographics_wrapper__heading {
  width: 100%;
  padding: 14px 0;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  font-weight: 700;
  @include mixin.text(24px, 1, center);
  color: var(--color-main);
  background-color: var(--color-white);
  position: absolute;
}
</style>
<style lang="scss">
.infographics_wrapper__inner {
  height: 100%;
  padding: 82px 20px 20px;
  background-position: center 62px;
  background-size: 54%;
  background-repeat: no-repeat;
}
.infographics_wrapper__inner--text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.infographics_wrapper__answer_text {
  font-weight: 700;
  @include mixin.text(70px, 1.1, center);
  color: var(--color-accent);
}
.infographics_wrapper__answer_text span {
  opacity: 0;
  display: inline-block;
}
.infographics_wrapper__note {
  display: block;
  text-align: right;
}
</style>
