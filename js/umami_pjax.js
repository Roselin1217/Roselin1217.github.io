document.addEventListener('pjax:complete', function () {
  if (typeof umami === 'object') {
    umami.track(); 
  }
});
