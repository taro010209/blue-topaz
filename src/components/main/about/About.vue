<script setup></script>

<template>
  <section class="about">
    <div class="about__container">
      <h2 id="about" class="about__heading">
        <span class="about__heading_text">チアと</span>
        <span class="about__heading_text">青春と</span>
        <span class="about__heading_text">部員募集</span>
      </h2>
      <p class="about__lead">
        Blue Topazは2018年に創部したチアダンス部です。<br /><br />
        オープンキャンパスや学園祭での発表のほか、大学スポーツチームの応援や大会出場など幅広く活動しています。<br /><br />
        そんなわけで、部員大募集中です。<br />
        きっかけはなんでもよし！<br />私たちと一緒にチアで大学を盛り上げましょう！
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  padding: var(--section-margin-block) 0;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.7);
}
.about__container {
  margin: 0 var(--section-margin-inline);
  @include mixin.mq('pc') {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    max-width: var(--section-width);
    margin: 0 auto;
  }
}
.about__heading {
  @include mixin.text(30px, 1.6);
  color: var(--color-main);
}
.about__heading_text {
  display: block;
}
.about__lead {
  @include mixin.text();
  margin-top: 30px;
  @include mixin.mq('pc') {
    width: 600px;
    margin-top: 0;
  }
}
</style>
