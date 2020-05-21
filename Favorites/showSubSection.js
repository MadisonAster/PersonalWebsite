function showSubSection(ElementID) {
    if(window.lastSubSection != null){
        console.log('hiding subsection '+window.lastSubSection);
        document.getElementById(window.lastSubSection).style['display'] = 'none';
        document.getElementById('a_'+window.lastSubSection).style['display'] = '';
        document.getElementById('fig_'+window.lastSubSection).style['width'] = '';
        if(ElementID == window.lastSubSection){
            window.lastSubSection = null;
            return;
        };
        window.lastSubSection = null;  
    };
    if(ElementID != window.lastSubSection){
        console.log('showing subsection '+ElementID);
        document.getElementById(ElementID).style['display'] = '';
        document.getElementById('a_'+ElementID).style['display'] = 'none';
        document.getElementById('fig_'+ElementID).style['width'] = '100%';
        window.lastSubSection = ElementID;
    };
    $('#'+window.lastFavoritesTab+'Grid').shuffle('update');
};