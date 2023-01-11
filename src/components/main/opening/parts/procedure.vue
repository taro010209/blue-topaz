<script setup></script>

<template>
  <dl class="procedure_wrapper">
    <div class="procedure_wrapper__each">
      <dt class="procedure_wrapper____term"><span class="procedure_wrapper____term_number">1</span><span class="procedure_wrapper____term_text">SNSで体験入部の申し込み</span></dt>
      <dd class="procedure_wrapper______description">
        Blue TopazのInstagram、またはTwitterの<strong>ダイレクトメール</strong>で受け付けています！<br />入部希望の旨に<strong>下記項目</strong>を添えてご連絡ください！
      </dd>
      <dd class="procedure_wrapper______description--item">
        <span>
          ・学部、学科、コース<br />
          ・学籍番号<br />
          ・名前
        </span>
      </dd>
    </div>
    <div class="procedure_wrapper__each">
      <dt class="procedure_wrapper____term"><span class="procedure_wrapper____term_number">2</span><span class="procedure_wrapper____term_text">体験入部に参加する</span></dt>
      <dd class="procedure_wrapper______description">日程は顧問の先生やメンバーのスケジュール調整後にお伝えします！<br />内容はストレッチや基本動作のレクチャー、ダンス練習などを予定しています！</dd>
    </div>
    <div class="procedure_wrapper__each">
      <dt class="procedure_wrapper____term"><span class="procedure_wrapper____term_number">3</span><span class="procedure_wrapper____term_text">入部！</span></dt>
      <dd class="procedure_wrapper______description">あっぱれ！</dd>
    </div>
  </dl>
</template>

<style lang="scss" scoped>
.procedure_wrapper {
  margin-top: 30px;
  @include mixin.mq('pc') {
    width: 800px;
    margin: 30px auto 0;
  }
}
.procedure_wrapper__each {
  &:not(:first-of-type) {
    margin-top: 40px;
  }
}
.procedure_wrapper____term {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid;
  border-bottom-left-radius: var(--border-radius);
  font-weight: 700;
  @include mixin.text(20px, 1.6);
  color: var(--color-main);
  position: relative;
}
.procedure_wrapper____term_number {
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius);
  color: var(--color-white);
  background-color: var(--color-main);
  font-family: var(--font-family-en);
  font-size: 30px;
  line-height: 1;
  position: absolute;
}
.procedure_wrapper____term_text {
  margin-left: 64px;
}
.procedure_wrapper______description {
  margin-top: 10px;
  @include mixin.text();
  @include mixin.mq('tab') {
    margin-left: 64px;
  }
}
.procedure_wrapper______description strong {
  text-decoration-line: underline;
  text-underline-offset: 2px;
  color: var(--color-main);
}
.procedure_wrapper______description--item {
  display: grid;
  place-content: center;
  margin-top: 10px;
  padding: 10px 0;
  border-radius: var(--border-radius);
  font-weight: 700;
  @include mixin.text();
  color: var(--color-white);
  background-color: var(--color-main);
  @include mixin.mq('tab') {
    width: 100%;
    padding: 20px 0px;
  }
}
</style>
