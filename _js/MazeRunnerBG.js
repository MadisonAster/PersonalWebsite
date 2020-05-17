function getDocWidth(){
    return document.documentElement.clientWidth;
};
function getDocHeightBG(){
    return document.documentElement.clientHeight;
};
function getYPosition(){
	return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
};

function MazeInit(){
    window.DemoMaze = new Windows95Maze('MazeRunner',12,12);
    window.addEventListener('resize', ResizeHandling);
    window.addEventListener('keydown', KeyHandling);
    window.addEventListener('scroll', ScrollHandling);
}

function ResizeHandling(){
    window.DemoMaze.Resize();
}

function ScrollHandling(event){
    
    console.log(getYPosition(), getDocHeightBG(), getDocHeightBG()/getYPosition());
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
