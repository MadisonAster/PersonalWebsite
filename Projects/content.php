<?php
/*
$content = file("./Projects/content.html");
foreach ($content as &$value) {
    if(strpos($value,"{contentArea1}") !== false){
    }else{
        echo $value;
    };
};
*/

$blacklist = array('.', '..');
$Projectdirs = array_filter(glob('./_Assets/Projects/*'), 'is_dir');

foreach($Projectdirs as &$Projectdir){
    if(!in_array($Projectdir, $blacklist)){
        $dirArray = explode("/", $Projectdir);
        $folderName = current(array_slice($dirArray, -1));
        if(strpos($folderName, '_') == false){
            echo "<div class='ContentDiv'>\n";
            echo $folderName;
            include $Projectdir."/info.php";
            echo "</div>\n";
            echo "<br/><br/>";
    
        };
    };
};


?>