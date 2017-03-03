
//
//$connection = new mysqli("localhost", "root", "mypass", "sencha");
//
//$query = "INSERT INTO skater(`name`, `birthday`,`coach`,`image`,`info`)"." VALUES('".$_POST['name']."','".
//    $_POST['birthday']."','".$_POST['coach']."','".$_POST['image']."','".$_POST['info']."')";
//
//$connection->query($query);

<?php
$servername = "localhost";
$username = "root";
$password = "mypass";
$dbName = "sencha";


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $columns = array('name','birthday','coach','image','info');

    foreach ($columns as $col){
        $col= '$_POST['.$col.']';
    }

    $sql = "INSERT INTO skater (`name`, `birthday`,`coach`,`image`,`info`)
    VALUES ('John', 'Doe', 'john@example.com')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
}
catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;