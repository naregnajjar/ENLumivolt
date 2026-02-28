$("#mySlider").owlCarousel({
      items: 4,
      loop: true,

      // nonstop autoplay
      autoplay: true,
      autoplayTimeout: 2000,      // change speed (ms)
      autoplaySpeed: 800,
      autoplayHoverPause: false,  // IMPORTANT: don't stop on hover

      // no buttons / no dots
      nav: false,
      dots: false,

      // keep it moving even with touch/mouse
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true
    });