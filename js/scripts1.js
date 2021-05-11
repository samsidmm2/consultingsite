function error_message(id, message) {
    document.getElementById(id).innerText = message;
}

function validate() {
    var proEmail = document.getElementById("proEmail1");
    var password = document.getElementById("passwordLogin");

    var proEmailValue = proEmail.value;
    var passwordValue = password.value;



    if (proEmailValue == "") {
        proEmail.style.border = "1px solid #ff8471";
        error_message("pemail_err_msg", "This field is required and cannot be empty.");

    }

    if (passwordValue == "") {
        password.style.border = "1px solid #ff8471";
        error_message("pw_err_msg", "This field is required and cannot be empty.");

    }


    if (proEmailValue == "" || passwordValue == "") {
        alert("Please fill this out. This is required");
        return false;
    } else {
        return true;
    }



    // alert(firstnameValue + " " + lastnameValue + " " + proEmailValue + " " + schoolEmailValue + " " + passwordValue + " " + password2Value);

}
