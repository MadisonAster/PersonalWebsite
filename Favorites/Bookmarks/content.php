<div id='BookmarksDiv' style='padding:0;margin:0;display:none;text-align:right;'>


<div id='BookmarksTree' class='' style='width:100%;margins:0;padding:0;'>
<?php
$Entry_json = './Favorites/Bookmarks/snapshot/entry.json'
$json = file_get_contents($Entry_json);
$Bookmarks = json_decode($json, TRUE);

foreach ($Bookmarks['folders'] as &$folder){
    $dirArray = explode("/", $dir);
    $folderName = current(array_slice($dirArray, -1));
    $varName = str_replace("-", "", $folderName);
    
    $Bookmarks['description'] = str_replace('\n', '', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\r', '', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x92', "'", $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x93', '"', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x94', '"', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x97', "", $Bookmarks['description']);
    
    //echo "<figure id='fig_movInfo_$varName' class='picture-item' style='margin:0;' data-groups=\"['none']\" data-added='".$infoArray['Added']."' data-released='".$infoArray['Released']."' data-title='".$infoArray['Title']."' data-rating='".$infoArray['Ratings']['Votes']."' data-imdbscore='".$infoArray['Ratings']['IMDB']."'>\n";
    //echo "</figure>\n";
};
?>
</div>
Synced access to my research bookmarks, coming soon!
</div>
