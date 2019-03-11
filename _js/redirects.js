window.PageName = window.location.href.split('/').slice(-1)[0];
if(window.PageName == ''){
    History.replaceState(null, 'Projects - Madison Aster', 'Projects');
    document.getElementById('Content_Projects').style['display'] = '';
    window.LastDisplayed = 'Content_Projects';
}else if(window.PageName.indexOf('?') > -1){
    window.PageName = window.PageName.replace('?', '');
    History.replaceState(null, window.PageName+' - Madison Aster', window.PageName);
    document.getElementById('Content_'+window.PageName).style['display'] = '';
    window.LastDisplayed = 'Content_'+window.PageName;
};