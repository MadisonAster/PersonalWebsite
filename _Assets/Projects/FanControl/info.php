<?php
$ProjectContent = file("./_Assets/Projects/FanControl/content.html");
foreach ($ProjectContent as &$ProjectValue) {
    if(strpos($value,"{ShortDescription}") !== false){
    }else{
        echo $ProjectValue;
    };
};
?>