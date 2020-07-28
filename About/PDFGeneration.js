////////////////////Dialog//////////////////////////
function ResumeDialog() {
    $( "#ResumeDialog" ).dialog({
            modal: true,
            autoOpen: false,
    });
    
    if ($('#JobTypeDropdownMenu').children().length == 0){
        window.JobTypes = {
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
                'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
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
                'Objective' : "I've built my career targeting the rapidly approaching convergence of the Visual Effects, Video Game, and Cloud Computing industries. I've mastered a broad toolset that allows me to design intricate software pipelines that bridge these industries together. My advanced programming skills, and my nose for business give me a unique ability to identify, engineer, and execute profitable software patterns.",
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
        }
        for (var title in window.JobTypes) {
            var JobData = window.JobTypes[title];
            //$('#JobTypeDropdownMenu').append('<a class="dropdown-item" href="#">'+title+'</a>');
            $('#JobTypeDropdownMenu').append('<a class="dropdown-item" href="javascript:void(0);" onclick="SetJobType(\''+title+'\');">'+title+'</a>');
        };
    };
    if ($('#DialogSkillsCloud').children().length == 0){
        var SkillSets = GetSkillSets();

        var SkillButtonClasses = [
            /*"SkillButtonDarkGrey",*/
            "SkillButtonRed",
            "SkillButtonOrange",
            "SkillButtonYellow",
            "SkillButtonGreen",
            "SkillButtonBlue",
            "SkillButtonViolet",
        ];
        var count = 0;
        for (var skillset in SkillSets){
            var SkillButtonClass = SkillButtonClasses[count];
            count += 1;
            for (var i = 0; i < SkillSets[skillset].length; i++){
                var Skill = SkillSets[skillset][i];
                $('#DialogSkillsCloud').append('<input class="SkillCheckBox '+SkillButtonClass+'" type="checkbox" checked autocomplete="off" id="cbox_'+Skill['title']+'">');
                $('#DialogSkillsCloud').append('<label class="btn checkbox SkillButton '+SkillButtonClass+'" for="cbox_'+Skill['title']+'">'+Skill['title']+'</label>');
                
            };
            $('#DialogSkillsCloud').append('<br/>');
        };
    };
    
    
    if ($('#DialogProjectsList').children().length == 0){
        for (var key in window.Projects){
            if (['pagination','remove','sortOn'].indexOf(key) == -1){
                var Project = window.Projects[key];
                $('#DialogProjectsList').append('<div class="CheckboxContainer"><input type="checkbox" checked autocomplete="off" id="pbox_'+Project['title'].replaceAll(' ','')+'" style="display:none;">'
                                                +'<label class="ProjectCheckBox" for="pbox_'+Project['title'].replaceAll(' ','')+'"></label>'
                                                +'<label class="ProjectLabel" for="pbox_'+Project['title'].replaceAll(' ','')+'">'+'<h5 style="color:#ffffff;">'+Project['title']+'</h5>'+'    '+Project['shortdescription']
                                                +'<span class="ProjectTagsSpan">'+Project['tags'].toString().replaceAll(',','')+'</span>'+'</label></div>');
            };
        };
    };
    

    //Show Dialog
    SetJobType('Software Engineer');
    disableScroll();
    $('#ResumeDialog').dialog('open');
    $('#DialogFocuser').css('display', 'block');
    $('#ResumeDialog').css('width', 'calc(82% - 80px)');
    $('#ResumeDialog').css('height', 'calc(82% - 80px)');
}

function enableScroll() {
    //console.log('enabling scroll');
    window.onscroll = window.old_onscroll;
}

