<?php
$ProjectContent = file("./_Assets/Projects/VR Space Ship/content.html");
$ShortDescription = file("./_Assets/Projects/VR Space Ship/Description.txt");
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