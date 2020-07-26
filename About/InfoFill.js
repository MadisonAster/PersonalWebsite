
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
}

function GetFullName() {
    GetConfigData();
    return window.ConfigData['FullName'];
}

function GetGitHubURL() {
    GetConfigData();
    return window.ConfigData['GitHub_SnapshotURL'];
}

function GetDockerHubURL() {
    GetConfigData();
    return window.ConfigData['DockerHub_SnapshotURL'];
}

function GetIMDBURL() {
    GetConfigData();
    return window.ConfigData['IMDB_SnapshotURL'];
}

function GetCodeWarsURL(){
    GetConfigData();
    return window.ConfigData['CodeWars_SnapshotURL'];
}

function GetLinkedInURL(){
    GetConfigData();
    return window.ConfigData['LinkedIn_SnapshotURL'];
}

function GetPhone() {
    GetConfigData();
    return window.ConfigData['PhoneNumber'];
}

function GetEmail() {
    GetConfigData();
    return window.ConfigData['EmailAddress'];
}

function GetAddress() {
    GetConfigData();
    return window.ConfigData['Address'];
}

function GetAvailability() {
    GetConfigData();
    return window.ConfigData['Availability'];
}

Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
}

function GetGenerationDate() {
    return new Date().toLocaleString();
}

function DecodeData(InputData) {
    var result = window.atob(InputData);
    return result;
}

function EncodeData(InputData) {
    var result = window.btoa(InputData);
    alert(result);
    return result;
}

function LoadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

