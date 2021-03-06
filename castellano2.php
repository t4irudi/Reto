

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
  include("db.php");
?>

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
									<a href="#">Castellano</a>
								</li>
            </ul>
        </div>
				<div id="menu2">
		         <ul>
		             <li>
		                 <a href="registro.php">Registro</a>
		             </li>
							<li>
								<a href="login.php">Login</a>
							</li>
		         </ul>
		    </div>
	</div>

	<div id="cuerpo">
		<button class="botonPreguntas" onclick='soloPreguntas()'>Preguntas</button>
		<button class="botonPreguntasRespuestas" onclick="preguntasRespuestas()">Preguntas + Respuestas</button>
		<label for="cantidad">Selecciona la cantidad de preguntas que quieres cargar: </label>
    <a href="logOut.php"><button type="button" name="button">AFJAhfeuie</button></a>
		<select onchange="generateData()" name="cantidad" id="cantidad">
  		<option value="t" selected>Selecciona...</option>
  		<option value="10">10</option>
  		<option value="20">20</option>
  		<option value="30">30</option>
		</select>

		<table id="tablaCastellano" class="blueTable">
			<thead>
				<tr>
					<th class="thPregunta">Pregunta </th>
					<th class="th">Primera respuesta </th>
					<th class="th">Segunda respuesta </th>
					<th class="th">Tercera respuesta </th>
					<th class="th">Cuarta respuesta </th>
				</tr>
			</thead>
			<tbody>

				<?php

		   		$ch = curl_init();
		   		curl_setopt($ch, CURLOPT_URL, 'http://192.168.6.169:8080/api/preguntas/fol/');
		   		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		   		curl_setopt($ch, CURLOPT_HEADER, 0);
		   		$data = curl_exec($ch);
					curl_close($ch);
			 		$data = json_decode($data, true);

					$count = count($data);


					for ($i=0; $i < $count; $i++) {

						echo "<tr>";
							echo "<td class='tdPregunta'>". $data[$i]['pregunta'] . "</td>";
							echo "<td class='td'>". $data[$i]['a'] . "</td>";
							echo "<td class='td'>". $data[$i]['b'] . "</td>";
							echo "<td class='td'>". $data[$i]['c'] . "</td>";
							echo "<td class='td'>". $data[$i]['d'] . "</td>";
						echo "</tr>";
					}
				?>
				</tbody>
			</table>
			<script src="jquery-3.6.0.min.js"></script>
			<script>
				var tds = document.getElementsByClassName('td');
				var ths = document.getElementsByClassName('th');

				function soloPreguntas() {

					for (var i = 0; i < tds.length; i++) {
						tds[i].hidden = true
					}
					for (var i = 0; i < ths.length; i++) {
						ths[i].hidden = true
					}
					$('#tablaCastellano').css("width", "30%");
				}

				function preguntasRespuestas() {
					for (var i = 0; i < tds.length; i++) {
						tds[i].hidden = false
					}
					for (var i = 0; i < ths.length; i++) {
						ths[i].hidden = false
					}
					$('#tablaCastellano').css("width", "88%");
				}
				function generateData() {
					var optionText = document.getElementById("cantidad").value;

					alert(optionText);

				}

			</script>
	</div>

	<div id="pie">
		<p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
	</div>

</body>

</html>
