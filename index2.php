
<html lang="es" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>T4's Reto</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
</head>
<?php
  session_start();
  if (isset( $_SESSION["user"]) == false) {
    // code...
    header("location: login.php");
  }
  include("datos.php");
?>
<body>

	<div id="cabeza">
		<h1 id="titulo"><a href="#">T4-Irudi™</a></h1>
		<div id="menu">
            <ul>
                <li class="active">
                    <a href="#">Inicio</a>
                </li>
								<li>
									<a href="ingles.php">Ingles</a>
								</li>
								<li>
									<a href="castellano.php">Castellano</a>
								</li>
            </ul>
        </div>
				<div id="menu3">
		         <ul>
								 <li>
 									<a href="modificarUsuario.php">Modificar</a>
 								</li>
								<li>
										<a href="borrarUsuario.php">Borrar Usuario</a>
								</li>
							<li>
								<a href="logOut.php">Cerrar Sesion</a>
							</li>
		         </ul>
		    </div>
	</div>

	<div id="cuerpo">

	</div>

	<div id="pie">
		<p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
	</div>
<script src="js/jquery-3.6.0.min.js"></script>
</body>

</html>
