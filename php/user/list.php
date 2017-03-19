<?php

require_once __DIR__.'/../dataBase/connection/DB.php';

$db=new DB();

session_start();
if(empty($_SESSION['username'])) {
    header('HTTP/1.0 403 Forbidden');
    exit;
}

$groupId = isset($_REQUEST['group']);

$sql = 'SELECT id, name, userName, email, picture, groups_id FROM User';

if ($groupId) {
    $sql .= '  WHERE groups_id=?';
    $resultdb = $db->getRows($sql,["$groupId"]);

}else{
    $groupId=1;
    $sql .= '  WHERE groups_id=?';
    $resultdb = $db->getRows($sql,["$groupId"]);
}
$myval=$db->getRows($sql,["$groupId"]);

$result = array();

if ($resultdb) {
//    $profile['id'] = $resultdb['id'];
//    $profile['name'] = $resultdb['name'];
//    $profile['userName'] = $resultdb['userName'];
//    $profile['email'] = $resultdb['email'];
//    $profile['picture'] = $resultdb['picture'];
//    $profile['groups_id'] = $resultdb['groups_id'];


    foreach($resultdb as $item) {

        $profile['group'] = $item;
        /*$sqlQuery = 'SELECT * FROM Groups WHERE id = ?';// . $profile['groups_id'];
        $resultDb1=$db->getRow($sqlQuery,$profile['group_id']);

        if ($resultDb1) {
            foreach ($resultDb1 as $item) {
                $profile['group'] = $item;
            }
        }*/

        $result[] = $item;
    }

    $resultdb=null;

}

echo json_encode(array(
    "success" =>'success',
    "data" => $result,
    "groupsid"=> $groupId,
    "resultDB" => $myval,
    "query"=>$sql
));

/* close connection */
$db=null;

