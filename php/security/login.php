<?php
require_once __DIR__ . '/../dataBase/connection/DB.php';
require_once __DIR__ . '/MyPassHash.php';

session_start();

$userName = $_POST['user'];
$pass = $_POST['password'];


$db = new DB();


$sql = $db->getRow('select * from User where userName=?', ["$userName"]);

$result['query'] = "select * from User where userName='$userName'";


$foundHashedPW = $db->getRow('select `password` from User where userName=?', [$userName]);


if ($sql) {  //boolean true/false


    if (MyPassHash::check_password($foundHashedPW['password'], $pass)) {
        $_SESSION['authenticated'] = 'yes'; //#15
        $_SESSION['username'] = $userName; //#16

        $result['success'] = true; //#17
        $result['msg'] = 'User authenticated!'; //#18
//            echo json_encode($foundHashedPW[0].'---------------'.$pass.'\n'.MyPassHash::hash($pass));
//            $result['debug']=$foundHashedPW[0].'--------------'.$pass.'\n'.MyPassHash::hash($pass);
    } else {
        $result['success'] = false; //#19
        $result['msg'] = 'Incorrect password.' . $pass; //#20
//            $result['debug']=$foundHashedPW[0].'--------------'.$pass.'\n'.MyPassHash::hash($pass);
    }
} else {
    $result['success'] = false; //#21
    $result['msg'] = 'Incorrect user or password.'; //#22
//    $result['debug'] = $count . ' : ' . $sql;

//    echo json_encode($result);
}
//$result['debug']=$foundHashedPW['password'].'--------------'.$pass.'\n'.MyPassHash::hash($pass);
$resultDb = null;
$db = null;

echo json_encode($result);
