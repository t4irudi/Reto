<?php
function login ($id, $user, $password, $nombre, $apellidos) {
  echo "aaa";
  if (sizeof($nombre)==0) {
    header("location: login.php");
  } else {
    session_unset();
    session_start();
    $_SESSION['user']['id_user'] = $id;
    $_SESSION['user']['user'] = $user;
    $_SESSION['user']['pwd'] = $password;
    $_SESSION['user']['nombre'] = $nombre;
    $_SESSION['user']['apellidos'] = $apellidos;
    echo $_SESSION;

    header("location: modificarUsuario.php");
  }
}
 ?>
