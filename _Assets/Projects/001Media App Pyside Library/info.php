<?php
echo "<h3 style='text-align:left;'>May 11, 2013</h3>\n";
echo "<br/>\n";
foreach ($ProjectContent as &$ProjectValue) {
    if(strpos($ProjectValue,"{ShortDescription}") !== false){
        foreach ($ProjectDescription as &$ShortDescriptionLine) {
            echo $ShortDescriptionLine;
            echo '<br/><br/>';
        };
    }else{
        echo $ProjectValue;
    };
};
?>