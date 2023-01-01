<script setup>
import { onMounted } from 'vue';

const viewSectionObserver = () => {
  const targetsLink = document.querySelectorAll('#header .headeer__section_link a[href^="#"]');
  const viewSectionMarking = (entries) => {
    entries.forEach((entry) => {
      const viewSectionLink = document.querySelector(`#header .headeer__section_link a[href="#${entry.target.className}"]`);
      if (entry.isIntersecting) {
        viewSectionLink.classList.add('js_marking');
      } else {
        viewSectionLink.classList.remove('js_marking');
      }
    });
  };
  const options = {
    rootMargin: '-50% 0px',
  };

  targetsLink.forEach((targetLink) => {
    let sectionTargetHref = targetLink.getAttribute('href');
    let sectionTarget = document.querySelector(`.main .${sectionTargetHref.substring(1)}`);
    new IntersectionObserver(viewSectionMarking, options).observe(sectionTarget);
  });
};

const smoothScroll = () => {
  const mediaQuery = window.matchMedia('(min-width: 744px)').matches;
  const headerNavAnker = document.querySelectorAll('#header a[href^="#"]');
  const scrollMargin = mediaQuery ? 100 : 120;
  headerNavAnker.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      let destinationTargetHref = element.getAttribute('href');
      let destinationTarget = document.getElementById(destinationTargetHref.substring(1));
      const rect = destinationTarget.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const destinationPoint = rect + offset - scrollMargin;
      window.scrollTo({
        top: destinationPoint,
        behavior: 'smooth',
      });
    });
  });
};

const headerShowControl = () => {
  const header = document.getElementById('header');
  const headerHeight = header.offsetHeight;
  let viewportPosition = 0;
  let ticking = false;

  setTimeout(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            ticking = false;
            if (viewportPosition < document.documentElement.scrollTop) {
              header.style.top = `-${headerHeight + 10}px`;
            } else {
              header.style.top = '0';
            }
            viewportPosition = document.documentElement.scrollTop;

            // 対Safari
            // if (window.navigator.userAgent.toLowerCase().indexOf('safari') != -1 && window.pageYOffset <= 0) {
            //   header.style.top = '0';
            // }
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }, 1000);
};

onMounted(() => {
  smoothScroll();
  headerShowControl();
  viewSectionObserver();
});
</script>

<template>
  <header id="header" class="header">
    <nav class="headeer__container">
      <a href="#main" class="header__link header__link--bluetopaz">blue topaz</a>
      <div class="headeer__section_link">
        <a href="#about" class="header__link">about</a>
        <a href="#infographics" class="header__link">infographics</a>
        <a href="#activity" class="header__link">activity</a>
        <a href="#faq" class="header__link">faq</a>
        <a href="#join" class="header__link">join</a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding-top: 10px;
  background-color: var(--color-white);
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  transition: top 0.8s;
}
.headeer__container {
  @include mixin.mq('tab') {
    max-width: 1036px;
    margin: 0 auto;
  }
}
.headeer__section_link {
  display: flex;
  overflow-x: scroll;
  @media screen and (min-width: 589px) {
    justify-content: center;
    overflow-x: initial;
  }
}
.header__link {
  width: fit-content;
  padding: 14px 16px;
  font-family: var(--font-family-en);
  @include mixin.text(14px, 1, center);
  text-transform: capitalize;
  transition: color 0.4s ease;
  &:nth-child(n + 2) {
    margin-left: 20px;
  }
}
.header__link.js_marking {
  color: var(--color-main);
}
.headeer__section_link .header__link {
  @media (any-hover: hover) {
    &:hover {
      color: var(--color-accent);
    }
  }
}
.header__link--bluetopaz {
  width: fit-content;
  margin: 0 auto;
  font-weight: 700;
  font-size: 20px;
  color: var(--color-main);
  @include mixin.mq('tab') {
    font-size: 22px;
  }
}
</style>
