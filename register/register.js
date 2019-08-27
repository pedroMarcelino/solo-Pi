$(function () {

});

function validation_fields() {
    var name, email, password = false;

    if ($("input-name").val() != "") {
        name = true;
    } else {
        name = false;
    }


}

function validation_password() {
    if ($("#input-password") === $("#input-conf-password")) {
        return true;
    } else {
        return false;
    }
}