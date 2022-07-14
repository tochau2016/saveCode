
$(document).ready(function () {
  var chargeSwiper = new Swiper('.chargeSwiper', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    noSwiping: false,
    simulateTouch: false,
    parallax: true,
    speed: 1000,
  });
  chargeSwiper.on('slideChange', function () {
    $('.parallax-bg').attr('data-swiper-parallax', '0');

    setTimeout(function () {
      $('.swiper-slide-active .parallax-bg').attr(
        'data-swiper-parallax',
        $('html').height(),
      );
      $('.swiper-slide-next .parallax-bg').css(
        'transform',
        'translate3d(0px, 0px, 0px)',
      );
    }, 100);
    if ($('.intro').hasClass('swiper-slide-active')) {
      $('.battery-benefit .animate__bounceInDown').css({
        'visibility': 'visible',
        'animation-name': 'bounceInDown'
      })
      $('.battery-benefit .animate__rotateInDownLeft').css({
        'visibility': 'visible',
        'animation-name': 'rotateInDownLeft'
      })
      $('.battery-benefit .animate__fadeInLeft').css({
        'visibility': 'visible',
        'animation-name': 'fadeInLeft'
      })
      $('.battery-benefit .animate__fadeInRight').css({
        'visibility': 'visible',
        'animation-name': 'fadeInRight'
      })
    }
    if ($('.battery-benefit').hasClass('swiper-slide-active')) {
      $('.battery-term .animate__bounceInDown').css({
        'visibility': 'visible',
        'animation-name': 'bounceInDown'
      })
      $('.battery-term .animate__fadeInLeft').css({
        'visibility': 'visible',
        'animation-name': 'fadeInLeft'
      })
      $('.battery-term .animate__fadeInRight').css({
        'visibility': 'visible',
        'animation-name': 'fadeInRight'
      })
      $('.battery-term .animate__fadeInUp').css({
        'visibility': 'visible',
        'animation-name': 'fadeInUp'
      })
    }
    if ($('.battery-term').hasClass('swiper-slide-active')) {
      $('.payment-guide .animate__fadeInRight').css({
        'visibility': 'visible',
        'animation-name': 'fadeInRight'
      })
      $('.payment-guide .animate__fadeInLeft').css({
        'visibility': 'visible',
        'animation-name': 'fadeInLeft'
      })
      $('.payment-guide .animate__fadeInDown').css({
        'visibility': 'visible',
        'animation-name': 'fadeInDown'
      })
    }
    if ($('.payment-guide').hasClass('swiper-slide-active')) {
      $('.term-use-battery .animate__bounceInDown').css({
        'visibility': 'visible',
        'animation-name': 'bounceInDown'
      })
      $('.term-use-battery .animate__fadeInRight').css({
        'visibility': 'visible',
        'animation-name': 'fadeInRight'
      })
      $('.term-use-battery .animate__backInLeft').css({
        'visibility': 'visible',
        'animation-name': 'backInLeft'
      })
    }
    if ($('.term-use-battery').hasClass('swiper-slide-active')) {
      $('.charge-planning .animate__fadeInLeft').css({
        'visibility': 'visible',
        'animation-name': 'fadeInLeft'
      })
      $('.charge-planning .animate__zoomIn').css({
        'visibility': 'visible',
        'animation-name': 'zoomIn'
      })
    }
    if ($('.charge-planning').hasClass('swiper-slide-active')) {
      $('.charge-planning2 .animate__bounceInDown').css({
        'visibility': 'visible',
        'animation-name': 'bounceInDown'
      })
      $('.charge-planning2 .animate__fadeInLeft').css({
        'visibility': 'visible',
        'animation-name': 'fadeInLeft'
      })
      $('.charge-planning2 .animate__fadeInRight').css({
        'visibility': 'visible',
        'animation-name': 'fadeInRight'
      })
    }
    if ($('.charge-planning2').hasClass('swiper-slide-active')) {
      $('.charging-type .animate__fadeInLeft').css({
        'visibility': 'visible',
        'animation-name': 'fadeInLeft'
      })
      $('.charging-type .animate__fadeInUp').css({
        'visibility': 'visible',
        'animation-name': 'fadeInUp'
      })
    }
  });
  var chargeTypeSwiper = new Swiper('.chargeTypeSwiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  var chargeDeviceSwiper = new Swiper('.chargeDeviceSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
  var wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();
});