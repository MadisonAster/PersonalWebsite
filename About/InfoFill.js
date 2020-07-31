function GetConfigData(){
    if (window.ConfigData == null){
        var configurl = window.location.href.rsplit('/',1)[0]+'/_config/myuserconfig.yaml';
        var ConfigFileData = LoadPage(configurl);
        var ConfigFileLines = ConfigFileData.split('\n');
        window.ConfigData = {};
        for (var Line in ConfigFileLines){
            var Line = ConfigFileLines[Line].toString();
            var key = Line.split(': ')[0];
            var val = Line.split(': ')[1];
            window.ConfigData[key] = val;
        };
    };
};

function GetFullName() {
    GetConfigData();
    return window.ConfigData['FullName'];
};

function GetGitHubURL() {
    GetConfigData();
    return window.ConfigData['GitHub_SnapshotURL'];
    //return window.ConfigData['GitHub_ResumeURL'];
};

function GetDockerHubURL() {
    GetConfigData();
    return window.ConfigData['DockerHub_SnapshotURL'];
    //return window.ConfigData['DockerHub_ResumeURL'];
};

function GetIMDBURL() {
    GetConfigData();
    return window.ConfigData['IMDB_SnapshotURL'];
    //return window.ConfigData['IMDB_ResumeURL'];
};

function GetCodeWarsURL(){
    GetConfigData();
    return window.ConfigData['CodeWars_SnapshotURL'];
    //return window.ConfigData['CodeWars_ResumeURL'];
};

function GetLinkedInURL(){
    GetConfigData();
    return window.ConfigData['LinkedIn_SnapshotURL'];
    //return window.ConfigData['LinkedIn_ResumeURL'];
};

function GetPhone() {
    GetConfigData();
    return window.ConfigData['PhoneNumber'];
};

function GetProfileURL() {
    GetConfigData();
    return window.ConfigData['ProfileURL'];
};

function GetEmail() {
    GetConfigData();
    return window.ConfigData['EmailAddress'];
};

function GetAddress() {
    GetConfigData();
    return window.ConfigData['Address'];
};

function GetAvailability() {
    GetConfigData();
    return window.ConfigData['Availability'];
};

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

function GetGenerationDate() {
    return new Date().toLocaleString();
};

function DecodeData(InputData) {
    var result = window.atob(InputData);
    return result;
};

function EncodeData(InputData) {
    var result = window.btoa(InputData);
    alert(result);
    return result;
};

function LoadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
};

function GetSkillCategories(){
  return [
      'Programming Languages',
      'Programming Libraries',
      'Programming Tools',
      '3D Tools',
      '2D Tools',
      'Business Tools',
  ];
};

function GetEducationText(){
    return [
        'Collins College - 2007 to 2010 - Tempe AZ',
        'BA in Digital Video Effects',
        '',    
        'Hanford West High School - 2006 to 2007 - Hanford CA',
        'Graduated 2007 + CCNA 1-4',
    ];
};

function GetProfessionalJobs(){
    return [
        [
        'Senior 3D Pipeline Developer',
        'Saatchi & Saatchi - 555 Aviation blvd, El Segundo CA 310-214-6000',
        'Nov 2017 – May 2020, 2 years 7 months',
        'Conceived, built, and maintained a series of projects for processing Engineering data from Toyota Motors for the automotive advertising industry.',
        ],
        [
        'Senior Software Developer',
        'Cognition LA - 900 Cahuenga blvd, Hollywood CA 323-874-4487',
        'Apr 2015 – Oct 2017, 2 years 7 months',
        'Built a series of experimental game projects with a variety of experimental VR hardware.',
        ],
        [
        'VFX Pipeline Developer',
        'Lit Post - 2255 N Ontario st ste 100A, Burbank CA',
        'Nov 2011 – Mar 2015, 3 years 5 months',
        'Architected and Implemented a custom VFX pipeline to connect 3D, Compositing, and Color departments.',
        ],
    ];
};

