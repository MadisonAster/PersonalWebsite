$(".slideshow > div:gt(0)").hide();

setInterval(function() {
    var adiv = $('.slideshow > div:first');
    adiv.fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo($(this).parent());
}, 3000);