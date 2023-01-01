import { createApp } from 'vue';
import '/assets/scss/style.scss';
import Default from '/components/main/Default.vue';

createApp(Default).mount('#contents');

(() => {
  const switchViewport = () => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
    if (viewport.getAttribute('content') !== value) {
      viewport.setAttribute('content', value);
    }
  };
  addEventListener('resize', switchViewport, false);
  switchViewport();
})();
