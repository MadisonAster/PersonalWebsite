function getDocWidth(){
    return document.documentElement.clientWidth;
};
function getTotalDocHeight(){
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    return height;
};
function getYPosition(){
	//return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    console.log('window.pageYOffset', window.pageYOffset);
    console.log('document.documentElement.scrollBottom', document.documentElement.scrollBottom);
    console.log('document.documentElement.clientBottom', document.documentElement.clientBottom);
	return (window.pageYOffset || document.documentElement.scrollBottom)  - (document.documentElement.clientBottom || 0);
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
    console.log(getYPosition(), getTotalDocHeight(), getYPosition()/getTotalDocHeight());
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
