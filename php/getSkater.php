<?php

$connection = new mysqli("localhost", "root", "mypass", "sencha");

$query = "SELECT * FROM skater";

$result = $connection->query($query);
$arr = array();

while($row = $result->fetch_assoc()) {
    $arr[] = $row;
}
echo json_encode($arr);

