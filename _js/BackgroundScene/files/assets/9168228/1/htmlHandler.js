var HtmlHandler = pc.createScript('htmlHandler');

// initialize code called once per entity
HtmlHandler.prototype.initialize = function() {
    var viewportHeight = $(window).height();
    var HEIGHT_CHANGE_TOLERANCE = 100;
    var bg = $("#application-canvas");
    function resizeBackground() {
        updateSize();
        if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = $(window).height();
            updateSize();
        };
    };
    function updateSize() {
        //alert(window.outerHeight);         ff 606  654  cr 604  660
        //alert(screen.availHeight);         ff 678       cr 732
        //alert(screen.height);              ff 678       cr 732
        //alert(document.body.clientHeight); ff 1456 1571 cr 1436
        //alert($(window).outerHeight());    ff 1456 1571 cr 1436
        //alert($(document).height());       ff 6942 7056 cr 6393
        
        alert('g '+$(window).height());
        bg.height(window.outerHeight);
        bg.width(window.width);
        //bg.height(window.outerHeight);
        //bg.height(screen.availHeight);
        //bg.width(100%);
        //bg.height(475);
        //bg.width(475);
        
        //var bg = document.getElementById('application-canvas');
        //bg.setAttribute("style","width:500px;height:500px");
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

