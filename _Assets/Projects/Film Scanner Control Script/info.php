<?php
$ProjectContent = file("./_Assets/Projects/Film Scanner Control Script/content.html");
$ShortDescription = file("./_Assets/Projects/Film Scanner Control Script/Description.txt");
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