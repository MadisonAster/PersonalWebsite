<?php
$content = file("./_Assets/Projects/FanControl/content.html");
foreach ($content as &$value) {
    echo $value;
};
?>