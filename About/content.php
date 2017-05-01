<?php
$content = file("./About/content.html");
foreach ($content as &$value) {
    if(strpos($value,"{xpTable}") !== false){
        include 'xpTable.php';
    }elseif(strpos($value,"{ResumeTemplate}") !== false){
        include 'ResumeTemplate.html';
    }else{
        echo $value;
    };
};
?>