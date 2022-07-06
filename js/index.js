
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
    });
    var chargeTypeSwiper = new Swiper('.chargeTypeSwiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })
});