function disableScroll() { 
    // Get the current page scroll position 
    window.old_onscroll = window.onscroll;

    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 

function CloseResumeDialog() {
    $('#ResumeDialog').dialog('close');
    $('#DialogFocuser').css('display', 'none');
    enableScroll();
}
////////////////////////////////////////////////////


///////////////////////Main/////////////////////////
function GenerateResume(){
    var JobTitle = GetJobTitle();
    var JobType = GetJobType();
    var ActiveSkills = GetActiveSkillList();
    var ActiveSkillSets = GetActiveSkillSets();
    var ActiveProjects = GetActiveProjectsList();
    var ActiveProjectsData = GetActiveProjectsData();

    console.log(JobTitle);
    console.log(JobType);
    console.log(ActiveSkills);
    console.log(ActiveSkillSets);
    console.log(ActiveProjects);
    console.log(ActiveProjectsData);

    var doc = PDFSetup();
    AddSEOData(doc);
    AddPageStyling(doc);

    var ycursor1 = 225;
    ycursor1 = AddNameAndTitle(doc, JobTitle, ycursor1);
    //AddSkills(doc, ActiveSkillSets, ycursor1);

    var ycursor2 = 130;
    var headerspace = 30;
    ycursor2 = AddProfileDetails(doc, JobTitle, ycursor2, headerspace);
    ycursor2 = AddAboutMe(doc, JobType['Objective'], ycursor2, headerspace);
    ycursor2 = AddProfessionalExperience(doc, ycursor2, headerspace);
    ycursor2 = AddEducation(doc, ycursor2, headerspace);

    var ImageData = CacheImages(ActiveProjectsData); //blocks until caching is complete
    AddProfileImages(doc, ImageData);
    //ycursor2 = AddProjects(doc, ActiveProjectsData, ImageData, ycursor2);

    PDFSave(doc, JobTitle);
}
//////////////////////////////////////////////////////


///////////////////Data Gathering/////////////////////
function SetJobTitle(JobTitle){
    //console.log('SetJobTitle');
    $('#JobTypeDropdownButton').text(JobTitle);
}

function GetJobTitle(){
    //console.log('GetJobTitle');
    return $('#JobTypeDropdownButton').text();
}

function SetJobType(JobTypeTitle){
    $('#JobTypeDropdownButton').text(JobTypeTitle);
    var JobData = window.JobTypes[JobTypeTitle];
    SetActiveSkillList(JobData['ActiveSkills']);
    SetActiveProjectsList(JobData['ActiveSkills']);
}

function GetJobType(){
    //console.log('GetJobType');
    return window.JobTypes[GetJobTitle()];
}

function GetSkillSets(){
    var SkillSets = {};
    for (var key in window.Skills){
        if (key != 'pagination'){
            var Skill = window.Skills[key];
            if (!(Skill['skillset'] in SkillSets)) {
                SkillSets[Skill['skillset']] = [];
            };
            SkillSets[Skill['skillset']].push(Skill);
        };
    };
    return SkillSets;
}

function GetActiveSkillSets(){
    var ActiveSkills = GetActiveSkillList();
    var SkillSets = {};
    for (var key in window.Skills){
        if (key != 'pagination'){
            var Skill = window.Skills[key];
            if (!(Skill['skillset'] in SkillSets)) {
                SkillSets[Skill['skillset']] = [];
            };
            if (ActiveSkills.indexOf(Skill['title']) > -1) {
                SkillSets[Skill['skillset']].push(Skill);
            };
        };
    };
    return SkillSets;
}

function SetActiveSkillList(ActiveSkills){
    $("[id^=cbox]").each(function() {
        var skillname = this.id.replaceAll('cbox_','');
        if (ActiveSkills.indexOf(skillname) > -1){
            this.checked = true;
        } else {
            this.checked = false;
        }
    });
}

function GetActiveSkillList(){
    var ActiveSkills = [];
    $("[id^=cbox]").each(function() {
        if (this.checked){
            ActiveSkills.push(this.id.replaceAll('cbox_',''));
        };
    });
    return ActiveSkills;
}

function SetActiveProjectsList(ActiveSkills){
    for (var key in window.Projects){
        if (['pagination','remove','sortOn'].indexOf(key) == -1){
            var Project = window.Projects[key];
            var pboxid = "pbox_"+Project['title'].replaceAll(' ','');
            var checkbox = document.getElementById(pboxid);
            checkbox.checked = false;
            for (var tag in Project['tags']) {
                var tagname = Project['tags'][tag].toString().replace(/[\r\n]+/gm, '');
                if (ActiveSkills.indexOf(tagname) > -1){
                    checkbox.checked = true;
                };
            };
        };
    };
}

function GetActiveProjectsList(){
    var ActiveProjects = [];
    $("[id^=pbox]").each(function() {
        if (this.checked){
            ActiveProjects.push(this.id.replaceAll('pbox_',''));
        };
    });
    return ActiveProjects;
}

function GetActiveProjectsData(){
    var Result = [];
    var ActiveProjects = GetActiveProjectsList();
    for (var a = 0; a < ActiveProjects.length; a++){
        var ProjectName = ActiveProjects[a];
        for (var i = 0; i < window.Projects.length; i++) {
            var Project = window.Projects[i];
            if (Project['title'].replaceAll(' ','') == ProjectName){
                Result.push(Project);
                break;
            };
        };
    };
    return Result;
}

function GetSEOTags(){
    var wordlisturl = window.location.href+'/WordList.csv';
    var wordlistdata = LoadPage(wordlisturl);
    var wordlistlines = wordlistdata.replace(/[\r\n]+/gm, '').split(',');
    return wordlistlines;
}
////////////////////////////////////////////////////


//doc.setFont('helvetica');
//doc.addFont('mesmerize-cd-lt-normal.ttf', 'mesmerize-cd-lt', 'normal');
//doc.setFont('mesmerize-cd-lt');
//doc.addFont('mesmerize-cd-sb-normal.ttf', 'mesmerize-cd-sb', 'normal');
//doc.setFont('mesmerize-cd-sb');


//////////////////Resume Content////////////////////
function PDFSetup(){
    var doc = new jsPDF('p', 'pt', 'letter');
    doc.setFontSize(12);
    doc.setTextColor(89, 92, 98);
    doc.setFont('helvetica');

    //doc.addPage();
    return doc;
}

function AddSEOData(doc, SEOTags){
    var SEOTags = GetSEOTags();
    var wordlisturl = window.location.href+'/WordList.csv';
    var wordlistdata = LoadPage(wordlisturl);
    var wordlistlines = wordlistdata.split('\n');
    doc.setTextColor(255, 255, 255);
    for (var i = 0; i < SEOTags.length; i++) {
        doc.text(SEOTags[i], 44, 20);
    };
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, doc.internal.pageSize.width, 25, 'F');
    doc.setTextColor(89, 92, 98);
}

