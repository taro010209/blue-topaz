const viewportRewriting = () => {
  const viewport = document.querySelector('meta[name="viewport"]');
  const value = window.outerWidth > 372 ? 'width=device-width,initial-scale=1' : 'width=372';
  if (viewport.getAttribute('content') !== value) {
    viewport.setAttribute('content', value);
  }
};
addEventListener('resize', viewportRewriting, false);
viewportRewriting();
