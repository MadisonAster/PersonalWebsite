<script src='./Favorites/showSubSection.js'></script>
<div class="shuffle__sizer" style='height:60px;width:25%;margin-left:0;'></div>
<?php
$blacklist = array('.', '..', 'stats');
$Linkdirs = array_filter(glob('./Favorites/*'), 'is_dir');

$content = file("./Favorites/content.html");
foreach ($content as &$value) {
    if(strpos($value,"{contentArea}") !== false){
        foreach($Linkdirs as &$Linkdir){
            if(!in_array($Linkdir, $blacklist)){
                if(strpos($Linkdir, '_') == false){
                    include $Linkdir."/content.php";
                };
            };
        };
    }else{
        echo $value;
    };
};
?>
<div class="clear">&nbsp;</div>