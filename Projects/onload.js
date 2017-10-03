function Projects_onload(){
    U360PageLinks = $('#U360Pages').children();
    for(var i=0;i<U360PageLinks.length;i++){
        $(U360PageLinks[i]).attr('onclick', 'window.loadframe('+(i+1)+');return false;');
    };
};