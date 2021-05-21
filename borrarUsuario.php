<?php
  include "datos.php";
  session_start();
  var_dump($_SESSION['user']['id_user']);
  $resultado = borrarUsuario($_SESSION['user']['id_user']);
  var_dump($resultado);
  //header("location: login.php");
?>