function AddPageStyling(doc){
    doc.setFillColor(231, 221, 222);
    doc.rect(0, 0, doc.internal.pageSize.width, 115, 'F');
    doc.rect(0, 0, 50, doc.internal.pageSize.height, 'F');

    doc.setFillColor(149, 186, 155);
    doc.rect(0, 115, doc.internal.pageSize.width, 20, 'F');
    doc.setFillColor(242, 204, 168);
    doc.rect(0, 135, doc.internal.pageSize.width, 20, 'F');
    doc.setFillColor(246, 135, 128);
    doc.rect(0, 155, doc.internal.pageSize.width, 20, 'F');
    doc.setFillColor(227, 84, 104);
    doc.rect(0, 175, doc.internal.pageSize.width, 20, 'F');

    doc.setFillColor(51, 60, 67);
    doc.rect(50, 0, 176, doc.internal.pageSize.height, 'F');

    doc.setFillColor(240, 240, 240);
    doc.rect(60, 8, 156, 187, 'F');
}

function AddNameAndTitle(doc, PositionTitle, ycursor){
    doc.addFont('mesmerize-rg-normal.ttf', 'mesmerize-rg', 'normal');
    doc.setFont('mesmerize-rg');
    doc.setCharSpace(0);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFontStyle('normal');
    doc.text(GetFullName().toUpperCase(), 216, ycursor, {maxWidth: 156, align: "right"});
    ycursor += 45;
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.addFont('mesmerize-ul-normal.ttf', 'mesmerize-ul', 'normal');
    doc.setFont('mesmerize-ul');
    doc.setFontStyle('normal');
    doc.text(PositionTitle.toLowerCase(), 216, ycursor, {maxWidth: 156, align: "right"});
    ycursor += 40;

    return ycursor;
}

