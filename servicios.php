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
    session_unset();
    session_start();
    $_SESSION['user']['id_user'] = $_POST['datos']['_id'];
    $_SESSION['user']['user'] = $_POST['datos']['user'];
    $_SESSION['user']['pwd'] = $_POST['datos']['pwd'];
    $_SESSION['user']['nombre'] = $_POST['datos']['nombre'];
    $_SESSION['user']['apellidos'] = $_POST['datos']['apellidos'];

    var_dump($_SESSION['user']);

    echo "okay";
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

/*
if($function == 'noticiasbyid_tag')
{
  $noticias = noticiasbyid_tag($_POST['id_tag']);
  $noticiasJson = json_encode($noticias, JSON_UNESCAPED_UNICODE);
  echo $noticiasJson;
} else if($function == 'noticiasbyid')
{
  $noticia = noticiasbyid($_POST['id_noticia']);
  $noticiaJson = json_encode($noticia, JSON_UNESCAPED_UNICODE);
  echo $noticiaJson;
} else if($function == 'noticiasytags')
{
  $noticiatag = noticiasytags($_POST['id_tag'], $_POST['fecha']);
  $noticiatagJson = json_encode($noticiatag, JSON_UNESCAPED_UNICODE);
  echo $noticiatagJson;
}else if($function == 'comprobarUsuario')
{
  $usuario = comprobarUsuario($_POST['user']);
  $usuarioJson = json_encode($usuario, JSON_UNESCAPED_UNICODE);
  echo $usuarioJson;
}
*/
?>
