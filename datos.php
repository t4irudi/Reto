<?php

function conectarBBDD()
{
    //Abrir una conexión

    $mysqli = new mysqli("192.168.6.169", "almi", "Almi123", "t4irudi");
    if ($mysqli->connect_errno) {
        echo "Fallo en la conexión: " . $mysqli->connect_errno;
    }

    return $mysqli;
}
    
    function insertarUsuario($user, $password, $nombre, $apellido)
    {
      $mysqli = conectarBBDD();

      $sql = "INSERT INTO users( user, pwd, nombre, apellido) VALUES ( ?, ?, ?, ? )";
      $sentencia = $mysqli->prepare($sql);
      if(!$sentencia)
      {
        echo "Fallo al preparar la insert";
      }

      $bind = $sentencia->bind_param("sss", $user, $password, $nombre, $apellido);
      if(!$bind)
      {
        echo "Error al asociar parámetros";
      }
      $resultado = $sentencia->execute();

      $mysqli->close();
      return $resultado;
    }
    
