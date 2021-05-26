<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<html lang="es" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>T4's Reto</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">



</head>

<body>

	<div id="cabeza">
		<h1 id="titulo"><a href="index.php">T4-Irudi™</a></h1>
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
<div id="formulario">
      <label>Pregunta</label>
      <input type="text" class="css" id="pregunta" placeholder="Escriba aqui la nueva pregunta">
      <br>
      <label>Respuesta A</label>
      <input type="text" class="css" id="resA" placeholder="Escriba aqui la primera respuesta" >
      <br>
      <label>Respuesta B</label>
      <input type="text" class="css" id="resB" placeholder="Escriba aqui la segunda respuesta">
      <br>
      <label>Respuesta C</label>
      <input type="text" class="css" id="resC" placeholder="Escriba aqui la tercera respuesta">
      <br>
      <label>Respuesta D</label>
      <input type="text" class="css" id="resD" placeholder="Escriba aqui la cuarta respuesta">
      <br>
      <label>Seleccione cual es la respuesta correcta</label>
      <br>
      <input type="radio"  name="rb" value="a" checked>
      <label for="A">A</label>
      <br>
      <input type="radio" name="rb" value="b">
      <label for="B">B</label>
      <br>
      <input type="radio" name="rb" value="c">
      <label for="C">C</label>
      <br>
      <input type="radio" name="rb" value="d">
      <label for="D">D</label>
      <br>
      <label>Explicacion</label>
      <input type="text" class="css" id="explicacion" placeholder="Escriba aqui la explicacion de la pregunta">
      <br>
      <label>Imagen</label>
      <input type="text" class="css" id="imagen" placeholder="Escriba aqui la ruta de la imagen">
      <br>
      <select id="tipo">
        <option value="fol">FOL</option>
        <option value="ingles">Ingles</option>
      </select>
      <br>
      <button id="nuevaPregunta" class="css2" name="enviar" value="enviar">Enviar</button>
    </div>

  </div>

  <div id="pie">
    <p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
  </div>
  <script src="js/jquery-3.6.0.min.js"></script>
  <script src="js/preguntasMongo.js"></script>
</body>

</html>
