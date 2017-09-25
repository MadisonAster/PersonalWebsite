<?php
echo "<h3 style='text-align:left;'>Aug 12, 2017</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/010VR Space Ship/content.html");
$ShortDescription = file("./_Assets/Projects/010VR Space Ship/Description.txt");
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