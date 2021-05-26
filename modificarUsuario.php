
<html lang="es" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>T4's Reto</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
</head>
<script src="js/jquery-3.6.0.min.js"></script>
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
		<div id="userInfoPanel">
	      <label>Antigua contraseña</label>
	      <input type="text" class="css" id="resA" placeholder="Escriba aqui la primera respuesta" >
	      <br>
	      <label>Contraseña nueva</label>
	      <input type="text" class="css" id="resB" placeholder="Escriba aqui la segunda respuesta">
	      <br>
	      <label>Repita repit la contraseña</label>
	      <input type="text" class="css" id="resC" placeholder="Escriba aqui la tercera respuesta">
	      <br>
			</div>

		<button class="button1"	>Modificar</button>
		<button class="button2" style="display : none">Guardar</button>

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
		</script>

	</div>
<tr>
	<td></td>
</tr>
	<div id="pie">
		<p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
	</div>

</body>

</html>
