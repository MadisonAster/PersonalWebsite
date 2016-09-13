<div id='ResourcesDiv' style='padding:0;margin:0;display:none;'>
<div id='ResourcesGrid' class='row-fluid' style='width:100%;margins:0;padding:0;'>
<div id="jstree-proton-3">
</div>
<script>
$(function() {
  $('#jstree-proton-3').jstree({
        'plugins': ["wholerow"],
        'core': {
            'data': [{
                    "text": "Wholerow with checkboxes",
                    "children": [
                    {
                        "text": "initially selected",
                        "state": {
                            "selected": true
                        }
                    }, {
                        "text": "custom icon URL",
                        "icon": "./_js/jstree/demo/assets/images/tree_icon.png"
                    }, {
                        "text": "initially open",
                        "state": {
                            "opened": true
                        },
                        "children": ["Another node"]
                    }, {
                        "text": "custom icon class",
                        "icon": "glyphicon glyphicon-leaf"
                    
                    },
<?php
$blacklist = array('.', '..');
$dirs = array_filter(glob('./_Assets/Bookmarks/*'), 'is_dir');
foreach ($dirs as &$dir){
    if(!in_array($dir, $blacklist)){
		$dirArray = explode("/", $dir);
		if(file_exists($dir.'/info.php')){
            include $dir.'/info.php';
            echo "{";
            echo "'text': '$dir',";
            echo "'children': [";
			foreach ($infoArray as $Link => $Title){
                echo "{";
				//$tags = get_meta_tags($Link);
				//echo "<pre>";
				//print_r($tags);
				//echo "<a href='".$Link."'>".$Title."</a>";
                echo '"text": "'.$Title.'",';
                echo "}, ";
			};
            echo "{}]";
            echo "},";
        };
    };
};
?>
                ]
            }],
            'themes': {
                'name': 'proton',
                'responsive': true
            }
        }
    });
    
});
</script>
</div>
</div>
