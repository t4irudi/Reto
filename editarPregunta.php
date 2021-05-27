<?php ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL); ?>
<html lang="es" dir="ltr">

<head>
	<meta charset="utf-8">
	<title>T4's Reto</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
  <script src="js/jquery-3.6.0.min.js"></script>
</head>
<?php
  session_start();
  if (isset( $_SESSION["user"]) == false) {
    header("location: login.php");
  }
  include("datos.php");
  $id = $_POST['id'];
  var_dump($id);
?>
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
								<a href="logOut.php">Cerrar Sesion</a>
							</li>
		        </ul>
		    </div>
	</div>
  <?php
  $pregunta = "";
  $resA = "";
  $resB = "";
  $resC = "";
  $resD = "";
  $respuesta = "";
  $explicacion = "";
  $imagen = "";
  if ($id != null) {
		$ch = curl_init();
    $url = ("http://192.168.6.169:8080/api/preguntas/".$id);
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		$data = curl_exec($ch);
		curl_close($ch);
		$data = json_decode($data, true);
    $pregunta = $data[0]['pregunta'];
    $resA = $data[0]['a'];
    $resB = $data[0]['b'];
    $resC = $data[0]['c'];
    $resD = $data[0]['d'];
    $respuesta = $data[0]['respuesta'];
    $explicacion = $data[0]['explicacion'];
    $imagen = $data[0]['imagen'];
  }
	?>

	<div id="cuerpo">
    <div id="formulario">
      <?php
      echo "<label>Pregunta</label>";
      echo "<input type='text' class='css' id='pregunta' value='".$pregunta."'>";
      echo "<br>";
      echo "<label>Respuesta A</label>";
      echo "<input type='text' class='css' id='resA' value='".$resA."'>";
      echo "<br>";
      echo "<label>Respuesta B</label>";
      echo "<input type='text' class='css' id='resB' value='".$resB."'>";
      echo "<br>";
      echo "<label>Respuesta C</label>";
      echo "<input type='text' class='css' id='resC' value='".$resC."'>";
      echo "<br>";
      echo "<label>Respuesta D</label>";
      echo "<input type='text' class='css' id='resD' value='".$resD."'>";
      echo "<br>";
      echo "<label>Seleccione cual es la respuesta correcta</label>";
      echo "<br>";
      echo "<input type='radio' name='rb' value='a' ".($respuesta == 'a' ? "checked" : '').">";
      echo "<label for='A'>A</label>";
      echo "<br>";
      echo "<input type='radio' name='rb' value='b' ".($respuesta == 'b' ? "checked" : '').">";
      echo "<label for='B'>B</label>";
      echo "<br>";
      echo "<input type='radio' name='rb' value='c' ".($respuesta == 'c' ? "checked" : '').">";
      echo "<label for='C'>C</label>";
      echo "<br>";
      echo "<input type='radio' name='rb' value='d' ".($respuesta == 'd' ? "checked" : '').">";
      echo "<label for='D'>D</label>";
      echo "<br>";
      echo "<label>Explicacion</label>";
      echo "<input type='text' class='css' id='explicacion' value='".$explicacion."'>";
      echo "<br>";
      echo "<label>Imagen</label>";
      echo "<input type='text' class='css' id='' value='".$imagen."'>";
      echo "<br>";
      echo "<select id=''>";
      echo "<option value='fol''>FOL</option>";
      echo "<option value='ingles'>Ingles</option>";
      echo "</select>";
      echo "<br>";
      echo "<button id='enviar' class='css2' name='enviar' value='enviar'>Enviar</button>";
      ?>
    </div>

  </div>

  <div id="pie">
    <p id="Copyright">Copyright 1999-2021 by t4Irudi Data. All Rights Reserved. T4 is powered by la planta santa</p>
  </div>
  <script src="js/jquery-3.6.0.min.js"></script>
  <script>
    $("#enviar").on('click', function(event) {
    var id = "<?php echo $id;?>"
    var pregunta = $("#pregunta").val();
    var resA = $("#resA").val();
    var resB = $("#resB").val();
    var resC = $("#resC").val();
    var resD = $("#resD").val();
    var rb = $('input:radio[name=rb]:checked').val();
    var exp= $("#explicacion").val();
    var img = $("#imagen").val();
    var tipo = $('#tipo').val();

    var params = {
      pregunta: pregunta,
      a: resA,
      b: resB,
      c: resC,
      d: resD,
      respuesta: rb,
      explicacion: exp,
      imagen: img,
      categoria: tipo
    }
     if (pregunta.trim().length == 0 || resA.trim().length == 0 || resB.trim().length == 0 || resC.trim().length == 0 || resD.trim().length == 0
       || exp.trim().length == 0  || img.trim().length == 0 ) {
       alert("No puede quedar ningún campo vacío.");
       event.preventDefault();
     } else {
       $.ajax({
         data: params,
         url: "http://192.168.6.169:8080/api/preguntas/" + id,
         type: "put",
         success: function(res) {
             console.log('success');
             location.reload(true);
             },
         error: function(err) {
           console.log('err');
           console.log(err);
         }
       });
     }



  });
  </script>
</body>

</html>