function GetProfessionalJobIcons(){
    return [
        './About/ResumeImages/SaatchiLogo.png',
        './About/ResumeImages/CognitionLogo.png',
        './About/ResumeImages/LitLogo.png',
    ];
};

function GetProfessionalJobURLs(){
    return [
        'http://3d.saatchila.com',
        'https://cognition.la',
        'http://www.litpost.com',
    ];
};

function GetDefaultJobType(){
    //console.log('GetDefaultJobType');
    return 'Software Engineer';
};

function GetJobTypesInfo(){
    return {
        'Principal Engineer' : {
            'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "CSS", "Java", "ActionScript", "SQL", "x86 Assembly", "VBA", "Bash", "Vulkan", "WebGL", "OpenGL", "Qt", "Tensorflow", "Django", "Raspberry Pi", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "Boujou", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Fusion360", "Alias", "Maya", "ZBrush", "Substance Designer", "Cinema 4D", "LightWave 3D", "Blender", "3D Printing", "Softimage", "Nuke", "Fusion", "Photoshop", "Flame", "Premier", "Avid", "Final Cut Pro", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Patent Authoring", "Excel", "LiveCycle", "Access", "Shotgun", "FileMaker Pro", "Smart Sheets", "LiquidPlanner"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Lead Engineer' : {
            'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "CSS", "Java", "ActionScript", "SQL", "x86 Assembly", "VBA", "Bash", "Vulkan", "WebGL", "OpenGL", "Qt", "Tensorflow", "Django", "Raspberry Pi", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "Boujou", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Fusion360", "Alias", "Maya", "ZBrush", "Substance Designer", "Cinema 4D", "LightWave 3D", "Blender", "3D Printing", "Softimage", "Nuke", "Fusion", "Photoshop", "Flame", "Premier", "Avid", "Final Cut Pro", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Patent Authoring", "Excel", "LiveCycle", "Access", "Shotgun", "FileMaker Pro", "Smart Sheets", "LiquidPlanner"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Software Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "HTML", "PHP", "Javascript", "CSS", "Java", "ActionScript", "SQL", "x86 Assembly", "VBA", "Vulkan", "WebGL", "OpenGL", "Qt", "Tensorflow", "Django", "Windows", "Linux", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Terraform", "Unreal", "Unity", "RealityCapture", "Houdini", "Maya", "3D Printing", "Nuke", "Ffmpeg", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Patent Authoring", "Excel", "LiveCycle", "Access", "Shotgun", "FileMaker Pro", "Smart Sheets", "LiquidPlanner"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Graphics Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "HTML", "PHP", "Javascript", "CSS", "Vulkan", "WebGL", "OpenGL", "Qt", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Maya", "ZBrush", "Cinema 4D", "LightWave 3D", "Softimage", "Nuke", "Photoshop", "Flame", "Premier", "Avid", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Shotgun", "FileMaker Pro", "Smart Sheets"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Full Stack Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "HTML", "PHP", "Javascript", "CSS", "SQL", "WebGL", "Qt", "Tensorflow", "Django", "Windows", "Linux", "Git", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Maya", "Nuke", "Photoshop", "Ffmpeg", "After Effects", "Illustrator", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Excel", "LiveCycle"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'DevOps Engineer': {
            'ActiveSkills' : ["Python", "Bash", "C++", "HTML", "PHP", "SQL", "Qt", "Django", "Windows", "Linux", "Git", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Maya", "Nuke", "Ffmpeg", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Excel", "LiveCycle", "Access", "Shotgun", "FileMaker Pro", "Smart Sheets", "LiquidPlanner"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Backend Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "HTML", "PHP", "Javascript", "Java", "SQL", "x86 Assembly", "VBA", "WebGL", "Qt", "Tensorflow", "Django", "Windows", "Linux", "Android", "Git", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Maya", "Nuke", "Photoshop", "Ffmpeg", "After Effects", "Illustrator", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Excel", "LiveCycle"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Frontend Engineer' : {
            'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "CSS", "Java", "ActionScript", "SQL", "Vulkan", "WebGL", "OpenGL", "Qt", "Tensorflow", "Django", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "VR", "Maya", "Cinema 4D", "Nuke", "Photoshop", "Premier", "Avid", "Final Cut Pro", "Ffmpeg", "Color Science", "After Effects", "Illustrator", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Excel", "LiveCycle", "Shotgun"],
            'Objective' : "Slick graphics require a slick toolset, and an objective understanding of the strengths and limitations of the modern browser. Javascript is much more powerful in my hands than in yours. Grant me your trust as a client and I will blow your hair back.",
        },
        'VFX Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "HTML", "PHP", "Javascript", "CSS", "Vulkan", "WebGL", "OpenGL", "Qt", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "Boujou", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Fusion360", "Alias", "Maya", "ZBrush", "Substance Designer", "Cinema 4D", "LightWave 3D", "Blender", "3D Printing", "Softimage", "Nuke", "Fusion", "Photoshop", "Flame", "Premier", "Avid", "Final Cut Pro", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Excel", "Shotgun", "FileMaker Pro", "Smart Sheets", "LiquidPlanner"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'AI Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "HTML", "PHP", "Javascript", "CSS", "Java", "SQL", "x86 Assembly", "Vulkan", "WebGL", "OpenGL", "Qt", "Tensorflow", "Raspberry Pi", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Agisoft Photoscan", "RealityCapture", "PFTrack", "Maya", "Nuke", "Ffmpeg", "CCNA", "Excel"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Game Developer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "Javascript", "ActionScript", "Vulkan", "WebGL", "OpenGL", "Qt", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "Boujou", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Fusion360", "Alias", "Maya", "ZBrush", "Substance Designer", "Cinema 4D", "LightWave 3D", "Blender", "3D Printing", "Softimage", "Nuke", "Photoshop", "Flame", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Project Management", "Systems Administration", "CCNA", "Excel", "Shotgun", "FileMaker Pro", "Smart Sheets"],
            'Objective' : "Asynchronous graphics routines are what I live for. Complex user inputs, experimental devices, character rigs, cloth physics, facial morphs, and high quality texture & asset pipelines are all core competencies for me. Automation and long term evolution is the best way to master these technologies and deploy them at scale.",
        },
        'Gameplay Programmer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "Javascript", "ActionScript", "Vulkan", "WebGL", "OpenGL", "Qt", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "Boujou", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Fusion360", "Alias", "Maya", "ZBrush", "Substance Designer", "Cinema 4D", "LightWave 3D", "Blender", "3D Printing", "Softimage", "Nuke", "Photoshop", "Flame", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Project Management", "Systems Administration", "CCNA", "Excel", "Shotgun", "FileMaker Pro", "Smart Sheets"],
            'Objective' : "Asynchronous graphics routines are what I live for. Complex user inputs, experimental devices, character rigs, cloth physics, facial morphs, and high quality texture & asset pipelines are all core competencies for me. Automation and long term evolution is the best way to master these technologies and deploy them at scale.",
        },
        'Embedded Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "Java", "x86 Assembly", "Raspberry Pi", "Windows", "Linux", "Android", "Git", "Docker", "Unreal", "Unity", "Fusion360", "Alias", "Maya", "Blender", "3D Printing", "Nuke", "Ffmpeg", "Systems Administration", "CCNA", "Excel"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Robotics Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "Java", "x86 Assembly", "Raspberry Pi", "Windows", "Linux", "Android", "Git", "Docker", "Unreal", "Unity", "Fusion360", "Alias", "Maya", "Blender", "3D Printing", "Nuke", "Ffmpeg", "Systems Administration", "CCNA", "Excel"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
        'Electronics Engineer' : {
            'ActiveSkills' : ["Python", "Bash", "C++", "Java", "x86 Assembly", "Raspberry Pi", "Windows", "Linux", "Android", "Git", "Docker", "Unreal", "Unity", "Fusion360", "Alias", "Maya", "Blender", "3D Printing", "Nuke", "Ffmpeg", "Systems Administration", "CCNA", "Excel"],
            'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
        },
    };
};