<div id='TVDiv' style='padding:0;margin:0;display:none;text-align:right;'>

Sort:
<select id='TVGrid_sort-options' class='sort-options'>
    <option value='added'>Added</option>
    <option value='released'>Released</option>
    <option value='title'>Title</option>
    <option value='rating'>Rating</option>
    <option value='imdbscore'>IMDBscore</option>
</select>

<div id='TVGrid' class='row-fluid' style='width:100%;margins:0;padding:0;'>
<?php
$blacklist = array('.', '..');
//$TVdirs = array_filter(glob('../../Favorites/TV/snapshot/*'), 'is_dir');
$TVdirs = array_filter(glob('./Favorites/TV/snapshot/*'), 'is_dir');

foreach ($TVdirs as &$dir){
    if(!in_array($dir, $blacklist)){
        
        $dirArray = explode("/", $dir);
        $folderName = current(array_slice($dirArray, -1));
        $varName = str_replace("-", "", $folderName);
        
        $json = file_get_contents($dir.'/entry.json');
        $infoArray = json_decode($json, TRUE);
        
        $infoArray['Description'] = str_replace('\n', '', $infoArray['Description']);
        $infoArray['Description'] = str_replace('\r', '', $infoArray['Description']);
        $infoArray['Description'] = str_replace('\x92', "'", $infoArray['Description']);
        $infoArray['Description'] = str_replace('\x93', '"', $infoArray['Description']);
        $infoArray['Description'] = str_replace('\x94', '"', $infoArray['Description']);
        $infoArray['Description'] = str_replace('\x97', "", $infoArray['Description']);
        
        echo "<figure id='fig_movInfo_$varName' class='picture-item' style='margin-left:0;' data-groups=\"['none']\" data-added='".$infoArray['Added']."' data-released='".$infoArray['Released']."' data-title='".$infoArray['Title']."' data-rating='".$infoArray['Ratings']['Votes']."' data-imdbscore='".$infoArray['Ratings']['IMDB']."'>\n";
        echo "    <div id='movInfo_$varName' style='width:100%;height:305px;background-color:#111111;padding:1%;display:none;overflow-y:scroll;'>\n";
        
        echo "    <table style='width:100%;'>\n";
        echo "    <tr>\n";
        echo "    <td style='width:150px;'>\n";
        echo "    <img src='./_Assets/150x225_loading.gif' psrc='./_Assets/150x225_loading.gif' rsrc='$dir/thumb.jpg' style='width:150px;height:225px;'></img>\n";
        echo "    <div style='width:150px;height:80px;text-align:center;color:#FFFFFF;text-shadow: 2px 2px 0px rgba(0, 0, 0, 1.0);'>\n";
        echo "    ".$infoArray['name']."\n";
        echo "    </div>\n";
        echo "    </td>\n";
        echo "    <td>\n";
        echo "    <div style='color:#FFFFFF;text-shadow: 2px 2px 0px rgba(0, 0, 0, 1.0);padding:20px;'>\n";
        
        if ($infoArray['description'] != 'NA' ){
            echo "    ".$infoArray['description']."\n";
            echo "    <br/>\n";
            echo "    <br/>\n";
        };
        
        if ($infoArray['EntryAdded'] != 'NA' ){
            echo "    Added:\n";
            echo "    ".$infoArray['EntryAdded']."\n";
            echo "    <br/>\n";
        };
        
        if ($infoArray['datePublished'] != 'NA' ){
            echo "    Released:\n";
            echo "    ".$infoArray['datePublished']."\n";
            echo "    <br/>\n";
        };
        
        echo "    <a target='_blank' href='".$infoArray['EntryURL']."'>IMDB</a>\n";
        
        if (sizeof($infoArray['genre']) > 1) {
            echo "    Genres:\n";
            echo "    ".implode(", ", $infoArray['genre'])."\n";
            echo "    <br/>\n";
        };
        
        echo "    <br/>\n";
        
        if (sizeof($infoArray['director']) > 1) {
            echo "    Director:\n";
            echo "    ";
            foreach ($infoArray['director'] as &$director){
                echo $director['name'].",";
            };
            echo "\n";
        };
        
        if (sizeof($infoArray['actor']) > 1) {
            echo "    Actors:\n";
            echo "    ";
            foreach ($infoArray['actor'] as &$actor){
                echo $actor['name'].",";
            };
            echo "\n";
        };
        
        echo "    </div>\n";
        echo "    </td>\n";
        echo "    </tr>\n";
        echo "    </table>\n";
        
        echo "    </div>\n";
        echo "    <a id='a_movInfo_$varName' href='#' onclick=\"showSubSection('movInfo_$varName');return false;\" style='text-decoration: none;'>\n";
        echo "    <img src='./_Assets/150x225_loading.gif' psrc='./_Assets/150x225_loading.gif' rsrc='$dir/thumb.jpg' data-original='$dir/thumb.jpg' style='width:150px;height:225px;'></img>\n";
        echo "    <br/>\n";
        echo "    <div style='width:150px;height:80px;text-align:center;color:#FFFFFF;text-shadow: 2px 2px 0px rgba(0, 0, 0, 1.0);'>\n";
        echo "    ".$infoArray['name']."\n";
        echo "    </div>\n";
        echo "    </a>\n";
        echo "</figure>\n";
    };
};

?>
</div>
</div>
