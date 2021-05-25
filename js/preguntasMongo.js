$(document).ready(function()
{
  console.log("cargado");
  $("#nuevaPregunta").on('click', function(event) {
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
    //alert(data['a']);
     if (pregunta.trim().length == 0 || resA.trim().length == 0 || resB.trim().length == 0 || resC.trim().length == 0 || resD.trim().length == 0
       || exp.trim().length == 0  || img.trim().length == 0 ) {
       alert("rellena todo");
       event.preventDefault();
     }else if (!$.isNumeric(img)) {
       alert("mete un numero en imagen");
       event.preventDefault();
     } else {
       $.ajax({
         data: params,
         url: "http://192.168.6.169:8080/api/preguntas",
         type: "post",
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
});
