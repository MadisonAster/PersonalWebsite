
<div id='BookmarksDiv' style='padding:0;margin:0;display:none;text-align:right;'>
<div id='BookmarksTree' class='' style='width:100%;margins:0;padding:0;'>
<ul>

<?php
$Entry_json = './Favorites/Bookmarks/snapshot/entry.json';
$json = file_get_contents($Entry_json);
$Bookmarks = json_decode($json, TRUE);

foreach ($Bookmarks['folders'] as &$folder){
    $Bookmarks['description'] = str_replace('\n', '', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\r', '', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x92', "'", $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x93', '"', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x94', '"', $Bookmarks['description']);
    $Bookmarks['description'] = str_replace('\x97', "", $Bookmarks['description']);
    
    echo "<li>";
    echo "<div>".$folder['_title']."</div>";
    echo "</li>";
};
?>

</ul>
</div>
Synced access to my research bookmarks, coming soon!
</div>
