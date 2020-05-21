<div id='BookmarksDiv' style='padding:0;margin:0;display:none;'>
<!--
<div id='BookmarksGrid' class='row-fluid' style='width:100%;margins:0;padding:0;'>
<div id="jstree-proton-3">
</div>
PlaceHolder

<script>
$(function() {
  $('#jstree-proton-3').jstree({
        'plugins': ["wholerow"],
        'core': {
            'data': [
?  <php
$blacklist = array('.', '..');
$dirs = array_filter(glob('./_Assets/Bookmarks/*'), 'is_dir');
foreach ($dirs as &$dir){
    if(!in_array($dir, $blacklist)){
		$dirArray = explode("/", $dir);
        $lastEl = array_pop((array_slice($dirArray, -1)));
		if(file_exists($dir.'/info.php')){
            include $dir.'/info.php';
            echo '                    {';
            echo '                        "text": "'.$lastEl.'",';
            echo '                        "state": {';
            echo '                            "selected": false';
            echo '                        },';
            echo '                        "children": [';
			foreach ($infoArray as $Link => $Title){
                echo '                            {';
				//$tags = get_meta_tags($Link);
				//echo "<pre>";
				//echo "<a href='".$Link."'>".$Title."</a>";
                echo '                            "text": "'.$Title.'",';
                echo '                            "state": {';
                echo '                            "selected": false';
                echo '                            }';
                echo '                            }, ';
			};
            echo '                        ]';
            echo '                    },';
        };
    };
};
?>
            ],
            'themes': {
                'name': 'proton',
                'responsive': true
            }
        }
    });
    
});
</script>
</div>
-->
This section will eventually host a live snapshot of my extensive library of bookmarks, however I haven't finished the front end code for it yet.
</div>
