
$(document).ready(function () {
  var wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init();
  // function pageEffectCharge() {
  //   var chargeSwiper = new Swiper('.chargeSwiper', {
  //     direction: 'vertical',
  //     slidesPerView: 1,
  //     mousewheel: true,
  //     noSwiping: false,
  //     simulateTouch: false,
  //     parallax: true,
  //     speed: 1000,
  //   });
  //   chargeSwiper.on('slideChange', function () {
  //     $('.parallax-bg').attr('data-swiper-parallax', '0');
  //     setTimeout(function () {
  //       $('.swiper-slide-active .parallax-bg').attr(
  //         'data-swiper-parallax',
  //         $('html').height(),
  //       );
  //       $('.swiper-slide-next .parallax-bg').css(
  //         'transform',
  //         'translate3d(0px, 0px, 0px)',
  //       );
  //     }, 100);
  //     runAnimation();
  //   });
  // }

  // function runAnimation() {

  //   if ($('.intro').hasClass('swiper-slide-active')) {
  //     $('.battery-benefit .animate__bounceInDown').css({
  //       'visibility': 'visible',
  //       'animation-name': 'bounceInDown'
  //     })
  //     $('.battery-benefit .animate__rotateInDownLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'rotateInDownLeft'
  //     })
  //     $('.battery-benefit .animate__fadeInLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInLeft'
  //     })
  //     $('.battery-benefit .animate__fadeInRight').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInRight'
  //     })
  //   }
  //   if ($('.battery-benefit').hasClass('swiper-slide-active')) {
  //     $('.battery-term .animate__bounceInDown').css({
  //       'visibility': 'visible',
  //       'animation-name': 'bounceInDown'
  //     })
  //     $('.battery-term .animate__fadeInLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInLeft'
  //     })
  //     $('.battery-term .animate__fadeInRight').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInRight'
  //     })
  //     $('.battery-term .animate__fadeInUp').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInUp'
  //     })
  //   }
  //   if ($('.battery-term').hasClass('swiper-slide-active')) {
  //     $('.payment-guide .animate__fadeInRight').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInRight'
  //     })
  //     $('.payment-guide .animate__fadeInLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInLeft'
  //     })
  //     $('.payment-guide .animate__fadeInDown').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInDown'
  //     })
  //   }
  //   if ($('.payment-guide').hasClass('swiper-slide-active')) {
  //     $('.term-use-battery .animate__bounceInDown').css({
  //       'visibility': 'visible',
  //       'animation-name': 'bounceInDown'
  //     })
  //     $('.term-use-battery .animate__fadeInRight').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInRight'
  //     })
  //     $('.term-use-battery .animate__backInLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'backInLeft'
  //     })
  //   }
  //   if ($('.term-use-battery').hasClass('swiper-slide-active')) {
  //     $('.charge-planning .animate__fadeInLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInLeft'
  //     })
  //     $('.charge-planning .animate__zoomIn').css({
  //       'visibility': 'visible',
  //       'animation-name': 'zoomIn'
  //     })
  //   }
  //   if ($('.charge-planning').hasClass('swiper-slide-active')) {
  //     $('.charge-planning2 .animate__bounceInDown').css({
  //       'visibility': 'visible',
  //       'animation-name': 'bounceInDown'
  //     })
  //     $('.charge-planning2 .animate__fadeInLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInLeft'
  //     })
  //     $('.charge-planning2 .animate__fadeInRight').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInRight'
  //     })
  //   }
  //   if ($('.charge-planning2').hasClass('swiper-slide-active')) {
  //     $('.charging-type .animate__fadeInLeft').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInLeft'
  //     })
  //     $('.charging-type .animate__fadeInUp').css({
  //       'visibility': 'visible',
  //       'animation-name': 'fadeInUp'
  //     })
  //   }
  // }

  function sectionSwiper() {
    var chargeTypeSwiper = new Swiper('.chargeTypeSwiper', {
      slidesPerView: 1.15,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    })

    var chargeDeviceSwiper = new Swiper('.chargeDeviceSwiper', {
      slidesPerView: 1.15,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
      },
    })
  }

  $('.battery-benefit .animate__rotateInDownLeft').css({
    'visibility': 'visible',
    'animation-name': 'rotateInDownLeft'
  })

  $('.payment-guide .animate__fadeInDown').css({
    'visibility': 'visible',
    'animation-name': 'fadeInDown'
  })

  function scrollPC() {
    jQuery('#header').on("mousewheel", function (e) {
      if (e.originalEvent.deltaY > 0) {
        e.preventDefault();
        return;
      } else if (e.originalEvent.wheelDeltaY < 0) {
        e.preventDefault();
        return;
      }
    });
  }
  // chargeSwiper = undefined;
  // function initSwiper() {
  //   var screenWidth = jQuery(window).width();
  //   if (screenWidth > 1023 && chargeSwiper == undefined) {
  //     jQuery('.parallax-bg').attr('data-swiper-parallax', '0');
  //     chargeSwiper = new Swiper('.chargeSwiper', {
  //       direction: 'vertical',
  //       parallax: true,
  //       slidesPerView: 1,
  //       mousewheel: true,
  //       noSwiping: false,
  //       speed: 1000,
  //       simulateTouch: false,
  //       mousewheelControl: true,
  //       edgeSwipeDetection: true,
  //       noSwiping: true,
  //       observer: true,
  //       observeParents: true,
  //       on: {
  //         init: function () {
  //           if (jQuery('.chargeSwiper .swiper-wrapper').find('.swiper-slide.swiper-slide-active').hasClass('vision')) {
  //             jQuery('.overlay-section').addClass('show');
  //             jQuery('.vision-content .vision-content-item')
  //               .delay(1000)
  //               .each(function (i) {
  //                 jQuery(this)
  //                   .delay(275 * i)
  //                   .queue(function () {
  //                     jQuery(this).addClass('show-item');
  //                   });
  //               });
  //           }
  //         },
  //         transitionStart: function () {
  //           if (jQuery('.chargeSwiper .swiper-wrapper').find('.swiper-slide.swiper-slide-active').hasClass('vision')) {
  //             jQuery('.overlay-section').addClass('show');
  //             jQuery('.vision-content .vision-content-item')
  //               .delay(1000)
  //               .each(function (i) {
  //                 jQuery(this)
  //                   .delay(275 * i)
  //                   .queue(function () {
  //                     jQuery(this).addClass('show-item');
  //                   });
  //               });
  //           }
  //           runAnimation();

  //         },

  //       },
  //     });
  //     var header = jQuery('#header').height();
  //     chargeSwiper.on('slideChange', function () {
  //       jQuery('.parallax-bg').attr('data-swiper-parallax', '0');

  //       setTimeout(function () {
  //         jQuery('.swiper-slide-active .parallax-bg').attr(
  //           'data-swiper-parallax',
  //           jQuery('.prize.swiper-slide-active').length > 0 ? jQuery('html').height() - header - 370 : jQuery('html').height() - header,
  //         );
  //         jQuery('.swiper-slide-next .parallax-bg').css(
  //           'transform',
  //           'translate3d(0px, 0px, 0px)',
  //         );
  //       }, 100);
  //     });
  //     runAnimation()
  //   } else if (screenWidth < 992 && chargeSwiper != undefined) {
  //     runAnimation();
  //     chargeSwiper.destroy();
  //     chargeSwiper = undefined;
  //     jQuery('.parallax-bg').removeAttr('style');
  //     jQuery('.swiper-wrapper').removeAttr('style');
  //     jQuery('.swiper-slide').removeAttr('style');
  //   }
  // }
  // pageEffectCharge();
  // runAnimation();
  // initSwiper();
  scrollPC();
  var wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  )
  wow.init();
  jQuery(window).resize(function () {
    initSwiper();
    var wow = new WOW(
      {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
      }
    )
    wow.init();
    jQuery('body').scrollTop(0);
  })

});