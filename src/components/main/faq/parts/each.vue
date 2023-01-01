<script setup></script>

<template>
  <details class="faq_wrapper__each">
    <summary class="faq_wrapper__summary">
      <span class="faq_wrapper__summary_heading">Q. <slot name="summary_heading"></slot></span>
      <span class="faq_wrapper__summary_icon"></span>
    </summary>
    <div class="faq_wrapper__answer">
      <p class="faq_wrapper__answer_inner">
        <span class="faq_wrapper__answer_heading" name="answer_heading"> A. <slot name="answer_heading"></slot> </span>
        <span class="faq_wrapper__answer_detail" name="answer_detail">
          <slot name="answer_detail"></slot>
        </span>
      </p>
    </div>
  </details>
</template>

<style lang="scss" scoped>
.faq_wrapper__each {
  height: var(--details-close, auto);
  background-color: var(--color-sub);
  transition: height 0.4s ease;
  overflow: hidden;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
}
.faq_wrapper__each.js_open {
  height: var(--details-open, auto);
}
.faq_wrapper__each.js_open .faq_wrapper__summary {
  color: var(--color-accent);
}
.faq_wrapper__each.js_open .faq_wrapper__summary_icon::before,
.faq_wrapper__each.js_open .faq_wrapper__summary_icon::after {
  background-color: var(--color-accent);
}
.faq_wrapper__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @include mixin.text(18px, 1.6);
  transition: color 0.4s ease;
  pointer-events: all;
  cursor: pointer;
  &::-webkit-details-marker {
    display: none;
  }
  @media (any-hover: hover) {
    &:hover {
      color: var(--color-accent);
    }
  }
}
.faq_wrapper__summary_heading {
  flex-basis: 90%;
}
.faq_wrapper__summary_icon {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  position: relative;
  &::before,
  &::after {
    content: '';
    background-color: var(--color-black);
    position: absolute;
    transition: background-color, transform 0.4s ease;
  }
  &::before {
    width: 100%;
    height: 1px;
  }
  &::after {
    width: 1px;
    height: 100%;
  }
}
.faq_wrapper__each.js_open .faq_wrapper__summary_icon::after {
  transform: rotate(90deg);
}
.faq_wrapper__summary:hover {
  @media (any-hover: hover) {
    .faq_wrapper__summary_icon::before,
    .faq_wrapper__summary_icon::after {
      background-color: var(--color-accent);
    }
  }
}
.faq_wrapper__answer {
  background-color: var(--color-white);
}
.faq_wrapper__answer_inner {
  padding: 20px 22px;
  @include mixin.text();
}
.faq_wrapper__answer_detail {
  display: block;
  padding-left: 30px;
}
.faq_wrapper__answer_heading {
  display: block;
  @include mixin.text(18px);
}
.faq_wrapper__answer_detail {
  margin-top: 10px;
}
</style>
