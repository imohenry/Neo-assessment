/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function(){
  $('.preloader').fadeOut(1000); // set duration in brackets    
});



/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/

$(document).ready(function() {


/*-------------------------------------------------------------------------------
  Hide mobile menu after clicking on a link
-------------------------------------------------------------------------------*/

  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });



/*-------------------------------------------------------------------------------
  smoothScroll js
-------------------------------------------------------------------------------*/
  $(function() {
      $('.navbar-default a').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 5000);
          event.preventDefault();
      });
  });



/*-------------------------------------------------------------------------------
  Owl Carousel
-------------------------------------------------------------------------------*/
  
 $(document).ready(function() {
  $("#screenshot-carousel").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    slideSpeed: 300,
  });
});



$(document).ready(function() {
  $("#about-carousel").owlCarousel({
    autoPlay: 6000,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
  });
});



/*-------------------------------------------------------------------------------
  Back top Top
-------------------------------------------------------------------------------*/

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
          } else {
              $('.go-top').fadeOut(200);
         }
    });   
      // Animate the scroll to top
    $('.go-top').click(function(event) {
      event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
});



/*-------------------------------------------------------------------------------
  wow js - Animation js
-------------------------------------------------------------------------------*/

new WOW({ mobile: false }).init();


});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.control-dot');
    let currentIndex = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            }
            dots[i].classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(nextSlide, slideInterval);
    showSlide(currentIndex);
});

