<?php
echo "<h3 style='text-align:left;'>Feb 19, 2015</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/004Mistika Pseudo API/content.html");
$ShortDescription = file("./_Assets/Projects/004Mistika Pseudo API/Description.txt");
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