<?php
$ProjectContent = file("./_Assets/Projects/360RenderTests/content.html");
$ShortDescription = file("./_Assets/Projects/360RenderTests/Description.txt");
foreach ($ProjectContent as &$ProjectValue) {
    if(strpos($ProjectValue,"{ShortDescription}") !== false){
        foreach ($ShortDescription as &$ShortDescriptionLine) {
            echo $ShortDescriptionLine;
        };
    }else{
        echo $ProjectValue;
    };
};
?>