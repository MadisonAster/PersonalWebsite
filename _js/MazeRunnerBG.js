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
function GetAnimationSpeed(){
    var parser = new UAParser([navigator.userAgent]);
    e = parser.getEngine().name;
    if (e == 'EdgeHTML') {
        return 10;
    } else if(e == 'Gecko') {
        if (IsMobile()){return 10};
        return 2;
    } else if(e == 'Blink') {
        if (IsMobile()){return 5};
        return 2;
    } else if(e == 'WebKit') { 
        if (IsMobile()){return 5}; //Check ios safari speed
        return 2; //Check osx safari speed
    } else {
        return 2;
    }
}
function IsMobile(){
    var parser = new UAParser([navigator.userAgent]);
    if (parser.getDevice().type != null){
        return true
    } else {
        return false
    }
}
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
    var MazeTexturePack = GetPackagePath()+'/_Assets/MazeRunner';
    var CoolWallsFolder = MazeTexturePack+'/CoolWalls'
    var CoolWallList = [
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/CellBodyField.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/CellCrowdReaction.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/DesertStars.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/FollowCar.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/GorillaGlue.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/HellAndBackCarnival.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/HellAndBackVortex.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/IceWorld01.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/JimJonesSuicide.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/JonesTownAerial.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/Mabeline01.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/Mabeline02.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/Mabeline03.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/Mabeline04.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/Mabeline05.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/MSMoveJump.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/Palmyra01.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/SacramentMountains.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/SantaClausFlamer.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/SapphireEye.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/ScavengersShip.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/UTBKidParticles.jpg',
        PackagePath+'/Projects/010VFX Demo Reel/VideoClips/UTBWombParticles.jpg',
        CoolWallsFolder+'/001.jpg',
        CoolWallsFolder+'/002.jpg',
        CoolWallsFolder+'/003.jpg',
        CoolWallsFolder+'/004.jpg',
        CoolWallsFolder+'/005.jpg',
        CoolWallsFolder+'/006.jpg',
        CoolWallsFolder+'/007.jpg',
        CoolWallsFolder+'/008.jpg',
        CoolWallsFolder+'/009.jpg',
        CoolWallsFolder+'/010.jpg',
        CoolWallsFolder+'/011.jpg',
        CoolWallsFolder+'/012.jpg',
        CoolWallsFolder+'/013.jpg',
        CoolWallsFolder+'/014.jpg',
        CoolWallsFolder+'/015.jpg',
        CoolWallsFolder+'/016.jpg',
        CoolWallsFolder+'/017.jpg',
        CoolWallsFolder+'/018.jpg',
        CoolWallsFolder+'/019.jpg',
        CoolWallsFolder+'/020.jpg',
        CoolWallsFolder+'/021.jpg',
        CoolWallsFolder+'/022.jpg',
        CoolWallsFolder+'/023.jpg',
        CoolWallsFolder+'/024.jpg',
        CoolWallsFolder+'/025.jpg',
        CoolWallsFolder+'/026.jpg',
        CoolWallsFolder+'/027.jpg',
        CoolWallsFolder+'/028.jpg',
        CoolWallsFolder+'/029.jpg',
        CoolWallsFolder+'/030.jpg',
        CoolWallsFolder+'/031.jpg',
        CoolWallsFolder+'/032.jpg',
        CoolWallsFolder+'/033.jpg',
        CoolWallsFolder+'/034.jpg',
        CoolWallsFolder+'/035.jpg',
        CoolWallsFolder+'/036.jpg',
        CoolWallsFolder+'/037.jpg',
        CoolWallsFolder+'/038.jpg',
        CoolWallsFolder+'/039.jpg',
        CoolWallsFolder+'/040.jpg',
        CoolWallsFolder+'/041.jpg',
        CoolWallsFolder+'/042.jpg',
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
                                        EnableCoolWalls=!IsMobile(),
                                        EnableLights=!IsMobile(),
                                        EnableRats=true,
                                        EnableSigns=true,
                                        EnableSpinners=false,
                                        EnableStart=true,
                                        EnableEnd=false,
                                        
                                        MazeDebug=false,
                                        MazeAutopilot=false,
                                        MazeIntroAnimation=false,
                                        MazeSpeed=GetAnimationSpeed(),
                                        //MazeTickDelta=10,
                                        MazeTickDelta=50,
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
                                        CoolWallRarity=10,
                                        CoolWallZoomCrop=true,
                                        
                                        LightColor=0xFFFFFF,
                                        LightIntensity=2,
                                        LightDecay=2.0,
                                        LightDistance=960,
                                        
                                        MazeTexturePack=MazeTexturePack,
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
        if (y <= window.DemoMaze.MazeHeight/2+50) {
            if (!window.DemoMaze.MazeAutopilot){
                setTimeout(function(){window.DemoMaze.MazeAutopilot = true;}, 300);
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
