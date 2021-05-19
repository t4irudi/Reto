<?php
  include "datos.php";
  session_start();

  $resultado = borrarUsuario($_SESSION['user']['user']);
  //header("location: login.php");
?>
