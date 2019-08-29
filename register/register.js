$(function () {
    
    $("#form-register").keypress(function (e) {
        
    });
    $("#submit").on("click", function () {
        
    });
    
});

//valida se os campos estão nulos
function validation_fields() {
    var i = 0;

    if ($("#input-name").val() != "") {
        i += 1;
    } else {
        i += 0;
    }


    if ($("#input-email").val() != "") {
        i += 1;
    } else {
        i += 0;
    }

    if ($("#input-password").val() != "") {
        i += 1;
    } else {
        i += 0;
    }

    if ($("#input-conf-password").val() != "") {
        i += 1;
    } else {
        i += 0;
    }

    if (i == 4) {
        return true;
    } else {
        return false;
    }



}

//valida se as senhas estao iguais
function validation_password() {
    if ($("#input-password") === $("#input-conf-password")) {
        return true;
    } else {
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
        return true;
    } else {
        return false;
    }
}