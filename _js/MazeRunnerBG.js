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
function GetPackagePath(){
    var scripts = document.getElementsByTagName('script');
    for(var i=0;i<scripts.length;++i){
        var src = scripts[i].src;
        var split = src.split('/');
        var filename = split.slice(-1)[0];
        if(filename == 'MazeRunnerBG.js'){
            var split = scripts[i].src.split('/');
            var packagepath = split.slice(0, -2).join('/');
            return packagepath;
        };
    };
};
function MazeInit(){
    window.DemoMaze = new Windows95Maze(MazeCanvasID='MazeRunner',
                                        MazeWidth=50,
                                        MazeDepth=50,
                                        MazePosX=25,
                                        MazePosY=0,
                                        MazePosZ=25,
                                        EnableFloor=true,
                                        EnableCeiling=false,
                                        EnableWalls=true,
                                        EnableGlobe=false,
                                        EnableRats=true,
                                        EnableSigns=true,
                                        EnableSpinners=false,
                                        EnableStart=true,
                                        EnableEnd=false,
                                        
                                        MazeDebug=true,
                                        MazeAutopilot=true,
                                        MazeSpeed=4,
                                        MazeTickDelta=10,
                                        MazeCellSize=320,
                                        MazeHeight=260,
                                        MazeCameraInitY=CalculateCameraY(260),
                                        MazeFloorScale=2.5,
                                        MazeCeilingScale=2.5,
                                        
                                        EnableFog=true,
                                        FogColor=0x000000,
                                        FogNear=1000,
                                        FogFar=5000,
                                        
                                        WallsMaterialType='Lambert',
                                        WallsEmissiveColor=0x00FFFF,
                                        WallsEmissiveIntensity=0.5,
                                        
                                        MazeTexturePack=GetPackagePath()+'/_Assets/MazeRunner'
                                        );
    window.addEventListener('resize', ResizeHandling);
    window.addEventListener('keydown', KeyHandling);
    window.addEventListener('scroll', ScrollHandling);
}

function ResizeHandling(){
    window.DemoMaze.Resize();
}

function CalculateCameraY(MazeHeight){
    return (getTotalDocHeight()-getYPosition()) + (MazeHeight/2);
};

function ScrollHandling(event){
    //console.log(getYPosition(), getTotalDocHeight(), getYPosition()/getTotalDocHeight());
    var FooterHeight = document.getElementById('FooterContainer').clientHeight;
    if (window.DemoMaze.MazeCamera != null){ //Avoid trying to set camera Y before it's created
        window.DemoMaze.MazeCamera.position.y = CalculateCameraY(window.DemoMaze.MazeHeight);
    }
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
