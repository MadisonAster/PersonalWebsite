<?php
$ProjectContent = file("./_Assets/Projects/FanControl/content.html");
foreach ($ProjectContent as &$ProjectValue) {
    echo $ProjectValue;
};
?>