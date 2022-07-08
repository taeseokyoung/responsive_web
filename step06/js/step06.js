$(function () {
    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $('.sub_menu').slideUp();
            $(this).next().slideToggle();
        }

    });

    $('.mbtn').on('click', function () {
        console.log('sdf')
        $('.gnb').toggleClass('on')
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.sub_menu').removeAttr('style')
    });


    var siteMap = $('.gnb>ul').clone().addClass('container')
    console.log(siteMap);
    siteMap.appendTo($('body')).wrap('<div class="sitemap"></div>');
    $('<i class="xi-close"></i>').appendTo(siteMap.parent())

    $('.mclone').on('click', function () {
        console.log('click')
        siteMap.show();
    });

    $('.sitemap .xi-close').on('click', function () {
        console.log('click')
    })
})