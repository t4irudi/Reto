<?php
  $user = $_POST["user"];
  $password = $_POST["password"];
  $nombre = $_POST["name"];
  $apellido = $_POST["lastname"];

  include "datos.php";
  $resultado = insertarUsuario($user, $password, $nombre, $apellido);
  header("location: index.php");
 ?>
