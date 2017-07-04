<?php
$ProjectContent = file("./_Assets/Projects/FanControl/content.html");
$ShortDescription = file("./_Assets/Projects/FanControl/Description.txt");
foreach ($ProjectContent as &$ProjectValue) {
    if(strpos($ProjectValue,"{ShortDescription}") !== false){
        foreach ($ShortDescription as &$ShortDescriptionLine) {
            echo $ShortDescriptionLine.'\n';
            echo '<br/>\n';
        };
    }else{
        echo $ProjectValue.'\n';
    };
};
?>