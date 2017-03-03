<?php
/**
 * @param $val
 */
function die_r($val){
    echo '<pre>';
    print_r($val);
    echo '</pre>';
    die();

}
require_once __DIR__.'/DB.php';
$db=new DB();


$getRow=$db->getRow('select * from skater where id=?',['1']);
die_r($getRow);

