<?php
echo "<h3 style='text-align:left;'>May 06, 2014</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/002Nuke Pipeline and Tools/content.html");
$ShortDescription = file("./_Assets/Projects/002Nuke Pipeline and Tools/Description.txt");
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