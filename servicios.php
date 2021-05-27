<?php

if(isset($_SERVER['HTTP_ORIGIN']))
{

  header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Max-Age: 86400");
}

if($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
{
  if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");
  if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  exit(0);
}

header('Content-Type: application/JSON');

$function = $_POST['function'];
//include 'datos.php';

switch ($function) {
  case 0:
    // code...
    $id = $_POST['datos']['_id'];
    $user = $_POST['datos']['user'];
    $pwd = $_POST['datos']['pwd'];
    $nombre = $_POST['datos']['nombre'];
    $apellidos = $_POST['datos']['apellidos'];
    echo $id;
    include "loginUsuarioMongo.php";
    echo "xDx";
    login ($_POST['datos']['_id'], $_POST['datos']['user'], $_POST['datos']['pwd'], $_POST['datos']['nombre'], $_POST['datos']['apellidos']);

    //echo "okay";
  //  header("location: modificarUsuario.php");

    /*
    $user = {
      "_id" => $_POST['datos']['_id'],
      'user' => $_POST['datos']['user'],
      'pwd' => $_POST['datos']['pwd'],
      'nombre' => $_POST['datos']['nombre'],
      'apellidos' => $_POST['datos']['apellidos']
    };*/


    //session_start();
    //$_SESSION['user'] = $user;


    //var_dump($_SESSION['user']);
    //

    /*$noticias = noticiasbyid_tag($_POST['id_tag']);
    $noticiasJson = json_encode($noticias, JSON_UNESCAPED_UNICODE);
    echo $noticiasJson;*/
    break;

  default:
    // code...
    break;
}
?>
