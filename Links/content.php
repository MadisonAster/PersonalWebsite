<script src='./Links/showSubSection.js'></script>
<div class="shuffle__sizer" style='height:60px;width:25%;margin-left:0;'></div>

<?php
$blacklist = array('.', '..', 'stats');
$Linkdirs = array_filter(glob('./Links/*'), 'is_dir');

$content = file("./Links/content.html");
foreach($Linkdirs as &$Linkdir){
    echo $Linkdir;
};
foreach ($content as &$value) {
    if(strpos($value,"{contentArea}") !== false){
        foreach($Linkdirs as &$Linkdir){
            if(!in_array($Linkdir, $blacklist)){
                if(substr($Linkdir, 8, 9) !== '_'){
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