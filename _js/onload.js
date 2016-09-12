window.onload = function(){
    backgroundOnload();
    //sorttable.init();
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