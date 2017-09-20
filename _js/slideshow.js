$(".slideshow2 > div:gt(0)").hide();

setInterval(function() {
    var adiv = $('.slideshow2 > div:first');
    adiv.fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    //.appendTo('#slideshow2');
    .appendTo($(this).parent());
}, 3000);