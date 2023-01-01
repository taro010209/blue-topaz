const options = {
  rootMargin: '0px 0px -20% 0px',
};

const singleObserver = (animeFunc, target) => {
  const callback = (entry, observer) => {
    if (entry[0].isIntersecting) {
      animeFunc(entry[0].target);
      observer.unobserve(entry[0].target);
    }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector(target));
};

const multipleObserver = (animeFunc, targets) => {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animeFunc(entry.target);
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  document.querySelectorAll(targets).forEach((target) => {
    observer.observe(target);
  });
};

export default { singleObserver, multipleObserver };
