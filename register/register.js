$(function () {

    $("#form-register").keypress(function (e) {

    });
    $("#submit").on("click", function () {
        if (validation_fields() == true) {
            if (check_email_format() == true) {
                if (validation_password() == true) {
                    if (validation_password() == true) {
                        register_ajax();
                    }
                }
            }
        }
    });

    $("#input-name").keypress(function () {
        $("#input-name").css("border-bottom", "1px solid #000000");
        $("#small-name").attr("class", "text-danger hidden");
    });

    $("#input-email").keypress(function () {
        $("#input-email").css("border-bottom", "1px solid #000000");
        $("#small-email").attr("class", "text-danger hidden");
        $("#check-email").attr("class", "text-danger hidden");
    });

    $("#input-password").keypress(function () {
        $("#input-password").css("border-bottom", "1px solid #000000");
        $("#small-password").attr("class", "text-danger hidden");
    });

    $("#input-conf-password").keypress(function () {
        $("#input-conf-password").css("border-bottom", "1px solid #000000");
        $("#small-conf-password").attr("class", "text-danger hidden");
        $("#different-password").attr("class", "text-danger hidden");
    });

});

//valida se os campos estão nulos
function validation_fields() {
    var i = 0;

    if ($("#input-name").val() != "") {
        i++;
    } else {
        $("#input-name").css("border-bottom-color", "#e22020");
        $("#small-name").attr("class", "text-danger");
    }


    if ($("#input-email").val() != "") {
        i++;
    } else {
        $("#input-email").css("border-bottom-color", "#e22020");
        $("#small-email").attr("class", "text-danger");

    }

    if ($("#input-password").val() != "") {
        i++;
    } else {
        $("#input-password").css("border-bottom-color", "#e22020");
        $("#small-password").attr("class", "text-danger");
    }

    if ($("#input-conf-password").val() != "") {
        i++;
    } else {
        $("#input-conf-password").css("border-bottom-color", "#e22020");
        $("#small-conf-password").attr("class", "text-danger");
    }

    if (i == 4) {
        return true;
    } else {
        return false;
    }
}

//valida se as senhas estao iguais
function validation_password() {
    if ($("#input-password").val() == $("#input-conf-password").val()) {
        return true;
    } else {
        $("#input-conf-password").css("border-bottom-color", "#e22020");
        $("#small-conf-password").attr("class", "text-danger");
        return false;
    }
}

function check_email_format() {
    var email = $("#input-email").val();
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Se o e-mail não estiver no formato certo
    if ((email.search(regex) == -1)) {
        $("#input-email").css("border-bottom", "1px solid #e22020");
        $("#check-email").attr("class", "text-danger");
        return false;
    } else {
        return true;
    }
}

function register_ajax() {
    var dados = {
        "name" : $("#input-name").val(),
        "email": $("#input-email").val(),
        "password": $("#input-password").val(),
    }

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'function/register-user.php',
        data: dados,
        beforeSend: function () {
            $("#submit").attr("class", "btn btn-outline-default purple btn-block btn-round hidden");
            $("#loading").attr("class", "btn btn-outline-defalt orange btn-block btn-round");
        },
        success: function (data) {
            if(data.return == true){
                 // se tudo ir certo com email e senha é redirecionado
                 $("#loading").attr("class", "btn btn-outline-defalt orange btn-block btn-round hidden");
                 $("#finish").attr("class", "btn btn-outline-success btn-block btn-round");
                 setTimeout(function(){ 
                     $(location).attr('href', '../login/login.php');
                 }, 1400);
            }else if(data.return == false){
                swal("Oops!", "Ocorreu um erro, tente novamente!", "warning")
            }
        },
        complete: function (){
            $("#submit").attr("class", "btn btn-outline-default purple btn-block btn-round");
            $("#loading").attr("class", "btn btn-outline-defalt orange btn-block btn-round hidden");
        }
    });
}