var HtmlHandler = pc.createScript('htmlHandler');

// initialize code called once per entity
function GetAspectRatio() {
    return $(window).height() / $(window).width();
};
HtmlHandler.prototype.initialize = function() {
    $("#NameImg").css('display', 'initial');
    var bg = $("#application-canvas");
    function resizeBackground() {
        if(bg.width() > $(window).width() || GetAspectRatio() > 1.0 / cam.camera.aspectRatio){
            if (bg.css('width') != 'auto'){
                bg.css('height', '100%');
                bg.css('width', 'auto');
            };
        } else {
            if (bg.css('height') != 'auto'){
                bg.css('width', '100%');
                bg.css('height', 'auto');
            };
        };
    };
    function updateSize() {
        //alert(window.height);             //ff 20        cr 3417      wi
        //alert(window.outerHeight);        //ff 606  654  cr 604  660  wi
        //alert(screen.availHeight);        //ff 678       cr 732       wi
        //alert(screen.height);             //ff 678       cr 732       wi 1080
        //alert(window.screen.height);      //ff 678       cr 732       wi 1080
        //alert(document.body.clientHeight);//ff 1456 1571 cr 1436      wi
        //alert($(window).outerHeight());   //ff 1456 1571 cr 1436      wi
        //alert($(window).height());        //ff 1456 1571 cr 1436      wi
        //alert($(document).height());      //ff 6942 7056 cr 6393      wi
        //alert($(window).width());         //ff 980       cr 980       wi 941  1903
        //alert(screen.width);        //ff 408       cr 412       wi 1920
        //bg.css('width', '100%');
        //bg.css('height', '110%');
        //bg.height(viewportHeight);
    };
    $(window).resize(resizeBackground);
    $('body').removeClass('stop-scrolling');
};

// update code called every frame
HtmlHandler.prototype.update = function(dt) {
    var cam = pc.app.root.findByName('camera');
    var ypos = Math.min(getYPosition(), 1540);
    
    var camypos = ypos/-1400+0.454;
    cam.setPosition(cam.getPosition().x, camypos, cam.getPosition().z); 
    
    var farval = 2*(Math.min(ypos, 385))/-3.85+200+1;
    cam.script.dof.onAttributeChanged('far', farval); //why?
    cam.script.dof.far = farval;
};

function getYPosition(){
	return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
};

