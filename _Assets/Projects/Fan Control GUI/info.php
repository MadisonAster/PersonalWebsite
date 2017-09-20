<?php
$ProjectContent = file("./_Assets/Projects/Fan Control GUI/content.html");
$ShortDescription = file("./_Assets/Projects/Fan Control GUI/Description.txt");
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