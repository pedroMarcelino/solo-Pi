$(function () {
    // executa quando o usuario clicar no enter dentro do form
    $("#form-login").keypress(function (e) {
        if (e.which == 13) {
            execute_error_null();

            if (check_email_null() == false && check_password_null() == false) {
                if (check_email_format($("#input-email").val()) == false) {
                    send_ajax();
                }
            }
        }
    });

    $("#submit").on("click", function () {
        execute_error_null();

        if (check_email_null() == false && check_password_null() == false) {
            if (check_email_format($("#input-email").val()) == false) {
                send_ajax();
            }
        }
    });

    // seta os inputs e os small's para default, caso estejam trocados; 
    $("#input-email").keypress(function () {
        $("#input-email").css("border-bottom", "1px solid #000000");
        $("#small-email").attr("class", "text-danger hidden");
        $("#check-email").attr("class", "text-danger hidden");
    });
    $("#input-password").keypress(function () {
        $("#input-password").css("border-bottom", "1px solid #000000");
        $("#small-password").attr("class", "text-danger hidden");
    });
});

// verifica se o email é vazio
function check_email_null() {
    var email = $("#input-email").val();
    if (email == "") {
        return true;
    } else {
        return false;
    }
}

// verifica se a senha é vazia
function check_password_null() {
    var password = $("#input-password").val();
    if (password == "") {
        return true;
    } else {
        return false;
    }
}

// executa o desing cado os inputs estejam vazios 
function execute_error_null() {
    if (check_email_null() == true) {
        $("#input-email").css("border-bottom", "1px solid #e22020");
        $("#small-email").attr("class", "text-danger");
    }
    if (check_password_null() == true) {
        $("#input-password").css("border-bottom", "1px solid #e22020");
        $("#small-password").attr("class", "text-danger");
    }
}

// checka o formato do email 
function check_email_format(email) {
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

// envia o ajax para o checar se existe o usuario 
function send_ajax() {
    var dados = {
        "email": $("#input-email").val(),
        "password": $("#input-password").val(),
    }

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'function/validation-login.php',
        async: true,
        data: dados,
        beforeSend: function () {
            $("#submit").attr("class", "btn btn-outline-default purple btn-block btn-round hidden");
            $("#loading").attr("class", "btn btn-outline-defalt orange btn-block btn-round");
        },
        success: function (data) {
            if(data.return){
                // se tudo ir certo com email e senha é redirecionado
                $("#loading").attr("class", "btn btn-outline-defalt orange btn-block btn-round hidden");
                $("#finish").attr("class", "btn btn-outline-success btn-block btn-round");
                setTimeout(function(){ 
                    $(location).attr('href', '../index/index.php');
                }, 1400);
            }else{
                // cado a senha esteja errada
                swal("Oops!", "Senha errada, digite digite novamente!", "warning");
                $("#input-password").val("");
                $("#input-password").css("border-bottom", "1px solid #e22020");
                $("#small-password").attr("class", "text-danger");
                $("#submit").attr("class", "btn btn-outline-default purple btn-block btn-round");
                $("#loading").attr("class", "btn btn-outline-defalt orange btn-block btn-round hidden");
            }

            if(data.return == "user_not_found"){
                // caso nao encontre nehum usuario
                swal("Oops!", "Nenhum usuario cadastrado, se registre!", "error");
                $("#input-email").val("");
                $("#input-password").val("");
                $("#input-email").css("border-bottom", "1px solid #e22020");
                $("#input-password").css("border-bottom", "1px solid #e22020");
                $("#small-email").attr("class", "text-danger");
                $("#small-password").attr("class", "text-danger");
                $("#submit").attr("class", "btn btn-outline-default purple btn-block btn-round");
                $("#loading").attr("class", "btn btn-outline-defalt orange btn-block btn-round hidden");

            }
        },
        complete: function () {

        }
    });


}