function AddProfileDetails(doc, PositionTitle, ycursor, headerspace) {
    doc.setTextColor(51, 60, 67);
    doc.setFontSize(12);
    doc.addFont('mesmerize-el-normal.ttf', 'mesmerize-el', 'normal');
    doc.setFont('mesmerize-el');
    doc.setFontStyle('normal');
    doc.text(GetProfileURL(), 250, ycursor, {align: "left"});
    ycursor += 20;
    doc.text(GetEmail(), 250, ycursor, {align: "left"});
    ycursor += 20;
    doc.text(GetPhone(), 250, ycursor, {align: "left"});
    ycursor += 20;
    doc.text(GetAddress(), 250, ycursor, {align: "left"});
    ycursor += 10;
    ycursor += headerspace;

    return ycursor;
}

function AddAboutMe(doc, AboutText, ycursor, headerspace){
    doc.setTextColor(51, 60, 67);
    doc.addFont('mesmerize-el-normal.ttf', 'mesmerize-el', 'normal');
    doc.setFont('mesmerize-el');
    doc.setFontStyle('normal');
    doc.setFontSize(16);
    doc.text('About Me', 250, ycursor, {align: "left"});
    ycursor += headerspace;//spacing
    doc.setFontSize(12);
    doc.text(AboutText, 260, ycursor, {maxWidth: 345, align: "left"});
    ycursor += Math.round(Math.ceil(doc.getTextWidth(AboutText) / 345) * 12);//spacing
    console.log('AboutMeasure');
    console.log(doc.getTextWidth(AboutText));
    console.log(doc.getTextWidth(AboutText) / 345);
    console.log(Math.ceil(doc.getTextWidth(AboutText) / 345));
    console.log(Math.ceil(doc.getTextWidth(AboutText) / 345) * 12.14);
    console.log(Math.round(Math.ceil(doc.getTextWidth(AboutText) / 345) * 12.14));
    //ycursor += 85; //measure text function?
    ycursor += headerspace; //spacing
    return ycursor;
}

function AddProfessionalExperience(doc, ycursor, headerspace) {
    var Jobs = [
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
    ]

    doc.addFont('mesmerize-rg-normal.ttf', 'mesmerize-rg', 'normal');
    doc.addFont('mesmerize-ul-normal.ttf', 'mesmerize-ul', 'normal');
    doc.addFont('mesmerize-el-normal.ttf', 'mesmerize-el', 'normal');

    doc.setTextColor(51, 60, 67);
    doc.setFont('mesmerize-el');
    doc.setFontStyle('normal');
    doc.setFontSize(16);
    doc.text('Experience', 250, ycursor, {align: "left"});
    ycursor += headerspace;//spacing

    for (var j=0; j < Jobs.length; j++){
        var job = Jobs[j];

        doc.setFont('mesmerize-rg');
        doc.setFontSize(12);
        doc.text(job[0], 280, ycursor, {maxWidth: 320, align: "left"});
        ycursor += Math.ceil(doc.getTextWidth(job[0]) / 320) * 15;//spacing

        doc.setFont('mesmerize-el');
        doc.setFontSize(10);
        doc.text(job[1], 280, ycursor, {maxWidth: 320, align: "left"});
        ycursor += Math.ceil(doc.getTextWidth(job[1]) / 320) * 15;//spacing

        doc.setFont('mesmerize-ul');
        doc.text(job[2], 280, ycursor, {maxWidth: 320, align: "left"});
        ycursor += Math.ceil(doc.getTextWidth(job[2]) / 320) * 15;//spacing

        doc.setFont('mesmerize-el');
        doc.text(job[3], 280, ycursor, {maxWidth: 320, align: "left"});
        ycursor += Math.ceil(doc.getTextWidth(job[3]) / 320 + 0.1) * 15;//spacing
        
        ycursor += 5;//spacing
    }
    ycursor += headerspace-15;
    return ycursor;
}

