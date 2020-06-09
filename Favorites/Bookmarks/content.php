<div id='BookmarksDiv' style='padding:0;margin:0;display:none;text-align:left;'>
<ul id='BookmarksTree' class='FolderTree'>

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

<script type='text/css'>
#BookmarksTree li, #sortableListsBase li { background-color:#ddf, padding-left:50px }
</script>

<script src='./Favorites/Bookmarks/jquery-sortable-lists-mobile.js'></script>
<script>
    console.log('#BookmarksTree');
    console.log($('#BookmarksTree').html());
    var options = {
        // Like a css class name. Class will be removed after drop.
        currElClass: 'currElemClass',
        // or like a jQuery css object. Note that css object settings can't be removed
        currElCss: {'background-color':'green', 'color':'#fff'},
        
        placeholderClass: 'placeholderClass',
        // or like a jQuery css object
        placeholderCss: {'background-color':'yellow'},
        
        
        hintClass: 'hintClass',
        // or like a jQuery css object
        hintCss: {'background-color':'green', 'border':'1px dashed white'},
        
        listSelector: 'ol',
        hintWrapperClass: 'hintClass',
        // or like a jQuery css object
        hintWrapperCss: {'background-color':'green', 'border':'1px dashed white'},
    
        listSelector: 'ol',
        listsClass: 'FolderTree',
        // or like a jQuery css object
        listsCss: {'background-color':'silver', 'border':'1px solid white'},   
        
        // All elements with class clickable will be clickable
        ignoreClass: 'clickable',
        
        insertZone: 50,
        
        insertZonePlus: true,
    }
    $('#BookmarksTree').sortableLists(options);
</script>
