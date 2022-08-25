(function () {
    const swiper = new Swiper('.swiper', {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 60,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 60
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 60
            }
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        zoom: true,
        allowTouchMove: false,
    });

    function openFullscreenSwiper(imgSrc, imgAlt) {
        var fullScreenSwiper = $('.fullscreen-swiper');
        var mainSwiperMarkup = fullScreenSwiper.html();

        fullScreenSwiper
            .addClass('fullscreen-swiper_open')
            .append(mainSwiperMarkup + `<div class='img-holder_fullscreen'><img src="${imgSrc}" alt="${imgAlt}"/> </div>`)
            .fadeIn();

        $('.fullscreen-swiper-backdrop').fadeIn();

        $('.fullscreen-swiper').click(function (e) {
            if(e.target.tagName !== 'IMG') {
                $(this).hide().empty().removeClass('fullscreen-swiper_open');
                $('.fullscreen-swiper-backdrop').fadeOut();
            }
        })

        $('.fullscreen-swiper-close').on('click', function () {
            $('.fullscreen-swiper').hide().empty().removeClass('fullscreen-swiper_open');
            $('.fullscreen-swiper-backdrop').fadeOut();
        });
    }

    $('.swiper .swiper-slide').on('click', function () {
        var imgSrc = $(this).find('img').attr('src')
        var imgAlt = $(this).find('img').attr('alt')
        openFullscreenSwiper(imgSrc, imgAlt);
    });

})();