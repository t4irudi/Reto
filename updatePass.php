<?php
  include "datos.php";
  session_start();
  $password = $_POST["password"];
  $id = $_SESSION["user"]["id_user"];

  $resultado = updateUsuario($password, $id);
  header("location: modificarUsuario.php");
 ?>
