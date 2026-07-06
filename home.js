 // Before/After slider — follows the mouse while hovering, resets on leave
  document.querySelectorAll('.ba-slider').forEach(function(slider){
    var afterWrap = slider.querySelector('.ba-after-wrap');
    var divider   = slider.querySelector('.ba-divider');
    var handle    = slider.querySelector('.ba-handle');
    var afterImg  = afterWrap.querySelector('img');
 
    function setSliderWidth(){
      // keep the "after" image the same rendered width as the container,
      // regardless of the wrap's current clipped width
      afterImg.style.width = slider.offsetWidth + 'px';
    }
    setSliderWidth();
    window.addEventListener('resize', setSliderWidth);
 
    function updatePosition(clientX){
      var rect = slider.getBoundingClientRect();
      var x = clientX - rect.left;
      var pct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      afterWrap.style.width = pct + '%';
      divider.style.left = pct + '%';
      handle.style.left = pct + '%';
    }
 
    slider.addEventListener('mousemove', function(e){
      updatePosition(e.clientX);
    });
 
    slider.addEventListener('mouseleave', function(){
      afterWrap.style.width = '50%';
      divider.style.left = '50%';
      handle.style.left = '50%';
    });
 
    // Touch support: drag to compare (hover doesn't exist on mobile)
    slider.addEventListener('touchmove', function(e){
      if (e.touches && e.touches[0]){
        updatePosition(e.touches[0].clientX);
      }
    }, { passive: true });
  });
