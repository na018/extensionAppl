<?php
/**
 * @param $val
 */
function die_r($val){
    echo '<ul>';
    foreach ($val as $key=> $v){
        echo '<li>["'.$key .'"] =>'.$v.'</li>';
    }
    echo '</ul>';
}
function die_r_arr($val){

    foreach ($val as $v){
        echo '<ul>';
        foreach ($v as $key=>$v2) {
            echo '<li>["'.$key .'"] =>'. $v2 . '</li>';
        }
        echo '</ul>';
    }

}
require_once __DIR__.'/DB.php';
$db=new DB();
$userName="na018";

$sql=$db->getRow('select * from User where userName=?',["$userName"]);

echo "<li>".count($sql)."sql: $sql</li>";
echo "<li>$sql</li>";
echo "<li>".gettype($sql)."</li>";
if($sql)
    echo 'true';
else echo 'false';
$getRow=$db->getRow('select * from skater where id=?',['1']);

$getRows=$db->getRows('select * from skater');

//$insertRow=$db->insertRow('insert into skater(`name`,`birthday`,`coach`,`image`,`info`) VALUE (?,?,?,?,?)',['Vanessa','2017-03-05   ','Parker','img.jpg','info text']);

//$updateRow=$db->updateRow('update skater set `name`=?,`info`=? where id=?',['New Name','I am a very interesting info text :D <br> Cheers and Good By :D',4]);

//$deleteRow=$db->deleteRow('delete from skater where id = ?',[9]);

die_r($sql);
die_r_arr($getRows);

