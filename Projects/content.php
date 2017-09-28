<?php
/*
$content = file("./Projects/content.html");
foreach ($content as &$value) {
    if(strpos($value,"{contentArea1}") !== false){
    }else{
        echo $value;
    };
};
*/

$blacklist = array('.', '..');
$Projectdirs = array_filter(glob('./_Assets/Projects/*'), 'is_dir');
$Projectdirs = array_reverse($Projectdirs, true);

$ProjectObjects = array();
foreach($Projectdirs as &$Projectdir){
    if(!in_array($Projectdir, $blacklist)){
        $dirArray = explode("/", $Projectdir);
        $folderName = current(array_slice($dirArray, -1));
        $ProjectTitle = substr($folderName, 3);
        $ProjectContent = file($Projectdir."/content.html");
        $ProjectDescription = file($Projectdir."/Description.txt");
        $ProjectDate = file_get_contents($Projectdir."/ProjectDate.txt");
        $ProjectTags = file($Projectdir."/ProjectTags.csv");
        if(substr($folderName, 0, 1) !== '_'){
            echo "<div class='ContentDiv'>\n";
            echo "<h2 style='text-align:left;'>".$ProjectTitle."</h2>\n";
            echo "<h3 style='text-align:left;'>".$ProjectDate."</h3>\n";
            echo "<br/>\n";
            foreach ($ProjectContent as &$ProjectValue) {
                if(strpos($ProjectValue,"{ShortDescription}") !== false){
                    foreach ($ProjectDescription as &$ShortDescriptionLine) {
                        echo $ShortDescriptionLine;
                        echo '<br/><br/>';
                    };
                }else{
                    echo $ProjectValue;
                };
            };
            foreach ($ProjectTags as &$Tag) {
                echo '<span class="ProjectTag">'.str_replace(",","",$Tag).'</span>';
            };
            echo "</div>\n";
            echo "<br/><br/>";
            
            
            $ProjectObject = array(
                "title" => $ProjectTitle,
                "description" => $ProjectDescription,
                "date" => $ProjectDate,
                "tags" => $ProjectTags,
            );
            array_push($ProjectObjects, $ProjectObject);
        };
    };
};
echo "<script type='text/javascript'>";
echo "var ProjectsDictString = ".json_encode($php_variable).";";
echo "var ProjectsDict = JSON.parse(ProjectsDictString);";
echo "console.log('ProjectsDict')";
echo "console.log(ProjectsDict)";
echo "</script>";
?>