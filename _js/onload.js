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
    $(document).on('click', '.jcarousel img', function() {
        $(this).toggleClass('zoomed');
        $(this).css('origwidth', $(this).css('width'));
        $(this).css('origheight', $(this).css('height'));
        if ($(this).width() > $(this).height()) {
            $(this).css('width', '100%');
            $(this).css('height', 'auto');
        } else {
            $(this).css('height', '100%');
            $(this).css('width', 'auto');
        }
    });
});
$(function() {
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $('img.zoomed').each(function(idx) {
                $(this).toggleClass('zoomed');
                $(this).css('height', $(this).css('origheight'));
                $(this).css('width', $(this).css('origwidth'));
            });
        }
    });
});

