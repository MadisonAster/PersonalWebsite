function Projects_onload(){
    /*if(window.MyShuffleObject != null){
        window.MyShuffleObject.resize();
    } else {
        window.MyShuffleObject = ShufflePlayer(vSources, aSources, vSourceDurations, aSourceDurations, false, true, false);
    };*/
    U360PageLinks = $('#U360Pages').children();
    for(var i=0;i<U360PageLinks.length;i++){
        $(U360PageLinks[i]).attr('onclick', 'window.loadframe('+(i+1)+');return false;');
    };
};