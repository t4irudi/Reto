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
              url: "http://192.168.6.165/Reto/servicios.php",
              type:"post",
              success:function(response)
              {
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
  
});
