
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
		echo $_SESSION['user'];
		 ?>
		 <table id="tablaCastellano" class="blueTable">
 			<thead>
 				<tr>
 					<th class="numberFila">Nombre</th>
 					<th class="thPregunta">Apellido </th>
 					<th class="th">UserName</th>
 					<th class="th">Password</th>
 				</tr>
 			</thead>
 			<tbody>
 				<?php
					echo "<tr>";
						echo "<td>". $_SESSION['user']['nombre'] ."</td>";
						echo "<td>". $_SESSION['user']['apellido'] ."</td>";
						echo "<td>". $_SESSION['user']['user'] ."</td>";
						echo "<td>". $_SESSION['user']['pwd'] ."</td>";
					echo "</tr>";
 				?>
 				</tbody>
 			</table>
			<button onclick="acceptWindow()">¡¡BORRAR USUARIO!!</button>
			<script>
			function acceptWindow() {

	  		var r = confirm("Estas seguro de que deseas borrar el usuario?");
	  		if (r == true) {
					window.location.href = 'borrarUsuario.php';
	  		}else{

				}

			}
		</script>
	</div>
<tr>
	<td></td>
</tr>
	<div id="pie">
		<p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
	</div>
<script src="js/jquery-3.6.0.min.js"></script>
</body>

</html>
