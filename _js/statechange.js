History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
    //var State = History.getState(); // Note: We are using History.getState() instead of event.state
    
    window.PageName = window.location.href.replace(/\/$/, "").split('/').slice(-1)[0];
    
    if(window.isOldBrowser){
        oldYPosition = getYPosition();
    };
    
    if(window.LastDisplayed != null){
        document.getElementById(window.LastDisplayed).style['display'] = 'none';
        
        var hidingimages = $('#'+window.LastDisplayed).find('img');
        for(var i=0;i<hidingimages.length;i++){
            var rsrc = hidingimages[i].attr('rsrc');
            if (typeof rsrc !== typeof undefined && rsrc !== false){
                hidingimages[i].attr('src', '_Assets/ImgPlaceHolder.png');
            };
        };
    };
    
    document.getElementById('Content_'+window.PageName).style['display'] = '';
    var showingimages = $('#Content_'+window.PageName).find('img');
    console.log(showingimages);
    for(var i=0;i<showingimages.length;i++){
        console.log(showingimages[i]);
        var rsrc = showingimages[i].attr('rsrc');
        if (typeof rsrc !== typeof undefined && rsrc !== false){
            showingimages[i].attr('src', rsrc);
        };
    };
    window.LastDisplayed = 'Content_'+window.PageName;
    
    if(window.isOldBrowser){
        iframes = document.getElementById('Content_'+window.PageName).getElementsByClassName('EmbeddedPage');
        for(var i=0;i<iframes.length;i++){
            resizeIframe(iframes[i]); //iframes didn't resize onload because parent is set to display none.
        };
        window.scroll(0, oldYPosition); //put the window back where it was, because the iframe was 0 pixels high the window jumps to the top
    };
    
    if(window[window.PageName+'_statechange'] != null){
        functionPtr = window[window.PageName+'_statechange'];
        functionPtr();
    };
});