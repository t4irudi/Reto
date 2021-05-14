<?php
  include "datos.php";
  $user = login($_POST['user'], $_POST['password']);

  if (sizeof($user)==0) {

    header("location: login.php");
  }else {

    session_start();
    $_SESSION['user'] = $user['usuario'];
    header("location: castellano2.php");
  }
?>
