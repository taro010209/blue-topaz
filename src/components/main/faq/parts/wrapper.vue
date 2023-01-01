<script setup>
import Each from '@/components/main/faq/parts/each.vue';
import { onMounted } from 'vue';

const setUpAccordion = () => {
  const ANIMATION_TIME = 250;
  const OFFSET_TIME = 5;
  const details = document.querySelectorAll('.faq_wrapper__each');
  details.forEach((element) => {
    const summary = element.querySelector('.faq_wrapper__summary');
    const content = element.querySelector('.faq_wrapper__answer');

    summary.addEventListener('click', (e) => {
      // すぐに open 属性が切り替わらないようにする
      e.preventDefault();

      // タイトル部分の高さを取得。（ブラウザ幅が変更されて高さが変わった場合などにも対応できるようにクリックイベントの中で高さを毎回取得）
      const summaryHeight = summary.offsetHeight;

      // 閉じる時の高さ = タイトル部分の高さ
      element.style.setProperty('--details-close', `${summaryHeight}px`);

      // オープン / クローズ 処理
      if (!element.open) {
        // open属性を最初にセット
        element.open = true;

        // ※ コンテンツの高さはopenを付けたあとで取得しないと iOSで０になる
        element.style.setProperty('--details-open', `${summaryHeight + content.offsetHeight}px`);

        // open付与から少しだけ遅らせた方が動作が安定する
        setTimeout(() => {
          element.classList.add('js_open'); // クラスの追加
        }, OFFSET_TIME);
      } else if (element.open) {
        // 初期状態で開いているアコーディオンもアニメーションするように、閉じるときにもセット
        element.style.setProperty('--details-open', `${summaryHeight + content.offsetHeight}px`);

        setTimeout(() => {
          element.classList.remove('js_open'); // クラスを削除
        }, OFFSET_TIME);

        // アニメーション完了後にopen属性を削除。（CSS側のアニメーション時間+少しだけ余裕をもたせている）
        setTimeout(() => {
          element.open = false;
        }, ANIMATION_TIME + OFFSET_TIME);
      }
    });

    // details 'toggle' イベント
    element.addEventListener('toggle', () => {
      // js_open クラスを持つかどうか
      const hasOpenedClass = element.classList.contains('js_open');

      if (element.open && !hasOpenedClass) {
        // open はセットされたのに js_open クラスがついてない時
        element.classList.add('js_open');
      } else if (!element.open && hasOpenedClass) {
        // open は削除されたのに js_open クラスがまだついている時
        element.classList.remove('js_open');
      }
    });
  });
};

onMounted(() => {
  setUpAccordion();
});
</script>

<template>
  <div class="faq_wrapper">
    <Each>
      <template #summary_heading>平日の活動日はどのように決めますか？</template>
      <template #answer_heading>メンバーが集まれる日に決めています！</template>
      <template #answer_detail>
        日程調整ツールを使っています！<br />
        参加できなかった場合は次の活動日で補填します！
      </template>
    </Each>
    <Each>
      <template #summary_heading>体験入部はありますか？</template>
      <template #answer_heading>あります！</template>
      <template #answer_detail>
        体験入部に参加したあと本入部になります！<br />
        興味があればぜひご連絡ください！
      </template>
    </Each>
    <Each>
      <template #summary_heading>初心者でも大丈夫ですか？</template>
      <template #answer_heading>大丈夫です！</template>
      <template #answer_detail>
        メンバーのほとんどが未経験で入部しました！<br />
        最初は簡単な練習から始めるので少しずつ覚えていけます！
      </template>
    </Each>
    <Each>
      <template #summary_heading>勉強やアルバイトと並立できますか？</template>
      <template #answer_heading>できます！</template>
      <template #answer_detail>
        練習は通常週3回で、1日1~2コマの間で活動するので、無理なく予定を組めます！<br />
        難しい場合はご相談ください！
      </template>
    </Each>
    <Each>
      <template #summary_heading>男子も入部できますか？</template>
      <template #answer_heading>できます！</template>
      <template #answer_detail>
        男女問わず入部可能です！<br />
        今まで男子部員はいなかったのでぜひ前例を作ってください！
      </template>
    </Each>
    <Each>
      <template #summary_heading>途中入部はできますか？</template>
      <template #answer_heading>できます！</template>
      <template #answer_detail>
        学年問わず入部歓迎です！<br />
        一緒に大学生活の思い出を一つ増やしましょう！
      </template>
    </Each>
  </div>
</template>

<style lang="scss" scoped>
.faq_wrapper {
  margin-top: 30px;
  @include mixin.mq('tab') {
    width: 488px;
    margin-top: 0;
  }
  @include mixin.mq('pc') {
    width: 720px;
  }
}
</style>
