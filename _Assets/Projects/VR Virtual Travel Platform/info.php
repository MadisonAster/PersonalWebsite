<?php
$ProjectContent = file("./_Assets/Projects/VR Virtual Travel Platform/content.html");
$ShortDescription = file("./_Assets/Projects/VR Virtual Travel Platform/Description.txt");
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