var HtmlHandler = pc.createScript('htmlHandler');

// initialize code called once per entity
HtmlHandler.prototype.initialize = function() {
    animationLoop();
};

// update code called every frame
HtmlHandler.prototype.update = function(dt) {
    
};

// swap method called for script hot-reloading
// inherit your script state here
// HtmlHandler.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/
// 
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
    //targetFrame = parseInt(getYPosition()/window.heightRatio+window.startFrame);
    //if(targetFrame > window.endFrame){
    //    targetFrame = window.endFrame;
    //};
    //findFrame(targetFrame);
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

//window.addEventListener("mousewheel", runOnScroll);
//window.addEventListener("scroll", runOnScroll);

