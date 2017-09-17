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
    cam.setPosition(cam.getPosition().x, cam.getPosition().y+(evt.wheelDelta/1200), cam.getPosition().z);  
    //console.log(cam.script.dof.far);
    var newfar = cam.script.dof.far+evt.wheelDelta/120*8;
    newfar = Math.max(2, Math.min(newfar, 100));
    cam.script.dof.onAttributeChanged('far', newfar);
    cam.script.dof.far = newfar;
    
    console.log(evt.wheelDelta);
};
window.addEventListener("mousewheel", runOnScroll);
//window.addEventListener("scroll", runOnScroll);