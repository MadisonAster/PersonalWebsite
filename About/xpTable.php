        <table id='ExperienceTable' class='sortable' align='left' style='position:inline;max-width:450px;border:solid 1px white;margin-right:40px;'>
        <tbody>
        <tr style='height:40px;'>
        <th style='width:200px;'>Name</th>
        <th style='width:125px;'>First Use</th>
        <th style='width:125px;'>Skill Level</th>
        </tr>
<?php
$table = file("./About/xpTable.csv");
foreach ($table as &$line){
    echo "\r\n        <tr>";
    $items = explode(",", $line);
    foreach ($items as $item){
        echo "\r\n            <td>";
        echo "\r\n                ".$item;
        echo "\r\n            </td>";
    };
    echo "\r\n        </tr>";
};
?>
</tbody>
</table>