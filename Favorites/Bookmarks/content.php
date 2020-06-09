<div id='BookmarksDiv' style='padding:0;margin:0;display:none;text-align:center;'>
<ul id='BookmarksTree'>

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

<script src='./Favorites/jquery-sortable-lists-mobile.min.js'></script>
<script>
    console.log('#BookmarksTree');
    console.log($('#BookmarksTree'));
    var options = {
        //insertZonePlus: true
    }
    $('#BookmarksTree').sortableLists(options);
</script>
