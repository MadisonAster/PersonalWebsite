function loadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

function ResumeDialog() {
    $( "#ResumeDialog" ).dialog({
            modal: true,
            autoOpen: false,
    });
    
    if ($('#JobTypeDropdownMenu').children().length == 0){
        window.JobTypes = {
            'Software Engineer' : {
                'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "CSS", "Java", "ActionScript", "SQL", "x86 Assembly", "VBA", "Vulkan", "WebGL", "OpenGL", "Qt", "Tensorflow", "Django", "Windows", "Linux", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Terraform", "Unreal", "Unity", "RealityCapture", "Houdini", "Maya", "3D Printing", "Nuke", "Ffmpeg", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Patent Authoring", "Excel", "LiveCycle", "Access", "Shotgun", "FileMaker Pro", "Smart Sheets", "LiquidPlanner"],
                'Objective' : 'Looking .',
                'SkillsArray' : [
                    {"id": "Python:", "desc": "5 Years professional experience"},
                    {"id": "C++/UE4 Blueprint:", "desc": "2 Years development experience. Oculus, Vive, Daydream, Leap Motion, Virtuix Omni"},
                    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
                    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
                    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
                ],
            },
            'Graphics Engineer' : {
                'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "CSS", "Vulkan", "WebGL", "OpenGL", "Qt", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Maya", "ZBrush", "Cinema 4D", "LightWave 3D", "Softimage", "Nuke", "Photoshop", "Flame", "Premier", "Avid", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Shotgun", "FileMaker Pro", "Smart Sheets"],
                'Objective' : 'Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.',
                'SkillsArray' : [
                    {"id": "Python:", "desc": "5 Years experience"},
                    {"id": "C++/UE4 Blueprint:", "desc": "2 Years experience"},
                    {"id": "Nuke Python API", "desc": "3 Years professional experience"},
                    {"id": "DI Finishing Pipeline", "desc": "1 Year professional experience"},
                    {"id": "Maya Pipeline", "desc": "1 Year professional experience"},
                    {"id": "VFX Compositing", "desc": "1 Years professional experience"},
                    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
                    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
                    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
                ],
            },
            'Full Stack Engineer' : {
                'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "CSS", "SQL", "WebGL", "Qt", "Tensorflow", "Django", "Windows", "Linux", "Git", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Maya", "Nuke", "Photoshop", "Ffmpeg", "After Effects", "Illustrator", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Excel", "LiveCycle"],
                'Objective' : 'Looking for work on highly modular software projects with long evolution curves.',
                'SkillsArray' : [
                    {"id": "Python:", "desc": "5 years professional experience"},
                    {"id": "PySide/PyQt:", "desc": "2 years professional experience"},
                    {"id": "C++:", "desc": "2 years professional experience"},
                    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
                    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
                    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
                ],
            },
            'Backend Engineer' : {
                'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "Java", "SQL", "x86 Assembly", "VBA", "WebGL", "Qt", "Tensorflow", "Django", "Windows", "Linux", "Android", "Git", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Maya", "Nuke", "Photoshop", "Ffmpeg", "After Effects", "Illustrator", "Project Management", "Systems Administration", "Thinstall", "CCNA", "Excel", "LiveCycle"],
                'Objective' : 'Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.',
                'SkillsArray' : [
                    {"id": "Python:", "desc": "5 Years experience"},
                    {"id": "C++/UE4 Blueprint:", "desc": "2 Years experience"},
                    {"id": "Nuke Python API", "desc": "3 Years professional experience"},
                    {"id": "DI Finishing Pipeline", "desc": "1 Year professional experience"},
                    {"id": "Maya Pipeline", "desc": "1 Year professional experience"},
                    {"id": "VFX Compositing", "desc": "1 Years professional experience"},
                    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
                    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
                    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
                ],
            },
            'VFX Engineer' : {
                'ActiveSkills' : ["Python", "C++", "HTML", "PHP", "Javascript", "CSS", "Vulkan", "WebGL", "OpenGL", "Qt", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Maya", "ZBrush", "Cinema 4D", "LightWave 3D", "Softimage", "Nuke", "Photoshop", "Flame", "Premier", "Avid", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Shotgun", "FileMaker Pro", "Smart Sheets"],
                'Objective' : 'Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.',
                'SkillsArray' : [
                    {"id": "Python:", "desc": "5 Years experience"},
                    {"id": "C++/UE4 Blueprint:", "desc": "2 Years experience"},
                    {"id": "Nuke Python API", "desc": "3 Years professional experience"},
                    {"id": "DI Finishing Pipeline", "desc": "1 Year professional experience"},
                    {"id": "Maya Pipeline", "desc": "1 Year professional experience"},
                    {"id": "VFX Compositing", "desc": "1 Years professional experience"},
                    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
                    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
                    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
                ],
            },
            'Game Developer' : {
                'ActiveSkills' : ["Python", "C++", "Javascript", "ActionScript", "Vulkan", "WebGL", "OpenGL", "Qt", "Windows", "Linux", "Android", "Git", "Deadline", "Docker", "Kubernetes", "AWS", "Subversion", "Terraform", "Unreal", "Unity", "VR", "Agisoft Photoscan", "RealityCapture", "Syntheyes", "Boujou", "PFTrack", "Arnold", "VRay", "MentalRay", "RealFlow", "Houdini", "Fusion360", "Alias", "Maya", "ZBrush", "Substance Designer", "Cinema 4D", "LightWave 3D", "Blender", "3D Printing", "Softimage", "Nuke", "Photoshop", "Flame", "Ffmpeg", "Color Science", "Nucoda Film Master", "Mistika", "After Effects", "Illustrator", "Project Management", "Systems Administration", "CCNA", "Excel", "Shotgun", "FileMaker Pro", "Smart Sheets"],
                'Objective' : 'Looking to work on VR Games with challenging coding problems and inspiring designs, with a keen interest in experimental hardware.',
                'SkillsArray' : [
                    {"id": "Python:", "desc": "5 Years professional experience"},
                    {"id": "C++/UE4 Blueprint:", "desc": "2 Years development experience. Oculus, Vive, Daydream, Leap Motion, Virtuix Omni"},
                    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
                    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
                    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
                ],
            },
        }
        for (var title in window.JobTypes) {
            var JobData = window.JobTypes[title];
            //$('#JobTypeDropdownMenu').append('<a class="dropdown-item" href="#">'+title+'</a>');
            $('#JobTypeDropdownMenu').append('<a class="dropdown-item" href="javascript:void(0);" onclick="SetJobType(\''+title+'\');">'+title+'</a>');
        };
    };
    if ($('#DialogSkillsCloud').children().length == 0){
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

function GetActiveProjectsList(){
    var ActiveProjects = [];
    $("[id^=pbox]").each(function() {
        if (this.checked){
            ActiveProjects.push(this.id.replaceAll('pbox_',''));
        };
    });
    return ActiveProjects;
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

function GetActiveSkillList(){
    var ActiveSkills = [];
    $("[id^=cbox]").each(function() {
        if (this.checked){
            ActiveSkills.push(this.id.replaceAll('cbox_',''));
        };
    });
    return ActiveSkills;
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

function GetJobType(){
    return window.JobTypes[GetJobTitle()];
}

function GetJobTitle(){
    return $('#JobTypeDropdownButton').text();
}

function SetJobType(JobTypeTitle){
    $('#JobTypeDropdownButton').text(JobTypeTitle);
    var JobData = window.JobTypes[JobTypeTitle];
    SetActiveSkillList(JobData['ActiveSkills']);
    SetActiveProjectsList(JobData['ActiveSkills']);
}

function GenerateResume(){
    var JobTitle = GetJobTitle();
    var JobType = GetJobType();
    var ActiveSkills = GetActiveSkillList();
    var ActiveProjects = GetActiveProjectsList();

    console.log(JobTitle);
    console.log(JobType);
    console.log(ActiveSkills);
    console.log(ActiveProjects);

    /*
    var doc = ResumeSetup();
    ResumeContactDetails(doc, JobTitle);    
    ResumeProfile(doc, JobType['Objective']);
    ResumeKeySkills(doc, JobType['SkillsArray']);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    //ResumeExperienceTable(doc);
    ResumeSave(doc, JobTitle);
    */
    CacheImagesAndGenerate(ActiveSkills, JobTitle);
}


function SortProjects(SelectedTags) {
    for (var i = 0; i < window.Projects.length; i++) {
        var TagCount = 0;
        for (var j = 0; j < window.Projects[i]["tags"].length; j++) {
            var thistag = window.Projects[i]["tags"][j].rstrip();
            if (SelectedTags.indexOf(thistag) > -1){
                TagCount += 1;
            };
        };
        window.Projects[i]["TagCount"] = TagCount;
    };
    window.Projects.sortOn("TagCount");
    window.Projects = window.Projects.reverse();
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
    var wordlistdata = loadPage(wordlisturl);
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
function ResumeEducation(doc) {
    var columns6 = [
    {title: "", dataKey: "id"},
    ];
    var rows6 = [
    {"id": "Collins College (Action College of Film & Media Arts) - Tempe, AZ\nBA in Digital Video Effects, 2007 to 2010\n\nCCNA Semesters 1-4, 2006-2007"},
    ];
    doc.autoTable(columns6, rows6, {
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
                doc.autoTableText("Education", 44, row.y-10, {
                    valign: 'middle',
                });
            }
        }
    });
}
function ResumeProfessionalExperience(doc) {
    var columns7 = [
    {title: "", dataKey: "id"},
    {title: "", dataKey: "desc"},
    ];
    var rows7 = [
    {"id": "Saatchi & Saatchi, 3501 Sepulveda blvd, Torrance CA 90505 (310) 214-6000"},
    {"id": "Senior 3D Pipeline Engineer - Nov 2017 to Current                                                                     - CAD/3D Pipeline Development"},
    {"id": "Cognition, 900 Cahuenga blvd ste b, Hollywood CA 90038 (323) 874-4487"},
    {"id": "Senior Software Developer - Apr 2015 to Oct 2017                                                                     - VR Game Development"},
    {"id": "Lit Post LLC, 2255 N Ontario st ste 100A, Burbank CA 91504"},
    {"id": "Technical Director/Pipeline Developer - Nov 2011 to Mar 2015                               - Nuke / Maya Pipeline Development"},
    ];
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
    var cvsdata = loadPage(csvurl);
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
function ResumeSave(doc, PositionTitle) {
    var date = new Date();
    doc.save('MadisonAster_'+PositionTitle.replaceAll(' ','')+'_Resume_'+date.yyyymmdd()+'.pdf');
}
function Generate_CV_PDF(PositionTitle){
    var doc = CVSetup();
    CVContactDetails(doc, PositionTitle);
    CVProjects(doc);
    ResumeSave(doc, PositionTitle);
}

function CacheImagesAndGenerate(SelectedTags, PositionTitle) {
    SortProjects(SelectedTags);
    window.ImageCache = new Array;
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
    
    waitforload = function() {
        for (var i = 0; i < window.Projects.length; i++) {
            if (!window.ImageCache[i].complete || window.ImageCache[i].naturalWidth == 0 || window.ImageCache[i].naturalWidth == 'undefined'){
                console.log('cache waiting for image');
                setTimeout(waitforload, 100);
                return;
            };    
        };
        Generate_CV_PDF(PositionTitle);
    };
    waitforload();
}
function SortProjects(SelectedTags) {
    console.log("SortProjects");
    console.log(window.Projects);
    for (var i = 0; i < window.Projects.length; i++) {
        var TagCount = 0;
        for (var j = 0; j < window.Projects[i]["tags"].length; j++) {
            var thistag = window.Projects[i]["tags"][j].rstrip();
            if (SelectedTags.indexOf(thistag) > -1){
                TagCount += 1;
            };
        };
        window.Projects[i]["TagCount"] = TagCount;
    };
    window.Projects.sortOn("TagCount");
    window.Projects = window.Projects.reverse();
}

function CVSetup(){
    var doc = new jsPDF('p', 'pt', 'letter');
    doc.setFontSize(12);
    doc.setTextColor(89, 92, 98);
    doc.setFont('candara');

    doc.autoTableSetDefaults({
        headerStyles: {
            fontStyle: 'bold',
            font: "candara",
            textColor: [89, 92, 98],
            lineColor: [174, 186, 213],
            fillColor: [234, 237, 244],
        },
        columnStyles: {
            font: "candara",
            textColor: [89, 92, 98],
            lineWidth: 1,
            lineColor: [174, 186, 213],
            id: {fontStyle: 'bold'}
        },
    });
    
    var wordlisturl = window.location.href+'/WordList.csv';
    var wordlistdata = loadPage(wordlisturl);
    var wordlistlines = wordlistdata.split('\n');
    doc.setTextColor(255, 255, 255);
    for (var i = 0; i < wordlistlines.length; i++) {
        doc.text(wordlistlines[i].replace(',',''), 44, 20);
    };
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, doc.internal.pageSize.width, 25, 'F');
    doc.setTextColor(89, 92, 98);
    
    doc.setFillColor(0);
    doc.rect(0, 0, 152, doc.internal.pageSize.height, 'F');
    
    //doc.addPage();
    return doc;
}
function CVAddPage(doc) {
    doc.addPage();
    doc.setFillColor(0);
    doc.rect(0, 0, 152, doc.internal.pageSize.height, 'F');
}
function CVContactDetails(doc, PositionTitle) {
    doc.addFont('Candara.ttf', 'Candara', 'normal', 'WinAnsiEncoding');
    doc.addFont('Candarai.ttf', 'Candara', 'italic', 'WinAnsiEncoding');
    doc.addFont('Candarab.ttf', 'Candara', 'bold', 'WinAnsiEncoding');
    doc.setFont('Candara');
    doc.setDefaultFonts(0, 'Candara');    //English default
    doc.setCharSpace(0);
    doc.setTextColor(0, 0, 0);
    
    doc.setFontSize(20);
    doc.setFontStyle('bold');
    doc.drawText(194, 38, '.madison aster');
    
    doc.setFontSize(18);
    doc.setFontStyle('italic');
    doc.drawText(194, 61, PositionTitle);
    
    doc.setFontSize(16);
    doc.setFontStyle('normal');
    doc.drawText(201, 100, '.'+GetAddress());
    doc.drawText(201, 120, '.'+GetPhone());
    doc.drawText(201, 140, GetEmail());
    doc.drawText(201, 160, 'www.MadisonAster.com');
    imgData1 = getBase64FromImageUrl("./_Assets/CVThumb.jpg");
    doc.addImage(imgData1, 'JPEG', 1, 78, 178, 100);
}
function CVProjects(doc) {
    var ImageYPosition = 220;
    var ProjectCounter = 1;
    
    for (var i = 0; i < window.Projects.length; i++) {
        if (window.Projects[i]["TagCount"] < 3) {
            continue;
        };
        if (ProjectCounter >= 5 && window.Projects.length > i+1) {
            ProjectCounter = 0;
            ImageYPosition = 78;
            CVAddPage(doc);
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




/*
function CVSave(doc, PositionTitle) {
    var date = new Date();
    doc.save('MadisonAster_'+PositionTitle.replaceAll(' ','').replace('.','')+'_CV'+date.yyyymmdd()+'.pdf');
    CloseCVDialog();
};
function CVDialog() {
    $( "#CVDialog" ).dialog({
            modal: true,
            autoOpen: false,
    });
    
    $('#CVDialog').dialog('open');
    $('#DialogFocuser').css('display', 'block');
    $('#CVDialog').css('width', '50%');
    $('#CVDialog').css('height', '25%');
    $('#CVDialog').css('min-height', '12cm');
    $('#CVDialog').css('max-height', '500px');
    $('#CVDialog').css('min-width', '20cm');
    $('#CVDialog').css('max-width', '600px')
}
function CloseCVDialog() {
    $('#CVDialog').dialog('close');
    $('#DialogFocuser').css('display', 'none');
}
*/

/*
AllTags = [
    '3D Modeling',
    'C++',
    'Experimental Hardware',
    'Game Development',
    'GUI',
    'Javascript',
    'Nuke',
    'PHP',
    'Pipeline',
    'PySide/PyQt',
    'Python',
    'Software Development',
    'UE4',
    'VFX',
    'VR',
];
function VRGameDeveloper_CV() {
    var PositionTitle = ".vr game developer";
    var Objective = "Looking to work on VR Games with challenging coding problems and inspiring designs, with a keen interest in experimental hardware.";
    var SelectedTags = [
        '3D Modeling',
        'C++',
        'Experimental Hardware',
        'Game Development',
        'GUI',
        'Software Development',
        'UE4',
        'VFX',
        'VR',
    ];
    CacheImagesAndGenerate(SelectedTags, PositionTitle);
}
function PythonDeveloper_CV() {
    var PositionTitle = ".python developer";
    var Objective = "Looking for work on highly modular software projects with long evolution curves.";
    var SelectedTags = [
        'C++',
        'Experimental Hardware',
        'GUI',
        'Javascript',
        'PHP',
        'Pipeline',
        'PySide/PyQt',
        'Python',
        'Software Development',
    ];
    CacheImagesAndGenerate(SelectedTags, PositionTitle);
}
function SoftwareDeveloper_CV() {
    var PositionTitle = ".software developer";
    var Objective = "Seeking work on highly modular software projects that require succinctly written and maintainable code.";
    var SelectedTags = [
        'C++',
        'GUI',
        'Javascript',
        'PHP',
        'Pipeline',
        'PySide/PyQt',
        'Python',
        'Software Development',
        'UE4',
    ];
    CacheImagesAndGenerate(SelectedTags, PositionTitle);
}
function VFXTechnicalDirector_CV() {
    var PositionTitle = ".vfx technical director";
    var Objective = "Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.";
    var SelectedTags = [
        '3D Modeling',
        'Nuke',
        'Pipeline',
        'PySide/PyQt',
        'Python',
        'VFX',
    ];
    CacheImagesAndGenerate(SelectedTags, PositionTitle);
}
function SystemsEngineer_CV() {
    var PositionTitle = ".systems engineer";
    var Objective = "Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.";
    var SelectedTags = [
        '3D Modeling',
        'Nuke',
        'Pipeline',
        'PySide/PyQt',
        'Python',
        'VFX',
    ];
    CacheImagesAndGenerate(SelectedTags, PositionTitle);
}
function PipelineDeveloper_CV() {
    var PositionTitle = ".pipeline developer";
    var Objective = "Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.";
    var SelectedTags = [
        '3D Modeling',
        'Nuke',
        'Pipeline',
        'PySide/PyQt',
        'Python',
        'VFX',
    ];
    CacheImagesAndGenerate(SelectedTags, PositionTitle);
}
*/
