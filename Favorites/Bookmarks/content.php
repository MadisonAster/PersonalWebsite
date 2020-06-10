<div id='BookmarksDiv' style='padding:0;margin:0;display:none;text-align:left;'>
<ol class='FolderTree listsClass' id='BookmarksTree'>

<?php
$Entry_json = './Favorites/Bookmarks/snapshot/entry.json';
$json = file_get_contents($Entry_json);
$Bookmarks = json_decode($json, TRUE);

function PrintLink($link) {
    echo "<li id='item_".$link['id']."' data-module='".$link['id']."' class='s-l-closed clickable'>";
    echo "<div class='clickable'><a target='_blank' href='".$link['url']."'>".$link['_title']."</a></div>";
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

function RecursivelyPrintFolders($folders) {
    foreach ($folders as &$folder){
        if(substr($folder['_title'], 0, 1) !== '_'){
            echo "<li id='item_".$folder['id']."' data-module='".$folder['id']."' class='s-l-closed clickable'>";
            if (strpos($folder['_title'], '|') !== false) {
                list($none, $title, $year, $level) = explode('|', $folder['_title']);
                echo "<div class='clickable'>";
                    echo "<div class='clickable' style='padding:0;margin:0;'>";
                        echo "<p class='clickable' style='margin:0;width:50%;float:left;text-align:left;'>".$title."</p>";
                        echo "<p class='clickable' style='margin:0;width:50%;float:right;text-align:right;'><span style='color:#4f4f4f;'>Proficiency</span> ".$level."    <span style='color:#4f4f4f;'>|</span>    ".$year."</p>";
                    echo "</div>";
                    echo "<div class='clickable' style='clear:both;padding:0;margin:0;'></div>";
                echo "</div>";
            } else {
                echo "<div class='clickable'>".$folder['_title']."</div>";
            };
            echo "<ol class='clickable' style='display:inline-block;'>";
            RecursivelyPrintFolders($folder['folders']);
            foreach ($folder['links'] as &$link){
                PrintLink($link);
            };
            echo "</ol>";
            echo "</li>";
        };
    };
};

RecursivelyPrintFolders($Bookmarks['folders']);
?>

</ol>
</div>

<link rel='stylesheet' type='text/css' href='./Favorites/Bookmarks/BookmarksTree.css' />
<link rel='stylesheet' type='text/css' href='./Favorites/Bookmarks/font-awesome-4.7.0/css/font-awesome.min.css' />

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
            as: 'html',  // or "class" or skip if using background-image url
            close: '<i class="fa fa-minus red"></i>', // or 'fa fa-minus' or './Favorits/Bookmarks/imgs/Remove2.png'
            open: '<i class="fa fa-plus"></i>', // or 'fa fa-plus' or './Favorits/Bookmarks/imgs/Add2.png'
            // or like a class. Note that class can not rewrite default values. To rewrite defaults you have to do it through css object.
            openerClass: 's-l-opener',
        },
        
        
    
    }
    $('#BookmarksTree').sortableLists(options);
    
</script>