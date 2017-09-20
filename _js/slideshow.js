$(".slideshow > div:gt(0)").hide();

setInterval(function() {
    /*
    $('.slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
    */
    //$('.slideshow > div:first').each(function(){
    //    $(this).appendTo($(this).parent());
    //});
    var adiv = $('.slideshow > div:first');
    adiv.fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo($(this).parent());
    //.appendTo('#slideshow');
}, 3000);