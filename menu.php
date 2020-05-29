<ul id="Menu">
<?php
$preferredlist = array('About', 'Projects', 'Favorites', 'GitHub', 'CodeWars', 'IMDB');
$dirs = array_filter(glob('*'), 'is_dir');
$blacklist = array('.', '..', 'stats', 'test', 'testing', '.git', 'cgi-bin', 'madisonaster.com');
foreach ($dirs as &$dir){
    if(!in_array($dir, $blacklist)){
        if(substr($dir, 0, 1) !== '_'){
            if(!in_array($dir, $preferredlist)){
                array_push($preferredlist, $dir);
            };
        };
    };
};
foreach ($preferredlist as &$dir){
    echo "    <li id='MenuItem_$dir' class='MenuItem'>";
    echo "    <a href='#' onclick=\"History.pushState(null, '$dir - Madison Aster', '$dir');window.scrollTo(0,1);return false;\">\n";
    echo "    $dir\n";
    echo "    </a>\n";
    echo "    </li>\n";
};
?>
</ul>