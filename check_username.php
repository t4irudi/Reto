<?php
    /*** mysql hostname ***/
    $hostname = '192.168.6.169:3306';

    /*** mysql username ***/
    $username = 'almi';

    /*** mysql password ***/
    $password = 'Almi123';

    /*** mysql databse ***/
    $dbname = 't4irudi';

    try
    {
        $dbh = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password);
        /*** echo a message saying we have connected ***/
        //echo 'Connected to database';
    }
    catch(PDOException $e)
    {
        echo $e->getMessage();
    }

    $stmt = $dbh->prepare("SELECT * FROM users where user = ?");
    $stmt->execute(array($_POST['user']));
    echo $stmt->rowCount();
?>
