function Favorites_onload(){
    //console.log('Favorites onload');
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
        resortGrid($('#'+window.lastFavoritesTab+'Grid'));
    });
    
    //resortGrid($('#MoviesGrid'));
    //resortGrid($('#TVGrid'));
    window.lastFavoritesTab = 'Movies';
    switchFavoritesTabs('Bookmarks');
};

function cache_delayed(){
    //console.log('Replacing Buffer Images.');
    $('.load-delay').each(function (){
        var imagex = $(this);
        var imgOriginal = imagex.data('original');
        $(imagex).attr('src', imgOriginal);
    });
};

function resortGrid(GridObject){
    var sort = $('#'+GridObject.attr('id')+'_sort-options').val();
    //console.log(sort);
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

function switchFavoritesTabs(TabName){
    if(TabName != window.lastFavoritesTab){
        document.getElementById(window.lastFavoritesTab+'Button').style['background-color'] = '#555555';
        document.getElementById(window.lastFavoritesTab+'Div').style['display'] = 'none';
        document.getElementById(TabName+'Button').style['background-color'] = '#111111';
        document.getElementById(TabName+'Div').style['display'] = '';
        $('#'+TabName+'Grid').shuffle('update');
        window.lastFavoritesTab = TabName;
    };    
};