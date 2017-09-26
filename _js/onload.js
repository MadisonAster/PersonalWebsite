function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

window.onload = function(){
    //backgroundOnload();
    //sorttable.init();
    window.scrollTo(0,1);
    disableScroll()
    menuArray = document.getElementById('Menu').childNodes;
    for(var i=0;i<menuArray.length;i++){
        if(menuArray[i].id != null){
            page = menuArray[i].id.split('_')[1];
            if(window[page+'_onload'] != null){
                onloadPtr = window[page+'_onload'];
                onloadPtr();
            };
        };
    };
};
$(function() {
    $(document).on('click', '.jcarousel img', function() {
        $(this).toggleClass('zoomed');
    });
});
$(function() {
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('img.zoomed').each(function(idx) {
                $(this).toggleClass('zoomed');
            });
        }
    });
});

