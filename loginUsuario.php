<?php
  include "datos.php";
  $user = login($_POST['user'], $_POST['password']);
  //var_dump($user);

  if (sizeof($user)==0) {

    header("location: login.php");
  }else {

    session_start();
    $_SESSION['user'] = $user;
    //var_dump($_SESSION['user']);
    header("location: index2.php");
  }
?>
