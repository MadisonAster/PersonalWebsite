<?php
$content = file("./_Assets/Projects/360RenderTests/content.html");
foreach ($content as &$value) {
    echo $value;
};
?>