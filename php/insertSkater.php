//
//$connection = new mysqli("localhost", "root", "mypass", "sencha");
//
//$query = "INSERT INTO skater(`name`, `birthday`,`coach`,`image`,`info`)"." VALUES('".$_POST['name']."','".
//    $_POST['birthday']."','".$_POST['coach']."','".$_POST['image']."','".$_POST['info']."')";
//
//$connection->query($query);

<?php

require_once __DIR__.'/DB.php';
$db = new DB();

$db->insertRow(
    'insert into skater(`name`,`birthday`,`coach`,`image`,`info`) VALUE (?,?,?,?,?)',
    [$_POST['name'],
        $_POST['birthday'],
        $_POST['coach'],
        $_POST['image']
        ,$_POST['info']
    ]);