<?php
$blacklist = array('.', '..', 'stats', 'test', 'testing');
$dirs = array_filter(glob('*'), 'is_dir');

foreach ($dirs as &$dir){
    if(!in_array($dir, $blacklist)){
        if(substr($dir, 0, 1) !== '_'){
            echo "    <div id='Content_".$dir."' class='PageContainer' style='display:none;'>";
            if (file_exists("./$dir/statechange.js")) {
                echo "    <script src='./$dir/statechange.js'></script>";
            };
            if (file_exists("./$dir/onload.js")) {
                echo "    <script src='./$dir/onload.js'></script>";
            };
            if (file_exists("./$dir/statechange.js")) {
                echo "    <script src='./$dir/statechange.js'></script>";
            };
            if (file_exists("./".$dir."/content.php")) {
                echo "\n    <!-- Found content.php in ".$dir."-->\n";
                include "./".$dir."/content.php";
            } else {
                echo "\n    <!-- No content.php in ".$dir."-->\n";
                readfile("./".$dir."/content.html");
            };
            echo "    </div>\n";
        };
    };
};
?>