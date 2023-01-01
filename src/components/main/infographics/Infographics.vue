<script setup>
import Heading from '@/components/parts/generalHeading.vue';
import eachMember from '@/components/main/infographics/parts/eachMember.vue';
import eachGenderRatio from '@/components/main/infographics/parts/eachGenderRatio.vue';
import eachGrade from '@/components/main/infographics/parts/eachGrade.vue';
import eachDepartment from '@/components/main/infographics/parts/eachDepartment.vue';
import eachCampus from '@/components/main/infographics/parts/eachCampus.vue';
import eachJob from '@/components/main/infographics/parts/eachJob.vue';
import { onMounted } from 'vue';

onMounted(() => {
  // 全員●●系のテキストを一文字ずつspanに挿入
  (() => {
    const target = document.querySelectorAll('.infographics_wrapper__answer_text');
    target.forEach((element) => {
      const nodes = [...element.childNodes];

      let spanWrapText = '';

      nodes.forEach((node) => {
        if (node.nodeType == 3) {
          //テキストの場合
          const text = node.textContent.replace(/\r?\n/g, ''); //テキストから改行コード削除
          //spanで囲んで連結
          spanWrapText =
            spanWrapText +
            text.split('').reduce((acc, v) => {
              return acc + `<span>${v}</span>`;
            }, '');
        } else {
          //テキスト以外
          //<br>などテキスト以外の要素をそのまま連結
          spanWrapText = spanWrapText + node.outerHTML;
        }
      });

      element.innerHTML = spanWrapText;
    });
  })();
});
</script>

<template>
  <section class="infographics">
    <div class="infographics__container">
      <Heading thisTextEn="infographics" thisTextJa="メンバーについて" id="infographics" class="infographics__heading" />
      <dl class="infographics_wrapper">
        <eachMember data-anime="infographicsMember" />
        <eachGenderRatio data-anime="infographicsGenderRatio" />
        <eachGrade data-anime="infographicsGrade" />
        <eachDepartment data-anime="infographicsDepartment" />
        <eachCampus data-anime="infographicsCampus" />
        <eachJob data-anime="infographicsJob" />
      </dl>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.infographics {
  padding: var(--background-color-margin-block) 0;
  background-color: var(--color-main);
}
.infographics__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('pc') {
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
.infographics__heading {
  color: var(--color-white);
}
.infographics_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
  @include mixin.mq('tab') {
    gap: 30px;
  }
}
</style>
