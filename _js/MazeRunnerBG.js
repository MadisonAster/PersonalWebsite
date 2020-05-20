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
    var PackagePath = GetPackagePath();
    var CoolWallList = [
        PackagePath+'/_Assets/VSVideo/CellBodyField.jpg',
        PackagePath+'/_Assets/VSVideo/CellCrowdReaction.jpg',
        PackagePath+'/_Assets/VSVideo/DesertStars.jpg',
        PackagePath+'/_Assets/VSVideo/FollowCar.jpg',
        PackagePath+'/_Assets/VSVideo/GorillaGlue.jpg',
        PackagePath+'/_Assets/VSVideo/HellAndBackCarnival.jpg',
        PackagePath+'/_Assets/VSVideo/HellAndBackVortex.jpg',
        PackagePath+'/_Assets/VSVideo/IceWorld01.jpg',
        PackagePath+'/_Assets/VSVideo/JimJonesSuicide.jpg',
        PackagePath+'/_Assets/VSVideo/JonesTownAerial.jpg',
        PackagePath+'/_Assets/VSVideo/Mabeline01.jpg',
        PackagePath+'/_Assets/VSVideo/Mabeline02.jpg',
        PackagePath+'/_Assets/VSVideo/Mabeline03.jpg',
        PackagePath+'/_Assets/VSVideo/Mabeline04.jpg',
        PackagePath+'/_Assets/VSVideo/Mabeline05.jpg',
        PackagePath+'/_Assets/VSVideo/MSMoveJump.jpg',
        PackagePath+'/_Assets/VSVideo/Palmyra01.jpg',
        PackagePath+'/_Assets/VSVideo/SacramentMountains.jpg',
        PackagePath+'/_Assets/VSVideo/SantaClausFlamer.jpg',
        PackagePath+'/_Assets/VSVideo/SapphireEye.jpg',
        PackagePath+'/_Assets/VSVideo/ScavengersShip.jpg',
        PackagePath+'/_Assets/VSVideo/UTBKidParticles.jpg',
        PackagePath+'/_Assets/VSVideo/UTBWombParticles.jpg',
    ];
    window.DemoMaze = new Windows95Maze(MazeCanvasID='MazeRunner',
                                        MazeWidth=50,
                                        MazeDepth=50,
                                        MazePosX=25,
                                        MazePosY=0,
                                        MazePosZ=25,
                                        EnableFloor=true,
                                        EnableCeiling=false,
                                        EnableWalls=true,
                                        EnableGlobe=true,
                                        EnableRats=true,
                                        EnableSigns=true,
                                        EnableSpinners=false,
                                        EnableStart=true,
                                        EnableEnd=false,
                                        
                                        MazeDebug=true,
                                        MazeAutopilot=false,
                                        MazeSpeed=2,
                                        MazeTickDelta=10,
                                        MazeCellSize=320,
                                        MazeHeight=260,
                                        MadzeCameraInitY=CalculateCameraY(260),
                                        MazeFloorScale=2.5,
                                        MazeCeilingScale=2.5,
                                        
                                        EnableFog=true,
                                        FogColor=0x000000,
                                        FogNear=1000,
                                        FogFar=5000,
                                        
                                        WallsMaterialType='Phong',
                                        WallsEmissiveColor=0xFFFFFF,
                                        WallsEmissiveIntensity=2,
                                        WallsSpecular=0x999999,
                                        WallsShininess=2,
                                        CoolWallRarity=20,
                                        CoolWallZoomCrop=true,
                                        
                                        LightColor=0xFFFFFF,
                                        LightIntensity=2,
                                        LightDecay=2.0,
                                        LightDistance=960,
                                        
                                        MazeTexturePack=GetPackagePath()+'/_Assets/MazeRunner',
                                        MazeCoolWallList=CoolWallList,
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
        var y = CalculateCameraY(window.DemoMaze.MazeHeight);
        window.DemoMaze.MazeCamera.position.y = y;
        if (y == window.DemoMaze.MazeHeight/2) {
            if (!window.DemoMaze.MazeAutopilot){
                setTimeout(function(){window.DemoMaze.MazeAutopilot = true;}, 1000);
            };
        } else {
            window.DemoMaze.MazeAutopilot = false;
        }
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
