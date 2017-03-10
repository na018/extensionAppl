<?php


require_once __DIR__.'/../connection/DB.php';
$db = new DB();



$db->insertRow('insert into  Groups(`name`) VALUES(?)',  ['admin']);
$db->insertRow('insert into  User(`name`,`userName`,`password`,`email`,`Group_id`) VALUES(?,?,?,?,?)',   ['Nadin-Katrin Apel','na018','Test1.','mail@blub.com','1']);

echo 'just some text here :)';
