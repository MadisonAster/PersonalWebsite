function Projects_onload(){
    U360PageLinks = $('#U360Pages').children();
    console.log(U360PageLinks);
    for(var i=0;i<U360PageLinks.length;i++){
        console.log(U360PageLinks[i]);
        $(U360PageLinks[i]).attr('onclicked', 'function(){window.loadframe('+(i+1)+');}');
    };
};