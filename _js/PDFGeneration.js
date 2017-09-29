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
            height: 300,
            width: 300,
    });
    
    $('#ResumeDialog').dialog('open');
    $('#DialogFocuser').css('display', 'block');
}
function CVDialog() {
    $( "#CVDialog" ).dialog({
            modal: true,
            autoOpen: false,
            height: 300,
            width: 300,
    });
    
    $('#CVDialog').dialog('open');
    $('#DialogFocuser').css('display', 'block');
}
function CloseResumeDialog() {
    $('#ResumeDialog').dialog('close');
    $('#DialogFocuser').css('display', 'none');
}
function CloseCVDialog() {
    $('#CVDialog').dialog('close');
    $('#DialogFocuser').css('display', 'none');
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
                doc.autoTableText("Thomas McVay", 44, row.y-10, {
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
                doc.autoTableText("Address", 44, row.y-10, {
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
    {"id": "Cognition, 900 Cahuenga blvd ste b, Hollywood CA 90038 (323) 874-4487"},
    {"id": "Senior Software Developer - Apr 2015 to Current                                                                     - VR Game Development"},
    {"id": "Lit Post LLC, 2255 N Ontario st ste 100A, Burbank CA 91504"},
    {"id": "Technical Director/Pipeline Developer - Nov 2011 to Mar 2015                               - Nuke / Maya Pipeline Development"},
    {"id": "Alpha Designs, 316 E 4th St #B, Hanford CA 93230 (559) 583-6476"},
    {"id": "Design Digitizer - Jan 2006 to Aug 2006                                                                                                 - Graphic Design"},
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
    var csvurl = window.location.href+'/xpTable.csv';
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
    doc.save('ThomasMcVay_'+PositionTitle.replaceAll(' ','')+'_Resume'+date.yyyymmdd()+'.pdf');
    CloseResumeDialog();
}

function VRGameDeveloper_Resume() {
    var doc = ResumeSetup();
    
    var PositionTitle = "VR Game Developer";
    var Objective = "Looking to work on VR Games with challenging coding problems and inspiring designs, with a keen interest in experimental hardware.";
    var SkillsArray = [
    {"id": "Python:", "desc": "5 Years professional experience"},
    {"id": "C++/UE4 Blueprint:", "desc": "2 Years development experience. Oculus, Vive, Daydream, Leap Motion, Virtuix Omni"},
    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
    ];
    
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc, SkillsArray);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    ResumeExperienceTable(doc);
    ResumeSave(doc, PositionTitle);
}
function PythonDeveloper_Resume() {
    var doc = ResumeSetup();
    
    var PositionTitle = "Python Developer";
    var Objective = "Looking for work on highly modular software projects with long evolution curves.";
    var SkillsArray = [
    {"id": "Python:", "desc": "5 years professional experience"},
    {"id": "PySide/PyQt:", "desc": "2 years professional experience"},
    {"id": "C++:", "desc": "2 years professional experience"},
    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
    ];
    
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc, SkillsArray);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    ResumeExperienceTable(doc);
    ResumeSave(doc, PositionTitle);
}
function SoftwareDeveloper_Resume() {
    var doc = ResumeSetup();
    
    var PositionTitle = "Software Developer";
    var Objective = "Seeking work on highly modular software projects that require succinctly written and maintainable code.";
    var SkillsArray = [
    {"id": "Python:", "desc": "5 Years experience"},
    {"id": "PySide/PyQt:", "desc": "2 years professional experience"},
    {"id": "C++:", "desc": "2 years professional experience"},
    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
    ];
    
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc, SkillsArray);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    ResumeExperienceTable(doc);
    ResumeSave(doc, PositionTitle);
}
function VFXTechnicalDirector_Resume() {
    var doc = ResumeSetup();
    
    var PositionTitle = "VFX Technical Director";
    var Objective = "Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.";
    var SkillsArray = [
    {"id": "Python:", "desc": "5 Years experience"},
    {"id": "C++/UE4 Blueprint:", "desc": "2 Years experience"},
    {"id": "Nuke Python API", "desc": "3 Years professional experience"},
    {"id": "DI Finishing Pipeline", "desc": "1 Year professional experience"},
    {"id": "Maya Pipeline", "desc": "1 Year professional experience"},
    {"id": "VFX Compositing", "desc": "1 Years professional experience"},
    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modelling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
    {"id": "Ultra Fast Adaptability:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
    ];
    
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc, SkillsArray);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    ResumeExperienceTable(doc);
    ResumeSave(doc, PositionTitle);
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
};
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
    doc.drawText(194, 38, '.thomas mcvay');
    
    doc.setFontSize(18);
    doc.setFontStyle('italic');
    doc.drawText(194, 61, PositionTitle);
    
    doc.setFontSize(16);
    doc.setFontStyle('normal');
    doc.drawText(201, 100, '.'+GetAddress());
    doc.drawText(201, 120, '.'+GetPhone());
    doc.drawText(201, 140, GetEmail());
    doc.drawText(201, 160, 'www.thomas-mcvay.info');
    imgData1 = getBase64FromImageUrl("./_Assets/CVThumb.jpg");
    doc.addImage(imgData1, 'JPEG', 1, 78, 178, 100);
}
function CVProjects(doc) {
    //console.log(Projects);
    var ImageYPosition = 220;
    var ProjectCounter = 1;

    for (var i = 0; i < Projects.length; i++) {
        doc.setFontStyle('bold');
        doc.setFontSize(16);
        doc.drawText(201, ImageYPosition+10, '.'+Projects[i]["title"]);
        doc.setFontStyle('normal');
        doc.setFontSize(10);
        doc.drawText(211, ImageYPosition+20, Projects[i]["date"]);
        doc.setFontSize(16);
        for (var j = 0; j < Projects[i]["shortdescription"].length; j++) {
            console.log(Projects[i]["shortdescription"][j]);
            var descriptiontext = Projects[i]["shortdescription"][j];
            descriptiontext = descriptiontext.replaceAll('\n', '');
            descriptiontext = descriptiontext.replaceAll('\r', '');
            doc.drawText(201, ImageYPosition+20+20*(j+1), descriptiontext);
        };

        if(Projects[i]['images'].length > 0){
            console.log(Projects[i]['images'][0]);
            var imgData = getBase64FromImageUrl(Projects[i]['images'][0]);
            if (Projects[i]['images'][0].rsplit('.',1)[-1] == 'jpg'){
                doc.addImage(imgData, 'JPEG', 1, ImageYPosition, 178, 100);
            } else if(Projects[i]['images'][0].rsplit('.',1)[-1] == 'png'){
                doc.addImage(imgData, 'PNG', 1, ImageYPosition, 178, 100);
            } else {
                doc.addImage(imgData, 'GIF', 1, ImageYPosition, 178, 100);
            };
        };
        ImageYPosition += 142;
        ProjectCounter += 1;
        if (ProjectCounter >= 5) {
            ProjectCounter = 0;
            ImageYPosition = 78;
            CVAddPage(doc);
        };
    };
    
    //var imgData1 = getBase64FromImageUrl("./_Assets/Projects/360RenderTests/thumb.jpg");
    //var imgData2 = getBase64FromImageUrl("./_Assets/Projects/FanControl/thumb.jpg");
    //doc.addImage(imgData1, 'JPEG', 1, 78, 178, 100);
    //doc.addImage(imgData2, 'JPEG', 1, 220, 178, 100);
    //doc.addImage(imgData2, 'JPEG', 1, 362, 178, 100);
    //doc.addImage(imgData2, 'JPEG', 1, 504, 178, 100);
    //doc.addImage(imgData2, 'JPEG', 1, 646, 178, 100);
};
function CVSave(doc, PositionTitle) {
    var date = new Date();
    doc.save('ThomasMcVay_'+PositionTitle.replaceAll(' ','')+'_CV'+date.yyyymmdd()+'.pdf');
    CloseCVDialog();
};

function VRGameDeveloper_CV() {
    var doc = CVSetup();
    
    var PositionTitle = ".vr game developer";
    var Objective = "Looking to work on VR Games with challenging coding problems and inspiring designs, with a keen interest in experimental hardware.";
    CVContactDetails(doc, PositionTitle);
    CVProjects(doc);
    CVSave(doc, PositionTitle);
    CloseCVDialog();
}
function PythonDeveloper_CV() {
    alert("I haven't written this yet, sorry!");
    CloseCVDialog();
}
function SoftwareDeveloper_CV() {
    alert("I haven't written this yet, sorry!");
    CloseCVDialog();
}
function VFXTechnicalDirector_CV() {
    alert("I haven't written this yet, sorry!");
    CloseCVDialog();
}
