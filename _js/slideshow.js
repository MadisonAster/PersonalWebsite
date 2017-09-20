$(".slideshow > div:gt(0)").hide();

setInterval(function() {
    $('.slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    
    $('.slideshow > div:first').each(function(){
        $(this).appendTo($(this).parent());
    });
    //.appendTo(parent);
    //.appendTo($(this).parent());
    //.appendTo('#slideshow');
}, 3000);