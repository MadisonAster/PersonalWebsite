<?php
echo "<h3 style='text-align:left;'>May 11, 2013</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/001Media App Pyside Library/content.html");
$ShortDescription = file("./_Assets/Projects/001Media App Pyside Library/Description.txt");
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