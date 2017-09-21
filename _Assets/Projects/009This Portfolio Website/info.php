<?php
echo "<h3 style='text-align:left;'>Jun 10, 2017</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/009This Portfolio Website/content.html");
$ShortDescription = file("./_Assets/Projects/009This Portfolio Website/Description.txt");
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