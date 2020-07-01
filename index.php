<?php
$template = file("template.html");
foreach ($template as &$value) {
    if(strpos($value,"{menu}") !== false){
        include 'menu.php';
    }elseif(strpos($value,"{background}") !== false){
        include 'background.php';
    }elseif(strpos($value,"{content}") !== false){
        include 'content.php';
    }elseif(strpos($value,"{footer}") !== false){
        include 'footer.php';
    }else{
        echo $value;
    };
};
?>