function AddEducation(doc, ycursor, headerspace) {
    var EducationText = [
        "Collins College - Tempe AZ",
        "BA in Digital Video Effects, 2007 to 2010",
        "",    
        "Hanford West High School - Hanford CA",
        " + CCNA 1-4, 2006-2007",
    ];

    doc.addFont('mesmerize-el-normal.ttf', 'mesmerize-el', 'normal');

    doc.setTextColor(51, 60, 67);
    doc.setFont('mesmerize-el');
    doc.setFontStyle('normal');
    doc.setFontSize(16);
    doc.text('Education', 250, ycursor, {align: "left"});
    ycursor += headerspace;

    doc.setFont('mesmerize-el');
    doc.setFontSize(10);
    for (var i=0; i < EducationText.length; i++){
        doc.text(EducationText[i], 260, ycursor, {maxWidth: 320, align: "left"});
        ycursor += 12;
    };

    return ycursor;
}

function AddSkills(doc, ActiveSkillsData){

}

function CacheImages(ActiveProjectsData) {
    var ImageCache = new Array;
    var ImageElements = {};
    
    /*
    for (var key in ActiveProjectsData) {
        var Project = ActiveProjectsData[key];
        var imgPath = Project['images'][0];
        ImageElements[key] = document.createElement('img');
        ImageElements[key].src = imgPath;
        ImageElements[key].style = 'display:none;';
    };
    */
    /*
    for (var i = 0; i < window.Projects.length; i++) {
        if(window.Projects[i]['images'].length > 0){
            var imgPath = window.Projects[i]['images'][0];
            //window.ImageCache[i] = new Image();
            //window.ImageCache[i].src = imgPath;
            
            window.ImageCache[i] = document.createElement('img');
            window.ImageCache[i].src = imgPath;
            window.ImageCache[i].style = 'display:none;';
        };
    };
    */

    ImageElements['ProfileImage'] = document.createElement('img');
    ImageElements['ProfileImage'].src = './_Assets/ProfileImage.jpg';
    ImageElements['ProfileImage'].style = 'display:none;';
    
    ImageElements['CodeWarsImage'] = document.createElement('img');
    ImageElements['CodeWarsImage'].src = './About/ResumeImages/CodeWars.png';
    ImageElements['CodeWarsImage'].style = 'display:none;';

    ImageElements['DockerHubImage'] = document.createElement('img');
    ImageElements['DockerHubImage'].src = './About/ResumeImages/DockerHub.png';
    ImageElements['DockerHubImage'].style = 'display:none;';

    ImageElements['GitHubImage'] = document.createElement('img');
    ImageElements['GitHubImage'].src = './About/ResumeImages/GitHub.png';
    ImageElements['GitHubImage'].style = 'display:none;';

    ImageElements['IMDBImage'] = document.createElement('img');
    ImageElements['IMDBImage'].src = './About/ResumeImages/IMDB.png';
    ImageElements['IMDBImage'].style = 'display:none;';

    ImageElements['LinkedInImage'] = document.createElement('img');
    ImageElements['LinkedInImage'].src = './About/ResumeImages/LinkedIn.png';
    ImageElements['LinkedInImage'].style = 'display:none;';

    waitforload = function() {
        for (var key in ImageElements){
            var Image = ImageElements[key];
            if (!Image.complete || Image.naturalWidth == 0 || Image.naturalWidth == 'undefined'){
                console.log('cache waiting for image');
                setTimeout(waitforload, 100);
                return;
            };  
        };
    };
    waitforload();
    console.log('Caching complete.');
    return ImageElements;
}

