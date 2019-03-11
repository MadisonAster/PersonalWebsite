<ul id="Menu">
<?php
$blacklist = array('.', '..', 'stats', 'test', 'testing');
$dirs = array_filter(glob('*'), 'is_dir');

foreach ($dirs as &$dir){
    if(!in_array($dir, $blacklist)){
        if(substr($dir, 0, 1) !== '_'){
            echo "    <li id='MenuItem_$dir' class='MenuItem'>";
            echo "    <a href='#' onclick=\"History.pushState(null, '$dir - Madison Aster', '$dir');return false;\">\n";
            echo "    $dir\n";
            echo "    </a>\n";
            echo "    </li>\n";
        };
    };
};
?>
</ul>