<?php

require_once __DIR__.'/../dataBase/connection/DB.php';

$db=new DB();
session_start();

$sql = 'SELECT * FROM Groups';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql .= ' WHERE id = ?';
}

$result = array();
$resultDb= $db->getRow($sql,["$id"]);

if ($resultDb) {

  foreach($resultDb as $item) {
    $result[] = $item;
  }

$resultDb=null;
}

echo json_encode(array(
"success" => 'success',
"data" => $result
));

$db=null;