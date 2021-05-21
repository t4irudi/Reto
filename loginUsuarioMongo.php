<?php
$user = $_POST['user2'];
$password = $_POST['password2'];
$ch = curl_init();
$params = ['user='$user'&pwd='$password];
//var_dump($params);
/*
$defaults = array(
  CURLOPT_URL => 'http://192.168.6.169:8080/api/login',
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => $params,
);
*/
curl_setopt($ch, CURLOPT_URL, 'http://192.168.6.169:8080/api/login');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
//var_dump($defaults);

//curl_setopt_array($ch, $defaults);
$data = curl_exec($ch);
$data = json_decode($data, true);
curl_close($ch);
var_dump($data);
/*
if (sizeof($user)==0) {

  header("location: login.php");
}else {

  session_start();
  $_SESSION['user'] = $user;
  //var_dump($_SESSION['user']);
  header("location: index2.php");
}
*/
?>
