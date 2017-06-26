<?php
$content = file("./Projects/content.html");
foreach ($content as &$value) {
    if(strpos($value,"{contentArea1}") !== false){
    }else{
        echo $value;
    };
};

$blacklist = array('.', '..');
//$dirs = array_filter(glob('./_Assets/Projects/*'), 'is_dir');

//echo "<div class='ContentDiv'>\n";
//echo "HelloWorld!!!!!!!!\n";
//echo "</div>\n";


?>