function AddProfileImages(doc, ImageElements) {
    console.log('AddProfileImages');
    doc.addImage(ImageElements['ProfileImage'], 'JPG', 69, 17, 136, 140);

    doc.addImage(ImageElements['GitHubImage'], 'PNG', 16, 116, 18, 18);
    doc.addImage(ImageElements['DockerHubImage'], 'PNG', 16, 136, 18, 18);
    doc.addImage(ImageElements['CodeWarsImage'], 'PNG', 16, 156, 18, 18);
    doc.addImage(ImageElements['IMDBImage'], 'PNG', 16, 176, 18, 18);
    //doc.addImage(ImageElements['LinkedInImage'], 'PNG', 16, 196, 18, 18);

    doc.link(16, 116, 18, 18, {url: GetGitHubURL()});
    doc.link(16, 136, 18, 18, {url: GetDockerHubURL()});
    doc.link(16, 156, 18, 18, {url: GetCodeWarsURL()});
    doc.link(16, 176, 18, 18, {url: GetIMDBURL()});
    //doc.link(16, 196, 18, 18, {url: GetLinkedInURL()});
}

function AddProjects(doc, ActiveProjectsData, ImageData) {
    var ImageYPosition = 220;
    var ProjectCounter = 1;
    
    for (var i = 0; i < window.Projects.length; i++) {
        if (ProjectCounter >= 5 && window.Projects.length > i+1) {
            ProjectCounter = 0;
            ImageYPosition = 78;
            PDFAddPage(doc);
        };
        doc.setFontStyle('bold');
        doc.setFontSize(16);
        doc.drawText(201, ImageYPosition+10, '.'+window.Projects[i]["title"]);
        doc.setFontStyle('normal');
        doc.setFontSize(10);
        doc.drawText(206, ImageYPosition+20, window.Projects[i]["date"]);
        doc.setFontSize(16);
        for (var j = 0; j < window.Projects[i]["shortdescription"].length; j++) {
            var descriptiontext = window.Projects[i]["shortdescription"][j];
            descriptiontext = descriptiontext.replaceAll('\n', '');
            descriptiontext = descriptiontext.replaceAll('\r', '');
            doc.drawText(201, ImageYPosition+18+20*(j+1), descriptiontext);
        };

        if(window.Projects[i]['images'].length > 0){
            var imgPath = window.Projects[i]['images'][0];
            var imgData = getBase64FromImageUrl(imgPath);
            if (window.Projects[i]['images'][0].rsplit('.',1)[-1] == 'jpg'){
                doc.addImage(imgData, 'JPEG', 1, ImageYPosition, 178, 100);
            } else if(window.Projects[i]['images'][0].rsplit('.',1)[-1] == 'png'){
                doc.addImage(imgData, 'PNG', 1, ImageYPosition, 178, 100);
            } else {
                doc.addImage(imgData, 'GIF', 1, ImageYPosition, 178, 100);
            };
        };
        ImageYPosition += 142;
        ProjectCounter += 1;
    };
}

function PDFAddPage(doc) {
    doc.addPage();
    doc.setFillColor(0);
    doc.rect(0, 0, 152, doc.internal.pageSize.height, 'F');
}

function PDFSave(doc, PositionTitle) {
    console.log('PDFSave');
    var date = new Date();
    doc.save('MadisonAster_'+PositionTitle.replaceAll(' ','')+'_Resume_'+date.yyyymmdd()+'.pdf');
}
////////////////////////////////////////////////////








/////////////Keeping for Reference//////////////////
    /*
    doc.autoTable(columns7, rows7, {
        theme: 'grid',
        startY: doc.autoTable.previous.finalY + 15,
        
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        styles: {
        overflow: 'hidden',
        },
        columnStyles: {
        id: {columnWidth: doc.internal.pageSize.width-80},
        },
        drawRow: function (row, data) {
            doc.setTextColor(89, 92, 98);
            if (row.index % 2 == 1) {
                doc.setTextColor(0, 0, 0);
            };
            if (row.index === 0) {
                doc.autoTableText("Professional Experience", 44, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
    */


