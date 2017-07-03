<?php
$ProjectContent = file("./_Assets/Projects/360RenderTests/content.html");
foreach ($ProjectContent as &$ProjectValue) {
    echo $ProjectValue;
};
?>