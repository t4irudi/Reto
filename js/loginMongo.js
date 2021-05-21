$(document).ready(function()
{
  $("#enviar2").click(function(event) {
    var user = $("#user2").val();
    var password = $("#password2").val();

    var data = {};
    data.user = user;
    data.pwd = password;
    console.log(data);
    //var parametros = {user: user, password: password};
    $.ajax({
      data: data,
      url: 'http://192.168.6.169:8080/api/login',
      type: 'post',
      success: function(data) {
          console.log('success');
          //Si no hay login
          if (data != null) {
            var numFuncion = 0;

            var dataDos = {};
              dataDos.function = numFuncion;
              dataDos.datos = data;
            $.ajax({
              data: dataDos,
              url: "http://127.0.0.1/Reto/servicios.php",
              type:"post",
              success:function(response)
              {
                  console.log(response);
                  window.location.href = "modificarUsuario.php";

              },
              error:function(err)
              {
                console.log(err);
              }
            });
          } else {

          }
      },
      error: function(err) {
        console.log('err');
      }
  });
});

  /*
  $(".primerbox").on("change", function(){
    var idtag = $(this).val();

    var parametros = {function: 'noticiasbyid_tag', id_tag: idtag};
    $.ajax({
      data: parametros,
      url: "http://127.0.0.1/grupo_musical/servicios.php",
      type:"post",
      success:function(response)
      {
        var noticiasArray = $.parseJSON(response);
        console.log(noticiasArray);
        var tamArray = noticiasArray.length;
        $(".segundobox").html("");
        $(".tercerbox").html("");
        $("#detallesNoticia").html("");
        $(".segundobox").append("<option></option>");
        for(var i = 0; i < tamArray; i++)
        {
          var noticia = noticiasArray[i];
          var htmlNoticia = "<option value='"+noticia.fecha+"%'>" + noticia.fecha + "</option>";
          $(".segundobox").append(htmlNoticia);
        }
      },
      error:function(err)
      {
        console.log(err);
      }
    });
  });

  $(".segundobox").on("change", function(){
    var idtag = $('.primerbox').val();
    var fecha = $(this).val();
      var parametros = {function: 'noticiasytags', id_tag: idtag, fecha:fecha};
      console.log(parametros);

      $.ajax(
      {
        data:parametros,
        url:"http://127.0.0.1/grupo_musical/servicios.php",
        type:"post",
        success:function(response)
        {


        },
        error:function(err)
        {
          console.log(err);
        }
      });
  });

  $('.tercerbox').on("change", function(){
    var id_noticia = $(this).val();

    var parametros = {function: 'noticiasbyid', id_noticia: id_noticia};
    $.ajax({
      data: parametros,
      url: "http://127.0.0.1/grupo_musical/servicios.php",
      type:"post",
      success:function(response)
      {
      },
      error:function(err)
      {
        console.log(err);
      }
    });
  });
*/
});
