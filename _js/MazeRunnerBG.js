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
    var YOffset = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    return Math.ceil(YOffset + document.body.clientHeight);
};

function MazeInit(){
    window.DemoMaze = new Windows95Maze(MazeCanvasID='MazeRunner',
                                        MazeWidth=20,
                                        MazeDepth=20,
                                        EnableFloor=true,
                                        EnableCeiling=false,
                                        EnableWalls=true,
                                        EnableRats=false,
                                        EnableSigns=true,
                                        EnableSpinners=false,
                                        EnableStart=false,
                                        EnableEnd=false);
    window.addEventListener('resize', ResizeHandling);
    window.addEventListener('keydown', KeyHandling);
    window.addEventListener('scroll', ScrollHandling);
}

function ResizeHandling(){
    window.DemoMaze.Resize();
}

function CalculateCameraY(){
    return (getTotalDocHeight()-getYPosition()) + (window.DemoMaze.MazeHeight/2);
};

function ScrollHandling(event){
    //console.log(getYPosition(), getTotalDocHeight(), getYPosition()/getTotalDocHeight());
    var FooterHeight = document.getElementById('FooterContainer').clientHeight;
    window.DemoMaze.MazeCamera.position.y = 
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
