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
function ResumeKeySkills(doc) {
    var columns5 = [
    {title: "", dataKey: "id"},
    {title: "", dataKey: "desc"},
    ];
    var rows5 = [
    {"id": "Python:", "desc": "5 Years experience"},
    {"id": "C++/Blueprint:", "desc": "2 Years experience / Oculus / Vive"},
    {"id": "Recyclable Coding style:", "desc": "I divide every project I work on into high level logic, and low level libraries to allow for as much recycling as possible."},
    {"id": "Design Skills:", "desc": "With backgrounds in Graphic Design, CG Modeling, Photogrammetry, VFX Compositing, and color correction, I've absorbed all of the technical skills from these fields as well as developed my own artistic taste and style."},
    {"id": "Ultra Fast Adaptibility:", "desc": "I practice adapting to new software and concepts as a skill. Over the course of my career I've brought my average learning curve for new software down from several months to under a week. (See Experience Table)"},
    ];
    doc.autoTable(columns5, rows5, {
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
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    ResumeExperienceTable(doc);
    ResumeSave(doc, PositionTitle);
}
function PythonDeveloper_Resume() {
    var doc = ResumeSetup();
    
    var PositionTitle = "Python Developer";
    var Objective = "Looking for work on highly modular software projects with long evolution curves.";
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    ResumeExperienceTable(doc);
    ResumeSave(doc, PositionTitle);
}
function SoftwareDeveloper_Resume() {
    var doc = ResumeSetup();
    
    var PositionTitle = "Software Developer";
    var Objective = "Seekings work on highly modular software projects that require succintly written and maintaibable code.";
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc);
    ResumeEducation(doc);
    ResumeProfessionalExperience(doc);
    ResumeExperienceTable(doc);
    ResumeSave(doc, PositionTitle);
}
function VFXTechnicalDirector_Resume() {
    var doc = ResumeSetup();
    
    var PositionTitle = "VFX Technical Director";
    var Objective = "Seeking work for Game and Film VFX pipeline development where I can apply my broad experience with 3D programs and compositing software.";
    ResumeContactDetails(doc, PositionTitle);    
    ResumeProfile(doc, Objective);
    ResumeKeySkills(doc);
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
    doc.setTextColor(89, 92, 98);
    doc.setFillColor(0);
    doc.rect(0, 0, 152, doc.internal.pageSize.height, 'F');
    
    //doc.addPage();
    return doc;
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
    
    var imgData1 = 'data:image/jpeg;base64,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';
    var imgData2 = getBase64FromImageUrl("./_Assets/Projects/FanControl/thumb.jpg");
    doc.addImage(imgData1, 'JPEG', 1, 78, 178, 100);
    doc.addImage(imgData2, 'JPEG', 1, 220, 178, 100);
    doc.addImage(imgData2, 'JPEG', 1, 362, 178, 100);
    doc.addImage(imgData2, 'JPEG', 1, 504, 178, 100);
    doc.addImage(imgData2, 'JPEG', 1, 646, 178, 100);
}
function CVSave(doc, PositionTitle) {
    var date = new Date();
    doc.save('ThomasMcVay_'+PositionTitle.replaceAll(' ','')+'_CV'+date.yyyymmdd()+'.pdf');
    CloseCVDialog();
}

function VRGameDeveloper_CV() {
    var doc = CVSetup();
    
    var PositionTitle = ".vr game developer";
    var Objective = "Looking to work on VR Games with challenging coding problems and inspiring designs, with a keen interest in experimental hardware.";
    CVContactDetails(doc, PositionTitle);
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
