
<html lang="es" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>T4's Reto</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
	<script src="jquery-3.6.0.min.js"></script>
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
									<a href="#">Ingles</a>
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
									 	<a href="login.php">Login</a>
								</li>
		         </ul>
		    </div>
	</div>

	<div id="cuerpo">
		<button class="botonPreguntas" onclick='soloPreguntas()'>Preguntas</button>
		<button class="botonPreguntasRespuestas" onclick="preguntasRespuestas()">Preguntas + Respuestas</button>
		<table id="tablaIngles" class="blueTable">
			<thead>
				<tr>
					<th class="numberFila"></th>
					<th class="thPregunta">Question </th>
					<th class="th">1st answer </th>
					<th class="th">2nd answer </th>
					<th class="th">3rd answer </th>
					<th class="th">4th answer </th>
				</tr>
			</thead>
			<tbody>

				<?php

		   		$ch = curl_init();
		   		curl_setopt($ch, CURLOPT_URL, 'http://192.168.6.169:8080/api/preguntas/english/');
		   		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		   		curl_setopt($ch, CURLOPT_HEADER, 0);
		   		$data = curl_exec($ch);
					curl_close($ch);
		   		//echo $data;
			 		$data = json_decode($data, true);

					$count = count($data);

					for ($i=0; $i < $count; $i++) {
						$numcolumna = $i+1;
						echo "<tr>";
							echo "<td class='tdNumFila'>". $numcolumna . ".-</td>";
							echo "<td class='tdPregunta'>". $data[$i]['pregunta'] . "</td>";
							echo "<td class='td'>". $data[$i]['a'] . "</td>";
							echo "<td class='td'>". $data[$i]['b'] . "</td>";
							echo "<td class='td'>". $data[$i]['c'] . "</td>";
							echo "<td class='td'>". $data[$i]['d'] . "</td>";
							echo "<td class='editar'><a href='#'><img src='images/editar.png' class='img'/></td>";
                            echo "<td><input type='image' class='borrar' value='".$data[$i]['_id']."' src='images/borrar.png' class='img'/></td>";
						echo "</tr>";
					}
				?>
				
				</tbody>
			</table>
			<script>
				
					$('.borrar').click(function (event) {
    					if (confirm("¿Desea eliminar esta tabla?")) {
      						var id = $(this).val();
      						console.log(id);   						
      						$.ajax({
        						url: "http://192.168.6.169:8080/api/preguntas/" + id,
        						type: "delete",
        						success: function(res) {
            						console.log('success');
            						location.reload(true);
            					},
        						error: function(err) {
          							console.log('err');
          							console.log(err);
        						}
      						});      						
    					} else {
        					event.preventDefault();
    					}
  					});
			</script>
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
					$('#tablaIngles').css("width", "30%");
				}
				function preguntasRespuestas() {
					for (var i = 0; i < tds.length; i++) {
						tds[i].hidden = false
					}
					for (var i = 0; i < ths.length; i++) {
						ths[i].hidden = false
					}
					$('#tablaIngles').css("width", "88%");
				}
			</script>

	</div>

	<div id="pie">
		<p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
	</div>
</body>

</html>
