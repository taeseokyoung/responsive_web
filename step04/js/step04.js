$(function () {
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
        $('.smenu').hide();

    })

    $('.gnb>ul>li>a').on('click', function (event) {
        if ($(window).width() < 769) {
            event.preventDefault();
            // $('.smenu').show() 다~ 열리게 해버렸다.;
            $('.smenu').hide();
            $(this).next().show();
            // a가 가진 링크 속성때문에 나타났다 바로 사라짐. preventDefault로 잡을 수 있다.
        }
    });

    // *1 반응형에서 클릭된거랑 일반 화면에서 클릭된거랑 자꾸연동되어나옴
    $(window).on('resize', function () {
        $('.smenu').removeAttr('style')
    })
})
