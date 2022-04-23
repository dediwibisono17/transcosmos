new WOW().init();
// alert(1)
$(window).scroll(function() {
    var nav = $('.bg-scroll');
    var top = 20;
    if ($(window).scrollTop() >= top) {
        nav.addClass('bg-black');

    } else {
        // nav.css('top', '0px')
        nav.removeClass('bg-black');
    }
});

$(".youtube__img").click(() => {
    $(".youtube__img").hide();
    $(".youtube__real").css('display', 'block')
})