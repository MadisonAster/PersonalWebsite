<?php
$ProjectContent = file("./_Assets/Projects/360RenderTests/content.html");
$ProjectDescription = file("./_Assets/Projects/360RenderTests/Description.txt");
foreach ($ProjectContent as &$ProjectValue) {
    if(strpos($value,"{ShortDescription}") !== false){
        echo $ProjectDescription;
    }else{
        echo $ProjectValue;
    };
};
?>