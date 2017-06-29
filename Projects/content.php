<?php
$content = file("./Projects/content.html");
foreach ($content as &$value) {
    if(strpos($value,"{contentArea1}") !== false){
    }else{
        echo $value;
    };
};

$blacklist = array('.', '..');
$Projectdirs = array_filter(glob('./_Assets/Projects/*'), 'is_dir');

foreach($Projectdirs as &$Projectdir){
    echo "<div class='ContentDiv'>\n";
    include $Linkdir."/info.php";
    echo "</div>\n";
    echo "<br/><br/>";
};


?>