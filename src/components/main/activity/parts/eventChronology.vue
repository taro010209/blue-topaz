<script setup>
import { onMounted } from 'vue';

const contents = [
  {
    month: 'may',
    alt: '硬式野球部のPRの一環でチラシ配りをするBlue Topaz',
    body: {
      detail: `硬式野球部のPR`,
    },
  },
  {
    month: 'june',
    alt: '硬式野球部の試合を応援するBlue Topaz',
    body: {
      detail: `硬式野球部の応援
      （3部昇格リーグ）`,
    },
  },
  {
    month: 'july',
    alt: 'クリアソン新宿で開催された試合のハーフタイムショーに出演するBlue Topaz',
    body: {
      detail: `クリアソン新宿のハーフタイムショー`,
    },
  },
  {
    month: 'august',
    alt: 'オープンキャンパス後のBlue Topaz',
    body: {
      detail: `オープンキャンパス
      （中野キャンパス）`,
    },
  },
  {
    month: 'september',
    alt: 'オープンキャンパス後のBlue Topaz',
    body: {
      detail: `オープンキャンパス
      （池袋キャンパス）`,
    },
  },
  {
    month: 'october',
    alt: '10月の活動',
    body: {
      detail_01: `国立競技場のハーフタイムショー`,
      detail_02: `JCDA予選大会`,
    },
  },
  {
    month: 'november',
    alt: '硬式野球部の試合を応援するBlue Topaz',
    body: {
      detail: `硬式野球部の応援
      （2部昇格リーグ）`,
    },
  },
  {
    month: 'february',
    alt: 'USA予選大会に向けて練習するBlue Topaz',
    body: {
      detail: `USA予選大会`,
    },
  },
];

onMounted(() => {
  const chronologyWrapperImg = document.querySelectorAll('.chronology_wrapper__img');
  const mediaQueryTablet = window.matchMedia('(min-width: 744px)').matches;
  const mediaQueryPc = window.matchMedia('(min-width: 1100px)').matches;
  let targetNumber;
  if (mediaQueryPc) {
    targetNumber = 4;
  } else if (mediaQueryTablet) {
    targetNumber = 3;
  } else {
    targetNumber = 2;
  }
  for (let i = 0; i < targetNumber; i++) {
    chronologyWrapperImg[i].style.transitionDelay = `${i * 0.2}s`;
  }
});
</script>

<template>
  <div class="chronology_wrapper">
    <div class="chronology_wrapper__line" data-anime="classAssignment"></div>
    <ol class="chronology_wrapper__inner">
      <li v-for="(content, index) in contents" :key="index" class="chronology_wrapper__each" data-anime="classAssignment">
        <h4 class="chronology_wrapper__month">{{ content.month }}</h4>
        <div class="chronology_wrapper__body">
          <div v-for="(detail, key, index) in content.body" :key="index" class="chronology_wrapper__body_inner">
            <p class="chronology_wrapper__img" data-anime="classAssignment">
              <img v-if="key == 'detail'" :src="`./assets/img/event_${content.month}.webp`" :alt="content.alt" width="400" height="400" loading="lazy" decoding="async" />
              <img v-else :src="`./assets/img/event_${content.month}${('00' + (index + 1)).slice(-2)}.webp`" :alt="detail" width="400" height="400" loading="lazy" decoding="async" />
            </p>
            <p class="chronology_wrapper__detail">{{ detail }}</p>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.chronology_wrapper {
  margin-top: 30px;
  position: relative;
}
.chronology_wrapper__line {
  width: 0;
  height: 1px;
  background-color: var(--color-main);
  position: absolute;
  top: 48.5px;
  left: 0;
  transition: width 1s linear;
}
.chronology_wrapper__line.js_show {
  width: 100%;
}
.chronology_wrapper__inner {
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 20px;
  overflow-x: scroll;
  // scroll-snap-type: x proximity;
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-gray);
  }
}
.chronology_wrapper__each {
  scroll-snap-align: center;
  &:not(:first-of-type) {
    margin-left: 80px;
    @include mixin.mq('pc') {
      margin-left: 120px;
    }
  }
}
.chronology_wrapper__month {
  padding-bottom: 18px;
  font-family: var(--font-family-en);
  font-weight: 700;
  @include mixin.text(36px, 1);
  text-transform: capitalize;
  color: var(--color-main);
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: var(--color-main);
    border-radius: var(--border-radius);
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.chronology_wrapper__body {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}
.chronology_wrapper__body_inner {
  width: 200px;
  &:nth-child(n + 2) {
    margin-left: 30px;
  }
}
.chronology_wrapper__img {
  opacity: 0;
  transition: opacity 0.8s ease;
  height: 200px;
}
.chronology_wrapper__img.js_show {
  opacity: 1;
}
.chronology_wrapper__img img {
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
}
.chronology_wrapper__detail {
  margin-top: 10px;
  @include mixin.text();
  white-space: pre-line;
}
</style>
