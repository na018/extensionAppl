<?php


///*$var ='haha';
//echo "<script type='text/javascript'>alert('$var');</script>";
////var_dump($_POST);*/

require_once __DIR__.'/../connection/DB.php';
$db = new DB();



$test=$db->insertRow(
    'insert into skater(`name`,`birthday`,`coach`,`image`,`info`) VALUES(?,?,?,?,?)',
    [$_POST['name'],
        $_POST['birthday'],
        $_POST['coach'],
        $_POST['image']
        ,$_POST['info']
    ]);
