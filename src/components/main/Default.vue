<script setup>
import Master from '@/components/form/Master.vue';
import Opening from '@/components/main/opening/Opening.vue';
import FirstView from '@/components/main/firstview/FirstView.vue';
import About from '@/components/main/about/About.vue';
import Infographics from '@/components/main/infographics/Infographics.vue';
import Activity from '@/components/main/activity/Activity.vue';
import Faq from '@/components/main/faq/Faq.vue';
import Join from '@/components/main/join/Join.vue';
import Gallery from '@/components/main/gallery/Gallery.vue';
</script>

<template>
  <Master>
    <template #main>
      <main id="main" class="main">
        <Opening />
        <FirstView />
        <div class="section_mount">
          <About />
          <Infographics />
          <Activity />
          <Faq />
          <Join />
          <Gallery />
          <section class="note">
            <div class="note__container">
              <small class="note__lead">*サイトの情報は全て2022年度のものです。</small>
            </div>
          </section>
        </div>
      </main>
    </template>
  </Master>
</template>

<style lang="scss" scoped>
main.main {
  position: relative;
  @include mixin.mq('tab') {
    padding-top: 120px;
  }
}
.section_mount {
  position: relative;
  z-index: 2;
}
.note {
  padding: var(--section-margin-block) 0 20px;
  background-color: var(--color-white);
}
.note__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('pc') {
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
.note__lead {
  @include mixin.text(12px);
}
</style>
