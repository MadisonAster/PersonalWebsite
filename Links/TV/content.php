<div id='TVDiv' style='padding:0;margin:0;display:none;'>
This is a collection of my favorite TV shows. The standards for this list are far less strict than the Movies list. This list is also updated automatically, and as usual I'm always open to suggestions.
<br/><br/>
<br/><br/>

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

$dirs = array_filter(glob('./_Assets/WatchList/TV/*'), 'is_dir');
foreach ($dirs as &$dir){
    echo $dir;
};
?>

<!-- ?  <php
$blacklist = array('.', '..');
//$dirs = array_filter(glob('../../_Assets/WatchList/TV/*'), 'is_dir');
$dirs = array_filter(glob('./_Assets/WatchList/TV/*'), 'is_dir');
/*
foreach ($dirs as &$dir){
    if(!in_array($dir, $blacklist)){
        
        $dirArray = explode("/", $dir);
        $folderName = current(array_slice($dirArray, -1));
        $movieName = str_replace("-", " ", $folderName);
        $varName = str_replace("-", "", $folderName);
        
        if(file_exists($dir.'/info.php')){
            try {
                //include $dir.'/info.php';
                //include './_Assets/WatchList/TV/emptyinfo.php';
            } catch (Exception $e) {
                //include './_Assets/WatchList/TV/emptyinfo.php';
            }
        } else {
            //include './_Assets/WatchList/TV/emptyinfo.php';
        };
        
        if($infoArray['IMDB'] == 'NA'){
            $infoArray['IMDB'] = 'http://www.imdb.com/find?ref_=nv_sr_fn&q='.str_replace("-", "+", $folderName).'&s=all';
        };
        
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
        echo "    <img src='$dir/thumb.jpg'></img>\n";
        echo "    <div style='width:150px;height:80px;text-align:center;color:#FFFFFF;text-shadow: 2px 2px 0px rgba(0, 0, 0, 1.0);'>\n";
        echo "    $movieName\n";
        echo "    </div>\n";
        echo "    </td>\n";
        echo "    <td>\n";
        echo "    <div style='color:#FFFFFF;text-shadow: 2px 2px 0px rgba(0, 0, 0, 1.0);padding:20px;'>\n";
        
        if ($infoArray['Description'] != 'NA' ){
            echo "    ".$infoArray['Description']."\n";
            echo "    <br/>\n";
            echo "    <br/>\n";
        };
        
        if ($infoArray['Added'] != 'NA' ){
            echo "    Added:\n";
            echo "    ".$infoArray['Added']."\n";
            echo "    <br/>\n";
        };
        
        if ($infoArray['Released'] != 'NA' ){
            echo "    Released:\n";
            echo "    ".$infoArray['Released']."\n";
            echo "    <br/>\n";
        };
        
        if (sizeof($infoArray['Countries']) > 1) {
            echo "    Countries:\n";
            echo "    ".implode(", ", $infoArray['Countries'])."\n";
            echo "    <br/>\n";
        };
        
        echo "    Ratings:\n";
        echo "    ".$infoArray['Ratings']['PrimeWire']." | \n";
        echo "    <a target='_blank' href='".$infoArray['IMDB']."'>IMDB</a>\n";
        echo "    ".$infoArray['Ratings']['IMDB']."\n";
        echo "    <br/>\n";
        
        if ($infoArray['Runtime'] != 'NA' ){
            echo "    Runtime:\n";
            echo "    ".$infoArray['Runtime']."\n";
            echo "    <br/>\n";
        };
        
        if (sizeof($infoArray['Genres']) > 1) {
            echo "    Genres:\n";
            echo "    ".implode(", ", $infoArray['Genres'])."\n";
            echo "    <br/>\n";
        };
        
        echo "    <br/>\n";
        
        if (sizeof($infoArray['Director']) > 1) {
            echo "    Director:\n";
            echo "    ".implode(", ", $infoArray['Director'])."\n";
            echo "    <br/>\n";
        };
        
        if (sizeof($infoArray['Actors']) > 1) {
            echo "    Actors:\n";
            echo "    ".implode(", ", $infoArray['Actors'])."\n";
            echo "    <br/>\n";
        };
        
        echo "    </div>\n";
        echo "    </td>\n";
        echo "    </tr>\n";
        echo "    </table>\n";
        
        echo "    </div>\n";
        echo "    <a id='a_movInfo_$varName' href='#' onclick=\"showSubSection('movInfo_$varName');return false;\" style='text-decoration: none;'>\n";
        echo "    <img class='load-delay' src='./_Assets/150x225_loading.gif' data-original='$dir/thumb.jpg'></img>\n";
        echo "    <br/>\n";
        echo "    <div style='width:150px;height:80px;text-align:center;color:#FFFFFF;text-shadow: 2px 2px 0px rgba(0, 0, 0, 1.0);'>\n";
        echo "    $movieName\n";
        echo "    </div>\n";
        echo "    </a>\n";
        echo "</figure>\n";
        
        
    };
};
*/
?>-->
</div>
</div>
