<?php

function conectarBBDD()
{
    //Abrir una conexión

    $mysqli = new mysqli("192.168.6.169:3306", "almi", "Almi123", "t4irudi");
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

      $bind = $sentencia->bind_param("ssss", $user, $password, $nombre, $apellido);
      if(!$bind)
      {
        echo "Error al asociar parámetros";
      }
      $resultado = $sentencia->execute();

      $mysqli->close();
      return $resultado;
    }

    function login($user, $password)
    {
      $mysqli = conectarBBDD();
      $sql = "SELECT * FROM users WHERE user = ? AND pwd = ?";

      $sentencia = $mysqli->prepare($sql);
      if(!$sentencia)
      {
        echo "Fallo al preparar la sentencia";
      }

      $asignar = $sentencia->bind_param("ss", $user, $password);
      if(!$asignar)
      {
        echo "Fallo en la asignación de parámetros";
      }

      $ejecucion = $sentencia->execute();
      if(!$ejecucion)
      {
        echo "Fallo al ejecutar";
      }

      $id = -1;
      $usuario = "";
      $password = "";
      $nombre = "";
      $vincular = $sentencia->bind_result($id, $usuario, $password, $nombre);
      if(!$vincular)
      {
        echo "Fallo al vincular";
      }

      $usuarioResultado = array();

      if($sentencia->fetch())
      {
        $usuarioResultado = array(
          'id' => $id,
          'usuario' => $usuario,
          'password' => $password,
          'nombre' => $nombre
        );
      }

      $mysqli->close();
      return $usuarioResultado;
    }
?>
