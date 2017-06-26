<?php
$content = file("./Projects/content.html");
$blacklist = array('.', '..');
//$dirs = array_filter(glob('./_Assets/Projects/*'), 'is_dir');

echo "<div class='ContentDiv'>\n";
echo "HelloWorld!!!!!!!!\n";
echo "</div>\n";

/*        
foreach ($dirs as &$dir){
    if(!in_array($dir, $blacklist)){
        echo "<div class='ContentDiv'>\n";
        echo $dir."HelloWorld2!!\n";
        //include $dir.'/info.php';
        echo "</div>\n";
    };
};
*/
?>