<div id='BookmarksDiv' style='padding:0;margin:0;display:none;text-align:left;'>
<ul class='FolderTree listsClass' id='BookmarksTree'>

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
    
    echo "<li id='item_".$folder['id']."' data-module='".$folder['id']."' class='s-l-closed clickable'>";
    echo "<div>".$folder['_title']."</div>";
    echo "<ul class='' style='display:inline-block;'>";
    foreach ($folder['folders'] as &$subfolder){
        echo "<li id='item_".$subfolder['id']."' data-module='".$subfolder['id']."' class='s-l-closed clickable'>";
        echo "<div>".$subfolder['_title']."</div>";
        echo "<ul class='' style='display:inline-block;'>";
        foreach ($subfolder['links'] as &$link){
            echo "<li id='item_".$link['id']."' data-module='".$link['id']."' class='s-l-closed clickable'>";
            echo "<div><a target='_blank' href='".$link['url']."'>".$link['_title']."</a></div>";
            echo "<ul class='LinkWrapper'>";
                echo "<div class='LinkContent'>";
                if ($link['description'] != 'None'){
                    echo $link['description'];
                };
                if ($link['keyword'] != 'None'){
                    echo $link['keyword'];
                };
                echo "</div>";
            echo "</ul>";
            echo "</li>";
        };
        echo "</ul>";
        echo "</li>";
    };
    foreach ($folder['links'] as &$link){
        echo "<li id='item_".$link['id']."' data-module='".$link['id']."' class='s-l-closed clickable'>";
        echo "<div><a target='_blank' href='".$link['url']."'>".$link['_title']."</a></div>";
        echo "<ul class='LinkWrapper'>";
            echo "<div class='LinkContent'>";
            if ($link['description'] != 'None'){
                echo $link['description'];
            };
            if ($link['keyword'] != 'None'){
                echo $link['keyword'];
            };
            echo "</div>";
        echo "</ul>";
        echo "</li>";
    };
    echo "</ul>";
    echo "</li>";
};
?>

</ul>
</div>

<link rel='stylesheet' type='text/css' href='./Favorites/Bookmarks/BookmarksTree.css' />
<link rel='stylesheet' type='text/css' href='./Favorites/Bookmarks/font-awesome-4.7.0/css/font-awesome.min.css' />

<script src='./Favorites/Bookmarks/jquery-sortable-lists-mobile.js'></script>
<script>
    /*
    var options = {
        placeholderCss: {'background-color': '#ff8'},
        hintCss: {'background-color':'#bbf'},
        onChange: function( cEl )
        {
            console.log( 'onChange' );
        },
        complete: function( cEl )
        {
            console.log( 'complete' );
        },
        isAllowed: function( cEl, hint, target )
        {
            // Be carefull if you test some ul/ol elements here.
            // Sometimes ul/ols are dynamically generated and so they have not some attributes as natural ul/ols.
            // Be careful also if the hint is not visible. It has only display none so it is at the previouse place where it was before(excluding first moves before showing).
            if( target.data('module') === 'c' && cEl.data('module') !== 'c' )
            {
                hint.css('background-color', '#ff9999');
                return false;
            }
            else
            {
                hint.css('background-color', '#99ff99');
                return true;
            }
        },
        opener: {
            active: true,
            as: 'html',  // if as is not set plugin uses background image
            //close: '<i class="fa fa-minus c3"></i>',  // or 'fa-minus c3',  // or './imgs/Remove2.png',
            close: './Favorits/Bookmarks/imgs/Remove2.png',
            //open: '<i class="fa fa-plus"></i>',  // or 'fa-plus',  // or'./imgs/Add2.png',
            open: './Favorits/Bookmarks/imgs/Add2.png',
            openerCss: {
                'display': 'inline-block',
                //'width': '18px', 'height': '18px',
                'float': 'left',
                'margin-left': '-35px',
                'margin-right': '5px',
                //'background-position': 'center center', 'background-repeat': 'no-repeat',
                'font-size': '1.1em'
            }
        },
        ignoreClass: 'clickable'
    };
    var optionsPlus = {
        insertZonePlus: true,
        placeholderCss: {'background-color': '#ff8'},
        hintCss: {'background-color':'#bbf'},
        opener: {
            active: true,
            as: 'html',  // if as is not set plugin uses background image
            close: '<i class="fa fa-minus c3"></i>',
            open: '<i class="fa fa-plus"></i>',
            openerCss: {
                'display': 'inline-block',
                'float': 'left',
                'margin-left': '-35px',
                'margin-right': '5px',
                'font-size': '1.1em'
            }
        }
    };
    
    $('#sTree2').sortableLists( options );
    //$('#sTreePlus').sortableLists( optionsPlus );
    */
    
    var options = {
        // Like a css class name. Class will be removed after drop.
        //currElClass: 'currElemClass',
        // or like a jQuery css object. Note that css object settings can't be removed
        //currElCss: {'background-color':'red', 'color':'#fff'},
        
        //placeholderClass: 'placeholderClass',
        // or like a jQuery css object
        //placeholderCss: {'background-color':'yellow'},
        
        //hintClass: 'hintClass',
        // or like a jQuery css object
        //hintCss: {'background-color':'green', 'border':'1px dashed white'},
        
        //listSelector: 'ul',
        //hintWrapperClass: 'hintWrapperClass',
        // or like a jQuery css object
        //hintWrapperCss: {'background-color':'blue', 'border':'1px dashed white'},
    
        listSelector: 'ul',
        listsClass: 'FolderTree',
        // or like a jQuery css object
        listsCss: {'background-color':'silver', 'border':'1px solid white'},   
        
        // All elements with class clickable will be clickable
        ignoreClass: 'clickable',
        
        insertZone: 50,
        
        //insertZonePlus: true,
        
        //scroll: 20,
        
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