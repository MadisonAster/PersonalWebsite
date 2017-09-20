<?php
$ProjectContent = file("./_Assets/Projects/EmulatorTouchController/content.html");
$ShortDescription = file("./_Assets/Projects/EmulatorTouchController/Description.txt");
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