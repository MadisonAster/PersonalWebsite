var heightRatio = getDocHeightBG()/1080;
var frameRate = 30;
var imageCache = new Array; // stores all of the frames for quick access
var frameLoadingOrder = new Array;
var currentFrame = false;
window.onresize = function(event) {
    console.log('MazeRunnerBG onresize');
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
    window.MyMaze.update();
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
        this.Maze = this.GenerateMaze();
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
    update(){
        //console.log('updoot!');
    };
};

function backgroundOnload(){
    console.log('MazeRunnerBG.backgroundOnload');
    window.MyMaze = new MazeRunner();
    animationLoop();
};

function MazeInit(){
    console.log('MazeRunnerBG.MazeInit!');
    window.DemoMaze = new Windows95Maze('MazeRunner',12,12);
    window.addEventListener('resize', ResizeHandling);
    window.addEventListener('keydown', KeyHandling);
}

function ResizeHandling(){
    window.DemoMaze.MazeRenderer.Resize();
}

function KeyHandling(event){
        switch(event.keyCode)
        {
            case 87: //w
            case 38: //Up
                window.DemoMaze.Go('f');
                break;
            case 65: //a
            case 37: //Left
                window.DemoMaze.Turn('l');
                break;
            case 83: //s
            case 40: //Down
                window.DemoMaze.Go('b');
                break;
            case 68: //d
            case 39: //Right
                window.DemoMaze.Turn('r');
                break;
        }
}
