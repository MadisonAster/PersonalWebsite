function Links_onload(){
    console.log('Links onload');
    $('#MoviesGrid').shuffle({
        itemSelector: '.picture-item',
        sizer: $('#MoviesGrid').find('.shuffle__sizer'),
    });
    $('#TVGrid').shuffle({
        itemSelector: '.picture-item',
        sizer: $('#TVGrid').find('.shuffle__sizer'),
    });
    cache_delayed();
    $('.sort-options').on('change', function(){
        resortGrid($('#'+window.lastLinksTab+'Grid'));
    });
    
    resortGrid($('#MoviesGrid'));
    resortGrid($('#TVGrid'));
    window.lastLinksTab = 'TV';
    switchLinksTabs('Movies');
};

function cache_delayed(){
    if(window.cacheCounter >= 50){
        $('.load-delay').each(function (){
            var imagex = $(this);
            var imgOriginal = imagex.data('original');
            $(imagex).attr('src', imgOriginal);
        });
    }else{
        setTimeout(cache_delayed, 50);
    };
};

function resortGrid(GridObject){
    var sort = $('#'+GridObject.attr('id')+'_sort-options').val();
    console.log(sort);
    opts = {};
      
    lTags = ['title']
    rTags = ['added', 'released', 'rating', 'imdbscore']
    
    if(rTags.indexOf(sort) >= 0){
        opts = {
            reverse: true,
            by: function($el) {
            return $el.data(sort);
        }
        };
    }else if(lTags.indexOf(sort) >= 0){
        opts = {
            by: function($el) {
            return $el.data(sort);
            }
        };
    };
    
    GridObject.shuffle('sort', opts);
    GridObject.shuffle('update');
};

function switchLinksTabs(TabName){
    if(TabName != window.lastLinksTab){
        document.getElementById(window.lastLinksTab+'Button').style['background-color'] = '#555555';
        document.getElementById(window.lastLinksTab+'Div').style['display'] = 'none';
        document.getElementById(TabName+'Button').style['background-color'] = '#111111';
        document.getElementById(TabName+'Div').style['display'] = '';
        $('#'+TabName+'Grid').shuffle('update');
        window.lastLinksTab = TabName;
    };    
};