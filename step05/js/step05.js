$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    });

    // $('.mbtn').on('click', () => ($('.gnb').toggleClass('on'), console.log('check'))) > 화살표함수, 여러가지 일을 시킬 때, 나중에 {} 사용 많이 못할 때 많이 사용할거다.
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
        // $('.smenu').hide();
    })

    $('.gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $('.smenu').hide();
        $(this).next().slideDown();
    })

})