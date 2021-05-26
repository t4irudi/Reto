$(document).ready(function () {
  $("#repassword").on("change textInput input", function () {

      var pass1 = $("#password").val();

      var pass2 = $("#repassword").val();


      if (pass1 != pass2 || pass1.length < 3) {
          $("#repassword").css("background-color", "red");
          event.preventDefault();
      } else {
          $("#repassword").css("background-color", "green");

      }
      console.log("bien");



      $.ajax({
        data: pass1,
        url: "http://192.168.6.165/Reto/updatePass.php",
        type: "post",
        success: function(res) {
          console.log("not success");
            },
        error: function(err) {
          console.log('err');
          console.log(err);
        }
      });

  });

});
