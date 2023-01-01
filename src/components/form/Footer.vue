<script setup></script>

<template>
  <footer id="footer" class="footer">
    <small class="footer__copyright">© 2022 帝京平成大学 チアダンス部 Blue Topaz</small>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  background-color: var(--color-main);
  position: relative;
  z-index: 2;
}
.footer__copyright {
  display: block;
  width: 100%;
  @include mixin.text(12px, 1, center);
  color: var(--color-white);
}
</style>
