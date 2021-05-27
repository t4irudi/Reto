
<html lang="es" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>T4's Reto</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
</head>
<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/modificar.js"></script>
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
		<h1 id="titulo"><a href="index.php">T4-Irudi™</a></h1>
		<div id="menu">
            <ul>
                <li class="active">
                    <a href="index">Inicio</a>
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
										 <a href="#">Modificar</a>
		             </li>
								 <li>
									 <a href="logOut.php">Cerrar Sesion</a>
								 </li>
		         </ul>
		    </div>
	</div>

	<div id="cuerpo">
		<?php
		  echo "<h2 id='tituloUsername'>Bienvenido <span>". $_SESSION['user']['user'] ."</span></h2>";
		 ?>
		 <table id="tablaCastellano" class="blueTable">
 			<thead>
 				<tr>
 					<th class="thPregunta">Nombre </th>
 					<th class="th">Apellido</th>
 					<th class="th">Password</th>
 				</tr>

 			</thead>
 			<tbody id='userInfo'>
 				<?php
					echo "<tr>";
						echo "<td>". $_SESSION['user']['nombre'] ."</td>";
						echo "<td>". $_SESSION['user']['apellidos'] ."</td>";
						echo "<td>". $_SESSION['user']['pwd'] ."</td>";
					echo "</tr>";

 				?>
 				</tbody>
 			</table>

			<?php
			if ($_SESSION['user']['id_user']>5) {
			echo	'<button id="borrar" onclick="acceptWindow()">¡¡BORRAR USUARIO!!</button>';
			}
			?>
			<script>
			function acceptWindow() {

	  		var r = confirm("Estas seguro de que deseas borrar tu usuario? Sería una falta de respeto.");
	  		if (r == true) {
					window.location.href = 'borrarUsuario.php';
	  		}else{

				}

			}
		</script>
		<form id="userInfoPanel" action="updatePass.php" method="post">
				<label for="password">Su nueva contraseña</label>
				<input class="css" type="password" id="password" name="password" placeholder="Escriba su contraseña" /><br>
				<br>
				<label for="repassword">Repita su contraseña</label>
				<input class="css" type="password" id="repassword" name="repassword" placeholder="Repita su contraseña" /><br>
				<br>
				<input class="css2" id="enviar" type="submit" value="Guardar" />
			</form>

		<button class="button1"	>Modificar contraseña</button>
		<button class="button2" style="display : none">Atras</button>
		<script>
			$(".button1").click( function()
					{
						$("#tablaCastellano").toggle("slow");
						$("#userInfoPanel").toggle("slow");
						$(".button1").toggle();
						$(".button2").toggle();
						$("#borrar").toggle();
					}
			);
			$(".button2").click( function()
					{
						$("#tablaCastellano").toggle("slow");
						$("#userInfoPanel").toggle("slow");
						$(".button1").toggle();
						$(".button2").toggle();
						$("#borrar").toggle();
					}
			);
		</script>

	</div>
<tr>
	<td></td>
</tr>
<div class="pie">
	<div id="primera" class="column">
		<br>
		<p id="motivation">We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
		<br>
		<p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
	</div>
	<div id="segunda" class="column">
		<h2>Contactos</h2>
		<br>
		<h3>Telefono:</h3>
		<p>-693958928</p>
		<h3>Redes Sociales:</h3>
		<p>Instagram: <a href="https://www.instagram.com/" target="_blank">@t4_irudi</a></p>
		<p>Facebook: <a href="https://www.facebook.com/" target="_blank">t4Irudi</a></p>
	</div>
	<div class="column">
		<h2>Jugadores</h2>
		<br>
		<a href="registro.php"><h3>Registrate ahora</h3></a>
		<br>
		<p>Ya tienes una cuenta?</p>
		<br>
		<a href="login.php"><h3>Inicia Sesion</h3></a>
	</div>
</div>

</body>

</html>
