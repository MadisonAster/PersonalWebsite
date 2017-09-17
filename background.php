<?php
$SeqPath = file_get_contents("background.html");
$files = glob($SeqPath . "*.webp");


$firstFrame = $files[0];
$lastFrame = $files[count($files) - 1];

echo "    <img id='BackgroundImg1' class='BackgroundImg' src='./_Assets/Stills/NameTitle.png'";

echo " about='";
$array = explode('.' , $firstFrame);
echo $array[count($array) - 2];
echo "'";

echo " title='";
$array = explode('.' , $lastFrame);
echo $array[count($array) - 2];
echo "'>";

echo "\n    </img>\n";
?>