<ul id="Menu">
<?php
$blacklist = array('.', '..', 'stats', 'test', 'testing');
$dirs = array_filter(glob('*'), 'is_dir');
$preferredlist = array('About', 'Projects', 'DemoReel', 'Favorites', 'GitHub', 'CodeWars', 'IMDB');

foreach ($preferredlist as &$dir){
    if(!in_array($dir, $blacklist)){
        if(substr($dir, 0, 1) !== '_'){
            echo "    <li id='MenuItem_$dir' class='MenuItem'>";
            echo "    <a href='#' onclick=\"History.pushState(null, '$dir - Madison Aster', '$dir');window.scrollTo(0,1);return false;\">\n";
            echo "    $dir\n";
            echo "    </a>\n";
            echo "    </li>\n";
        };
    };
};
?>
</ul>