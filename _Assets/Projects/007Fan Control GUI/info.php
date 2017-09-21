<?php
echo "<h3 style='text-align:left;'>Nov 17, 2016</h3>\n";
echo "<br/>\n";
$ProjectContent = file("./_Assets/Projects/007Fan Control GUI/content.html");
$ShortDescription = file("./_Assets/Projects/007Fan Control GUI/Description.txt");
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