function GenerateResumePDF(){
    var doc = ResumeSetup();
    ResumeContactDetails(doc, JobTitle);    
    ResumeProfile(doc, JobType['Objective']);
    ResumeKeySkills(doc, JobType['SkillsArray']);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    //ResumeExperienceTable(doc);
    ResumeSave(doc, JobTitle);
}

function ResumeExperienceTable(doc) {
    var nexty = 30;
    if(doc.autoTable.previous.finalY > 610) {
        doc.addPage();
    } else {
        nexty = doc.autoTable.previous.finalY + 15;
    }
    
    var columns8 = [
    {title: "", dataKey: "id"},
    ];
    var rows8 = [
    {"id": "This table is an attempt to list as many major skills and software applications I have practiced over my career. For each item I've listed the year I first encountered it, and my current level of mastery. Many of these items are at best only vaguely relevant to my current career path, however I've listed them here both to help catalog my history, and to give a brief overview of the totallity of the knowledge that I currently posess."},
    ];
    doc.autoTable(columns8, rows8, {
        theme: 'grid',
        startY: nexty,
        styles: {
        overflow: 'linebreak',
        },
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        drawRow: function (row, data) {
            doc.setTextColor(89, 92, 98);
            if (row.index === 0) {
                doc.autoTableText("Experience Table", 44, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
    var columns9 = [
    {title: "Name", dataKey: "Name"},
    {title: "FirstUse", dataKey: "FirstUse"},
    {title: "CurrentSkillLevel", dataKey: "CurrentSkillLevel"},
    ];
    
    var rows9 = [];
    var csvurl = window.location.href.rsplit('/',1)[0]+'/Favorites/Bookmarks/snapshot/xpTable.csv';
    var cvsdata = LoadPage(csvurl);
    var cvslines = cvsdata.split('\n');
    for (var i = 0; i < cvslines.length-2; i++) {
        var line = cvslines[i];
        var linedata = {};
        linedata['Name'] = line.split(">")[1].split("<")[0];
        linedata['href'] = line.split("href='")[1].split("'")[0];
        linedata['FirstUse'] = line.split(',')[1];
        linedata['CurrentSkillLevel'] = line.split(',')[2];
        rows9.push(linedata);
    };
    
    doc.autoTable(columns9, rows9, {
        theme: 'grid',
        startY: doc.autoTable.previous.finalY,        
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        styles: {
        halign: 'center',
        overflow: 'hidden',
        },
        columnStyles: {
        Name: {columnWidth: doc.internal.pageSize.width/3-27},
        FirstUse: {columnWidth: doc.internal.pageSize.width/3-27},
        CurrentSkillLevel: {columnWidth: doc.internal.pageSize.width/3-27},
        },
        drawRow: function (row, data) {
            row.height = 19;
        },
        drawCell: function(cell, data) {
            if (data.column.dataKey === 'Name') {
                doc.setTextColor(0, 0, 238);
                doc.link(cell.x, cell.y, cell.width, cell.height, {
                    url: rows9[data.row.index]['href']
                });
            };
        },
    });
}

function ResumeProfile(doc, Objective) {
    var columns4 = [
    {title: "", dataKey: "id"},
    {title: "", dataKey: "desc"},
    ];
    var rows4 = [
    {"id": "Objective:", "desc": Objective},
    {"id": "Availability:", "desc": GetAvailability()},
    ];
    doc.autoTable(columns4, rows4, {
        theme: 'grid',
        startY: doc.autoTable.previous.finalY + 15,
        
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        styles: {
        overflow: 'linebreak',
        },
        columnStyles: {id: {columnWidth: 100}},
        drawRow: function (row, data) {
            doc.setFontSize(12);
            doc.setFontStyle('bold');
            doc.setTextColor(89, 92, 98);
            doc.setFont('helvetica');
            if (row.index === 0) {
                doc.autoTableText("Profile", 44, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
}

function ResumeKeySkills(doc, SkillsArray) {
    var columns5 = [
    {title: "", dataKey: "id"},
    {title: "", dataKey: "desc"},
    ];
    doc.autoTable(columns5, SkillsArray, {
        theme: 'grid',
        startY: doc.autoTable.previous.finalY + 15,
        
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        styles: {
        overflow: 'linebreak',
        },
        columnStyles: {id: {columnWidth: 100}},
        drawRow: function (row, data) {
            doc.setFontSize(12);
            doc.setFontStyle('bold');
            doc.setTextColor(89, 92, 98);
            doc.setFont('helvetica');
            if (row.index === 0) {
                doc.autoTableText("Key Skills", 44, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
}

function ResumeSetup(){
    var doc = new jsPDF('p', 'pt', 'letter');
    doc.setFontSize(12);
    doc.setTextColor(89, 92, 98);
    doc.setFont('helvetica');

    doc.autoTableSetDefaults({
        headerStyles: {
            fontStyle: 'bold',
            font: "helvetica",
            textColor: [89, 92, 98],
            lineColor: [174, 186, 213],
            fillColor: [234, 237, 244],
        },
        columnStyles: {
            font: "helvetica",
            textColor: [89, 92, 98],
            lineWidth: 1,
            lineColor: [174, 186, 213],
            id: {fontStyle: 'bold'}
        },
    });
    
    var wordlisturl = window.location.href+'/WordList.csv';
    var wordlistdata = LoadPage(wordlisturl);
    var wordlistlines = wordlistdata.split('\n');
    doc.setTextColor(255, 255, 255);
    for (var i = 0; i < wordlistlines.length; i++) {
        doc.text(wordlistlines[i].replace(',',''), 44, 20);
    };
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, doc.internal.pageSize.width, 25, 'F');
    doc.setTextColor(89, 92, 98);
    
    return doc;
}

function ResumeContactDetails(doc, PositionTitle) {
    var columns1 = [
        {title: "", dataKey: "id"},
    ];
    var rows1 = [
        {"id": PositionTitle},
    ];
    doc.autoTable(columns1, rows1, {
        theme: 'grid',
        startY: 30,
        margin: {right: doc.internal.pageSize.width/2+5},
        
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        drawRow: function (row, data) {
            doc.setFontSize(12);
            doc.setFontStyle('bold');
            doc.setTextColor(89, 92, 98);
            doc.setFont('helvetica');
            if (row.index === 0) {
                doc.autoTableText("Madison Aster", 44, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
    
    doc.setFontSize(8);
    doc.text('Resume generated '+GetGenerationDate(), 44, doc.autoTable.previous.finalY + 14);
    doc.setFontSize(12);
    
    var columns2 = [
    {title: "", dataKey: "id"},
    ];
    var rows2 = [
    {"id": GetPhone()+"\n"+GetEmail()},
    ];
    doc.autoTable(columns2, rows2, {
        theme: 'grid',
        startY: 30,
        margin: {left: doc.internal.pageSize.width/2+5},
        
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        drawRow: function (row, data) {
            doc.setFontSize(12);
            doc.setFontStyle('bold');
            doc.setTextColor(89, 92, 98);
            doc.setFont('helvetica');
            if (row.index === 0) {
                doc.autoTableText("Contact", doc.internal.pageSize.width/2+10, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
    
    var columns3 = [
    {title: "", dataKey: "id"},
    ];
    var rows3 = [
    {"id": GetAddress()},
    ];
    doc.autoTable(columns3, rows3, {
        theme: 'grid',
        startY: doc.autoTable.previous.finalY + 15,
        
        tableLineColor: [174, 186, 213],
        tableLineWidth: 1,
        drawRow: function (row, data) {
            doc.setFontSize(12);
            doc.setFontStyle('bold');
            doc.setTextColor(89, 92, 98);
            doc.setFont('helvetica');
            if (row.index === 0) {
                doc.autoTableText("Location", 44, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
}
////////////////////////////////////////////////////
