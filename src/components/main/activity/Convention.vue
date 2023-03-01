<script setup>
import subHeading from '@/components/main/activity/parts/subHeading.vue';
import conventionEach from '@/components/main/activity/parts/conventionEach.vue';
</script>

<template>
  <section class="convention">
    <div class="convention__container">
      <div class="heading_wrapper">
        <span class="heading_wrapper__speech_bubble" data-anime="speechBubble">2022年度初出場！</span>
        <subHeading thisTextEn="convention" thisTextJa="出場大会" class="heading" />
      </div>
      <div class="convention_wrapper">
        <conventionEach summaryData="october 29" summaryName="ALL JAPAN CHEER DANCE CHAMPIONSHIP 2022 関東予選大会 Cheer Dance部門 大学生編成" />
        <conventionEach summaryData="february 8" summaryName="USA Regionals 2023 東京大会 School&College Dance 大学編成 Pom部門 Small出場" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.convention {
  margin-top: 80px;
  @include mixin.mq('tab') {
    margin-top: 100px;
  }
}
.convention_wrapper {
  margin-top: 30px;
}
.heading_wrapper {
  width: fit-content;
  padding-top: 24px;
  position: relative;
  @include mixin.mq('tab') {
    padding-top: 20px;
  }
}
.heading_wrapper__speech_bubble {
  @include mixin.speechBubble();
  @include mixin.mq('tab') {
    right: -80px;
  }
}
</style>
