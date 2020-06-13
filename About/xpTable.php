        <table id='ExperienceTable' class='sortable' align='left' style='position:inline;max-width:450px;border:solid 1px white;margin-right:40px;'>
        <tbody>
        <tr style='height:40px;'>
        <th style='width:200px;'>Name</th>
        <th style='width:125px;'>First Use</th>
        <th style='width:125px;'>Skill Level</th>
        </tr>
<?php
$table = file("./Favorites/Bookmarks/snapshot/xpTable.csv");
$Skills = [];
foreach ($table as &$line){
    echo "\r\n        <tr>\r\n            ";
    $items = explode(",", $line);
    $SkillsObject = array(
        "title" => $items[0],
        "year" => $items[1],
        "proficiency " => $items[1],
    );
    array_push($Skills, $SkillsObject);
    foreach ($items as $item){
        $item = trim(preg_replace('/\s+/', ' ', $item));
        echo "<td>";
        echo $item;
        echo "</td>";
    };
    echo "\r\n        </tr>";
};
echo "        <script type='text/javascript'>";
echo "          window.Skills = ".json_encode($Skills).";";
echo "        </script>";
?>
</tbody>
</table>