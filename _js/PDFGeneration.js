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
            height: 255,
            width: 300,
            
    });
    
    $( "#ResumeDialog" ).dialog( "open" );
}
    
function VRGameDeveloper() {
    alert('VRGameDeveloper');
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
    
    var columns1 = [
        {title: "", dataKey: "id"},
    ];
    var rows1 = [
        {"id": "Software Developer / VR Game Designer"},
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
    
    var columns4 = [
    {title: "", dataKey: "id"},
    {title: "", dataKey: "desc"},
    ];
    var rows4 = [
    {"id": "Objective:", "desc": "Looking for work on highly modular software projects with long evolution curves. I would like to continue to focus on developing modular VR applications with hardware abstraction layers that allow for adaptation across the full spectrum of VR Devices."},
    {"id": "Availability:", "desc": "2 weeks notice."},
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
    var date = new Date();
    doc.save('ThomasMcVay-Resume'+date.yyyymmdd()+'.pdf');
    
    $('#ResumeDialog').dialog('close');
}