<?php
$ProjectContent = file("./_Assets/Projects/FanControl/content.html");
$ProjectDescription = file("./_Assets/Projects/FanControl/Description.txt");
foreach ($ProjectContent as &$ProjectValue) {
    if(strpos($ProjectValue,"{ShortDescription}") !== false){
        echo $ProjectDescription;
    }else{
        echo $ProjectValue;
    };
};
?>