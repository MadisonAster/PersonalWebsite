window.onload = function(){
    //backgroundOnload();
    //sorttable.init();
    window.scrollTo(0,1);
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
    $(document).on('click', 'jcarousel img', function() {
        $(this).toggleClass('zoomed');
    });
}
$(function() {
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('img.zoomed').each(function(idx) {
                $(this).toggleClass('zoomed');
            });
        }
    }
}

