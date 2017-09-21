<?php
echo "<h3 style='text-align:left;'>Dec 08, 2016</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/008Unreal 360 Render Tests/content.html");
$ShortDescription = file("./_Assets/Projects/008Unreal 360 Render Tests/Description.txt");
foreach ($ProjectContent as &$ProjectValue) {
    if(strpos($ProjectValue,"{ShortDescription}") !== false){
        foreach ($ShortDescription as &$ShortDescriptionLine) {
            echo $ShortDescriptionLine;
            echo '<br/><br/>';
        };
    }else{
        echo $ProjectValue;
    };
};
?>