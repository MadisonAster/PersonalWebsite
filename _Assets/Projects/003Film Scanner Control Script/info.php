<?php
echo "<h3 style='text-align:left;'>Dec 04, 2014</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/003Film Scanner Control Script/content.html");
$ShortDescription = file("./_Assets/Projects/003Film Scanner Control Script/Description.txt");
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