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
    
    echo "<li class='sortableListsOpen'>";
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
        
        scroll: 20,
        
        opener: {
            active: true,
            as: 'html',  // or "class" or skip if using background-image url
            //close: '<i class="fa fa-minus red"></i>', // or 'fa fa-minus' or './Favorits/Bookmarks/imgs/Remove2.png'
            close: './Favorits/Bookmarks/imgs/Remove2.png',
            //open: '<i class="fa fa-plus"></i>', // or 'fa fa-plus' or './Favorits/Bookmarks/imgs/Add2.png'
            open: './Favorits/Bookmarks/imgs/Add2.png',
            openerCss: {
                'display': 'inline-block', // Default value
                'float': 'left', // Default value
                'width': '18px',
                'height': '18px',
                'margin-left': '-35px',
                'margin-right': '5px',
                'background-position': 'center center', // Default value
                'background-repeat': 'no-repeat' // Default value
            },
            // or like a class. Note that class can not rewrite default values. To rewrite defaults you have to do it through css object.
            openerClass: 'yourClassName',
        },
        
        
    
    }
    $('#BookmarksTree').sortableLists(options);
</script>
