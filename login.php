<html lang="es" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>T4's Reto</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
  <?php
    include("datos.php");
   ?>
</head>

<body>

	<div id="cabeza">
		<h1 id="titulo"><a href="index.php">T4-Irudi™</a></h1>
		<div id="menu">
            <ul>
                <li class="active">
                    <a href="index.php">Inicio</a>
                </li>
								<li>
									<a href="ingles.php">Ingles</a>
								</li>
								<li>
									<a href="castellano.php">Castellano</a>
								</li>
            </ul>
        </div>
				<div id="menu2">
		         <ul>
		             <li>
		                 <a href="registro.php">Registro</a>
		             </li>
							<li>
								<a href="#">Login</a>
							</li>
		         </ul>
		    </div>
	</div>

	<div id="cuerpo">
<form id="formulario" action="loginUsuario.php" method="post">
    <div id="infoWeb">
        <h2>Información para la web</h2>
        <label for="user">Usuario</label>
        <input type="text" id="user" name="user" placeholder="Escriba su usuario" /><br>
        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Escriba su contraseña" /><br>
    </div>
    <input id="enviar" type="submit" value="Enviar" />
</form>
</div>

<div id="pie">
  <p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
</div>

</body>

</html>
