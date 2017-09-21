<?php
echo "<h3 style='text-align:left;'>Feb 13, 2015</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/005Emulator Touchscreen Controller/content.html");
$ShortDescription = file("./_Assets/Projects/005Emulator Touchscreen Controller/Description.txt");
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