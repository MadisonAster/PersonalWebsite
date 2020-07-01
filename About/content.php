<?php
$content = file("./About/content.html");
foreach ($content as &$value) {
    if(strpos($value,"{xpTable}") !== false){
        include 'xpTable.php';
    }else{
        echo $value;
    };
};
?>