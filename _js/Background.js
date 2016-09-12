var heightRatio = getDocHeight()/1080;
var frameRate = 30;
var imageCache = new Array; // stores all of the frames for quick access
var frameLoadingOrder = new Array;
var currentFrame = false;
window.onresize = function(event) {
    console.log('onresize');
    zoomCrop(window.bgImg1);
    if(window.bgImg2){
        zoomCrop(window.bgImg2);
    };
};

function zFill(number, length){
	var str = '' + number; 
	while(str.length < length){
		str = '0' + str;
	};
	return str;
};
function checkArrayFor(array, value){
    for(var i=0;i<array.length;i++){
        return (array[i] === value)
    };
    return false;
};

function getDocWidth(){
    return document.documentElement.clientWidth;
};
function getDocHeight(){
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
function webpSupportCheck(){
    var img = new Image();
    img.onload = function(){
        window.webpSupport = false;
        window.webpSupport = !!(img.height > 0 && img.width > 0);
        continueOnload();
    };
    img.onerror = function(){
        window.webpSupport = false;
        continueOnload();
    };
    img.src = '_Assets/Stills/test.webp';
};


function cacheFrames(){
    if(window.currentFrame){
        if(imageCache[window.currentFrame].complete){
            window.cacheCounter += 1;
            if(window.frameLoadingOrder.length == 0){
                return null;
            };
            if(window.currentFrame == window.startFrame){
                findFrame(window.startFrame);
                zoomCrop(window.bgImg1);
                if(window.isOldBrowser){
                    zoomCrop(window.bgImg2);
                };
            };
            window.currentFrame = window.frameLoadingOrder.shift();
            cacheFrame(window.currentFrame);
        };
    }else{
        window.currentFrame = window.frameLoadingOrder.shift();
        window.cacheCounter = 0;
        cacheFrame(window.currentFrame);
    };
    window.setTimeout(cacheFrames, 1);
};
function cacheFrame(frameNum){
    if(window.webpSupport == true){
        resolvedPath = window.sequencePath+'.'+zFill(frameNum, 4)+'.webp';
    }else{
        resolvedPath = window.sequencePath+'.'+zFill(frameNum, 4)+'.jpg';
    };
    imageCache[frameNum] =  new Image();
    imageCache[frameNum].src = resolvedPath;
};
function zoomCrop(targetElement){
    var image_width = 1920.0;
	var image_height = 1080.0;
	var height_ratio = image_height / getDocHeight();
	var width_ratio = image_width / getDocWidth();
	
	if (height_ratio < width_ratio){
        targetElement.style['width'] = 'auto';
        targetElement.style['height'] = '100%';
        
        computedRatio = getDocHeight()/image_height;
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
        
		difference = computedHeight-getDocHeight();
        offset = (difference/2)*-1;
        targetElement.style['top'] = offset+'px';
        targetElement.style['left'] = 0;
	};
};
function buildLoadingOrder(){
    seqLength = window.endFrame-window.startFrame;
    counter = 1;
    while(true){
        counter = counter*2.0;
        stepAmount = Math.round(seqLength/counter);
        if (stepAmount < 1){
            break;
        };
        for(i = window.startFrame; i <= window.endFrame; i = i+stepAmount){
            if (checkArrayFor(window.frameLoadingOrder, i) != true && i <= window.endFrame){
                window.frameLoadingOrder.push(i);
            };
        };
        if (stepAmount == 1){
            break;
        };
    };
    window.frameLoadingOrder = window.frameLoadingOrder.slice(0, 100);
};

function animationLoop(){
    requestAnimFrame(animationLoop);
    targetFrame = parseInt(getYPosition()/window.heightRatio+window.startFrame);
    if(targetFrame > window.endFrame){
        targetFrame = window.endFrame;
    };
    findFrame(targetFrame);
};
function switchSecondFrame(){
    window.bgImg1.style['display'] = '';
    window.bgImg2.src = window.bgImg1.src;
};
function findFrame(frameNum){
    if(window.webpSupport == true){
        resolvedPath = window.sequencePath+'.'+zFill(frameNum, 4)+'.webp';
    }else{
        resolvedPath = window.sequencePath+'.'+zFill(frameNum, 4)+'.jpg';
    };
    if(window.bgImg1.src != resolvedPath){
        offset = 0;
        while(offset < 32){
            if(imageCache[frameNum+offset]){
                if(imageCache[frameNum+offset].complete){
                    switchFrame(frameNum+offset);
                    return offset;
                };
            };
            
            if(offset == 0){
                offset += 1
            }else if(offset < 0){
                offset = offset*-1+1
            }else if(offset > 0){
                offset = offset*-1
            };
        };
        console.log('No frame in search range');
    };
};
function switchFrame(frameNum){
    if(window.webpSupport == true){
        resolvedPath = window.sequencePath+'.'+zFill(frameNum, 4)+'.webp';
    }else{
        resolvedPath = window.sequencePath+'.'+zFill(frameNum, 4)+'.jpg';
    };
    if(window.isOldBrowser){
        window.bgImg1.style['display'] = 'none';
        window.bgImg1.src = resolvedPath;
        window.setTimeout(switchSecondFrame, 12);
    }else{
        window.bgImg1.src = resolvedPath;
    };
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

function backgroundOnload(){
    webpSupportCheck();
};
function continueOnload(){
    console.log('Running onload functions.');
    window.isFirefox = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1);
    window.isIE = (window.ActiveXObject || 'ActiveXObject' in window);
    window.isOldBrowser = (window.isFirefox || window.isIE);
    
	window.bgDiv = document.getElementById('BackgroundContainer');
    window.bgImg1 = document.getElementById('BackgroundImg1');
    zoomCrop(window.bgImg1);
    window.bgImg1.style['display'] = '';
	window.sequencePath = window.bgImg1.getAttribute('src');
    window.sequencePath = window.sequencePath.rsplit('.',2)[0];
    if(window.webpSupport == false){
        window.sequencePath = window.sequencePath.replace('webpSequences', 'jpgSequences');
    };
	window.startFrame = parseInt(window.bgImg1.getAttribute('ABOUT'));
	window.endFrame = parseInt(window.bgImg1.title);
    
    if(window.isOldBrowser){
        window.bgImg2 = document.createElement('img');
        window.bgImg2.className = 'BackgroundImg';
        window.bgImg2.src = window.bgImg1.src;
        window.bgImg2.style['z-index'] = -101;
        window.bgDiv.appendChild(window.bgImg2);
        zoomCrop(window.bgImg2);
    };
    buildLoadingOrder();
    //return null;
    cacheFrames();
    animationLoop();
};
