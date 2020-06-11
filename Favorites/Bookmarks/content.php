<div id='BookmarksDiv' style='padding:0;margin:0;display:none;text-align:left;'>
<ol class='FolderTree listsClass' id='BookmarksTree'>

<?php
$Entry_json = './Favorites/Bookmarks/snapshot/entry.json';
$json = file_get_contents($Entry_json);
$Bookmarks = json_decode($json, TRUE);

function PrintLink($link) {
    echo "<li id='item_".$link['id']."' data-module='".$link['id']."' class='sortableListsClosed clickable'>";
    echo "<div class='clickable'><a class='clickable' target='_blank' href='".$link['url']."'>".$link['_title']."</a></div>";
    echo "<ol class='LinkWrapper clickable'>";
        echo "<div class='LinkContent clickable'>";
        if ($link['description'] != 'None'){
            echo $link['description'];
        };
        if ($link['keyword'] != 'None'){
            echo $link['keyword'];
        };
        echo "</div>";
    echo "</ol>";
    echo "</li>";
};
function SortByPosition($a, $b) {
    return $a['position'] - $b['position'];
}

function RecursivelyPrintFolders($folders, $colors, $root=false, $color=null) {
    usort($folders, 'SortByPosition');
    foreach ($folders as &$folder){
        if ($root){
            $colorindex = intval($folder['position']) % sizeof($colors);
            $color = $colors[$colorindex];
        }
        if(substr($folder['_title'], 0, 1) !== '_'){
            if (strpos($folder['_title'], '|') !== false) {
                echo "<li id='item_".$folder['id']."' data-module='".$folder['id']."' class='sortableListsClosed clickable' style='border-color:#".$color.";background-color:#".$color.";'>";
                list($none, $title, $year, $level) = explode('|', $folder['_title']);
                echo "<div class='clickable'>";
                    echo $title."<span class='clickable' style='color:#4f4f4f;'>  -  </span><span class='clickable' style='color:rgba(0,255,0,0.".substr($level,0,2).");'>".$level."</span><span class='clickable' style='color:#4f4f4f;'> Proficiency    |    First Used ".$year."</span>";
                echo "</div>";
            } else {
                if ($root){
                    echo "<li id='item_".$folder['id']."' data-module='".$folder['id']."' class='sortableListsOpen clickable' style='border-color:#".$color.";background-color:#".$color.";'>";
                } else {
                    echo "<li id='item_".$folder['id']."' data-module='".$folder['id']."' class='sortableListsOpen clickable'>";
                }
                echo "<div class='clickable'>".$folder['_title']."</div>";
            };
            if ($root){
                echo "<ol class='clickable' style='border-color:#".$color.";'>";
                //echo "<ol class='clickable'>";
            } else {
                echo "<ol class='clickable'>";
            }
            RecursivelyPrintFolders($folder['folders'], $colors, false, $color);
            $links = $folder['links'];
            usort($links, 'SortByPosition');
            foreach ($folder['links'] as &$link){
                PrintLink($link);
            };
            echo "</ol>";
            echo "</li>";
        };
    };
};
$Colors = Array(
    '3F3F3F',
    'D23747',
    'DAA35B',
    'DDDD6B',
    '1A742B',
    '3333D1',
    '781C72',
    '3F3F3F',
    '3F3F3F',
    '3F3F3F',
);
RecursivelyPrintFolders($Bookmarks['folders'], $Colors, true, null);
?>

</ol>
</div>

<link rel='stylesheet' type='text/css' href='./Favorites/Bookmarks/BookmarksTree.css' />

<script src='./Favorites/Bookmarks/jquery-sortable-lists-mobile.js'></script>
<script>
    var options = {
        listSelector: 'ol',
        listsClass: 'FolderTree',
        listsCss: {'background-color':'silver', 'border':'1px solid white'},   
        ignoreClass: 'clickable',
        insertZone: 50,
        opener: {
            active: true,
            as: 'html', 
            close: '<img src="./Favorites/Bookmarks/imgs/Remove.png" style="width:18px;height:18px;"></img>',
            open: '<img src="./Favorites/Bookmarks/imgs/Add.png" style="width:22px;height:18px;"></img>', 
            openerClass: 'sortableListsOpener',
        },
    }
    $('#BookmarksTree').sortableLists(options);
</script>