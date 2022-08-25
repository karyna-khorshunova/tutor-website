$(document).ready(function () {
    function toggleNavigationMenu() {
        $("#js-top-line").toggleClass("active");
        $("#js-center-line").toggleClass("active");
        $("#js-bottom-line").toggleClass("active");
        $("#js-nav").toggleClass("show");
    }

    $("#js-hamburger").click(toggleNavigationMenu);

    $('#show-more').click(function () {
        var text = $('.about-me__additional-text');
        if (text.hasClass('about-me__additional-text_hidden')) {

            $('#show-more').text('Показати менше')
            text.slideDown('slow');
            text.removeClass('about-me__additional-text_hidden');
        } else {
            $('#show-more').text('Показати більше')
            text.slideUp('slow');
            text.addClass('about-me__additional-text_hidden');
        }
    });

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('nav__item_active');
        })

        if ($(this).text() !== 'Почати') {
            $(this).addClass('nav__item_active');
        }

        if ($("#js-nav").hasClass('show')) {
            toggleNavigationMenu();
        }

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll() {
        var scrollPos = $(document).scrollTop();
        $('nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (refElement.position().top <= scrollPos + 70 && refElement.position().top + refElement.height() > scrollPos + 70) {
                console.log(this);
                $('nav ul li a').removeClass("nav__item_active");
                currLink.addClass("nav__item_active");
            }
        });
    }
})
;