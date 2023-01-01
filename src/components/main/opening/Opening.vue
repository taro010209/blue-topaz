<script setup></script>

<template>
  <section class="opening">
    <h1 class="opening__heading">
      <span class="opening__lead">Let's enjoy</span>
      <span class="opening__lead">1 2 3 Go</span>
    </h1>
  </section>
</template>

<style lang="scss" scoped>
.opening {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-main);
  transform-origin: top;
  position: fixed;
  top: 0;
  z-index: 30;
}
.opening__heading {
  color: var(--color-white);
  font-family: var(--font-family-en);
  @include mixin.text(calc(100vw / 6), 1.2, center);
  @include mixin.mq('tab') {
    font-size: 100px;
  }
}
.opening__lead {
  display: block;
}
</style>
<style lang="scss">
.opening__lead_each {
  display: inline-block;
}
</style>
