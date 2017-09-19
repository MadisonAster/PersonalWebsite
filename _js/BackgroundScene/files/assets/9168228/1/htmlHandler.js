var HtmlHandler = pc.createScript('htmlHandler');

// initialize code called once per entity
HtmlHandler.prototype.initialize = function() {
    function GetAspectRatio() {
        if(screen.width > screen.height) {
            return screen.width / screen.height;
        } else {
            return screen.height / screen.width;
        };
    };
    function GetHeight() {
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
        alert(GetAspectRatio());
        return 1571;
    };
    var viewportHeight = GetHeight();
    var bg = $("#application-canvas");
    function resizeBackground() {
        if (viewportHeight != GetHeight()) {
            viewportHeight = GetHeight();
            updateSize();
        };
    };
    
    function updateSize() {
        bg.height(viewportHeight);
        bg.width(window.width);
    };
    updateSize();
    $(window).resize(resizeBackground);
    animationLoop();
};

// update code called every frame
HtmlHandler.prototype.update = function(dt) {
    
};

var runOnScroll = function(evt) {     
    var cam = pc.app.root.findByName('camera');
    var ypos = Math.min(getYPosition(), 1540);
    
    var camypos = ypos/-1400+0.454;
    cam.setPosition(cam.getPosition().x, camypos, cam.getPosition().z); 
    
    var farval = 2*(Math.min(ypos, 385))/-3.85+200+1;
    cam.script.dof.onAttributeChanged('far', farval); //why?
    cam.script.dof.far = farval;
};
function animationLoop(){
    requestAnimFrame(animationLoop);
    runOnScroll();
};
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.oRequestAnimationFrame ||  
    window.msRequestAnimationFrame || 
    function(callback){
		window.setTimeout(callback, 1000.0/window.frameRate);
    };
})();

function getYPosition(){
	return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
};

