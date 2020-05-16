var heightRatio = getDocHeightBG()/1080;
var frameRate = 30;
var imageCache = new Array; // stores all of the frames for quick access
var frameLoadingOrder = new Array;
var currentFrame = false;
window.onresize = function(event) {
    console.log('onresize');
};

function zFill(number, length){
	var str = '' + number; 
	while(str.length < length){
		str = '0' + str;
	};
	return str;
};

function getDocWidth(){
    return document.documentElement.clientWidth;
};
function getDocHeightBG(){
    return document.documentElement.clientHeight;
};
function getYPosition(){
	return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
};
function videoSupportCheck(){
   canPlay = false;
   v = document.createElement('video');
   if(v.canPlayType && v.canPlayType('video/mp4').replace(/no/, '')) {
       canPlay = true;
   };
   return canPlay;
};

function zoomCrop(targetElement){
    var image_width = 1920.0;
	var image_height = 1080.0;
	var height_ratio = image_height / getDocHeightBG();
	var width_ratio = image_width / getDocWidth();
	
	if (height_ratio < width_ratio){
        targetElement.style['width'] = 'auto';
        targetElement.style['height'] = '100%';
        
        computedRatio = getDocHeightBG()/image_height;
        computedWidth = image_width*computedRatio;
        
        difference = computedWidth-getDocWidth();
        offset = (difference/2)*-1;
        targetElement.style['left'] = offset+'px';
        targetElement.style['top'] = 0;
	}else{
        targetElement.style['height'] = 'auto';
		targetElement.style['width'] = '100%';
        
		computedRatio = getDocWidth()/image_width;
        computedHeight = image_height*computedRatio;
        
		difference = computedHeight-getDocHeightBG();
        offset = (difference/2)*-1;
        targetElement.style['top'] = offset+'px';
        targetElement.style['left'] = 0;
	};
};

function animationLoop(){
    requestAnimFrame(animationLoop);
    MyMaze.update();
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

class ScrollControls {
    init(){
        
    };
};
class MazeRunner {
    init(){
        
        console.log('MazeRunner.init');
        this.renderer = new THREE.WebGLRenderer();
        this.controls = ScrollControls();
        GenerateMaze();
    };
    GenerateMaze(){
        //this.MazeGeo = somefunction;
        
    };
    
    
    
    Animate(){
        requestAnimFrame(this.Animate.bind(this));
        //this.stats.begin();
        SceneRender();
        OverlayRender();
    };
    SceneRender(){
        
    };
    OverlayRender(){
        
    };
};

function backgroundOnload(){
    console.log('MazeRunnerBG.backgroundOnload');
    MyMaze = MazeRunner();
    animationLoop();
};
