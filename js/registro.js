var estado = 1;
$(document).ready(function () {
    $('#formulario').focusout(check_username);
    $("#formulario").submit(function (event) {
        $("#formulario input").css("background-color", "white");

        var pass1 = $("#password").val();
        var pass2 = $("#repassword").val();


        if (pass1 != pass2) {
            event.preventDefault();
            $("#repassword").css("background-color", "red");
        }



    });

    $("#repassword").on("change textInput input", function () {
        var pass1 = $("#password").val();

        var pass2 = $("#repassword").val();
        if (pass1 != pass2) {
            $("#repassword").css("background-color", "red");
        } else {
            $("#repassword").css("background-color", "green");
        }
    });
    $("#username").on("change textInput input", function () {
        var user1 = $("#username").val();

        var user2 = $("#username").val().toLowerCase();

        if (user1 != user2 || user1 == "") {
            event.preventDefault();
            $("#username").css("background-color", "red");
        } else {
            $("#username").css("background-color", "white");
        }
    });
});

$(document).ready(function () {
    $('#formulario').focusout(check_username);

    $("#formulario").submit(function (event) {
        if (estado != 0) {
            event.preventDefault();
            alert("el usuario esta ocupado");
        }
    });
  });
function check_username() {
    var username = $('#user').val();
    jQuery.ajax({
        type: 'POST',
        url: 'check_username.php',
        data: 'username=' + username,
        cache: false,
        success: function (response) {
            if (response == 0) {
                $("#username").css("background-color", "white");
                estado = 0;
            } else {
                $("#username").css("background-color", "red");
                estado = 1;
            }
        }
    });
}
