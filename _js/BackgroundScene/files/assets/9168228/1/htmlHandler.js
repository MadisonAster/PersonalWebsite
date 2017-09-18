var HtmlHandler = pc.createScript('htmlHandler');

// initialize code called once per entity
HtmlHandler.prototype.initialize = function() {
    
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
    console.log(getYPosition());
    //console.log(evt.wheelDelta/1200/0.6);
    var newy = cam.getPosition().y+(evt.wheelDelta/1200/0.6);
    newy = Math.max(-0.65, Math.min(newy, 0.454));
    cam.setPosition(cam.getPosition().x, newy, cam.getPosition().z);  
    var newfar = cam.script.dof.far+evt.wheelDelta/120*8;
    newfar = Math.max(1, Math.min(newfar, 100));
    cam.script.dof.onAttributeChanged('far', newfar);
    cam.script.dof.far = newfar;
    
    
};
function animationLoop(){
    requestAnimFrame(animationLoop);
    targetFrame = parseInt(getYPosition()/window.heightRatio+window.startFrame);
    if(targetFrame > window.endFrame){
        targetFrame = window.endFrame;
    };
    findFrame(targetFrame);
};
function getYPosition(){
	return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
};
//window.addEventListener("mousewheel", runOnScroll);
window.addEventListener("scroll", runOnScroll);




