<script setup></script>

<template>
  <dl class="summary_wrapper">
    <div class="summary_wrapper__each">
      <dt class="summary_wrapper__term">活動日と練習時間</dt>
      <dd class="summary_wrapper__description">
        週3日<span class="summary_wrapper__description--remark">（平日は曜日不定で2日活動します）</span><br />
        <span class="summary_wrapper__description--note">※大会前は週4~5日</span><br /><br />
        平日：6限（18:00~19:30）<br />
        土曜：1~2限（9:00~12:00）
      </dd>
    </div>
    <div class="summary_wrapper__each">
      <dt class="summary_wrapper__term">場所</dt>
      <dd class="summary_wrapper__description">アリーナ（5F体育館）、306教室</dd>
    </div>
    <div class="summary_wrapper__each">
      <dt class="summary_wrapper__term">内容</dt>
      <dd class="summary_wrapper__description">ストレッチ、筋トレ、ターン練習（ピルエット、フェッテなど）、ジャンプ練習（トータッチ、フライアウェイなど）、アイソレーション練習、持ち曲のダンス練習</dd>
    </div>
  </dl>
</template>

<style lang="scss" scoped>
.summary_wrapper {
  margin-top: 20px;
  @include mixin.mq('tab') {
    display: grid;
    grid-template:
      'date place' auto
      'detail detail' auto/auto;
    gap: 0 30px;
  }
  @include mixin.mq('pc') {
    display: block;
    margin-top: 0;
  }
}
.summary_wrapper__each {
  &:not(:first-of-type) {
    margin-top: 30px;
  }
  &:first-of-type {
    grid-area: date;
  }
  &:nth-of-type(2) {
    grid-area: place;
    @include mixin.mq('tab') {
      margin-top: 0;
    }
    @include mixin.mq('pc') {
      margin-top: 30px;
    }
  }
  &:last-of-type {
    grid-area: detail;
  }
}
.summary_wrapper__term {
  border-bottom: 1px solid var(--color-main);
  font-weight: 700;
  @include mixin.text(18px, 1.6);
  color: var(--color-main);
}
.summary_wrapper__description {
  margin-top: 10px;
  @include mixin.text(16px, 1.6);
}
.summary_wrapper__description--remark {
  display: inline-block;
}
.summary_wrapper__description--note {
  font-size: 12px;
}
</style>
