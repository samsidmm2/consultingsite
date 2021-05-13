//for contact.html
function sendEmail() {
    Email.send({
        Host: "stmp.gmail.com",
        Username: "example@email.com",
        Password: "password",
        To: "email",
        From: "example@email.com",
        Subject: "Student STEM Consulting Team",
        Body: "Welcome to STEM Student Consulting Team"
    }).then(
        message => alert("mail send successfully")
    );
}

function error_message(id, message) {
    document.getElementById(id).innerText = message;
}

function validateContact() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var firstnameValue = firstname.value;
    var lastnameValue = lastname.value;
    var emailValue = email.value;
    var messageValue = message.value;



    if (firstnameValue == "") {
        proEmail.style.border = "1px solid #ff8471";
        error_message("fname_err_msg", "This field is required and cannot be empty.");

    }

    if (lastnameValue == "") {
        proEmail.style.border = "1px solid #ff8471";
        error_message("lname_err_msg", "This field is required and cannot be empty.");

    }



    if (emailValue == "") {
        proEmail.style.border = "1px solid #ff8471";
        error_message("email_err_msg", "This field is required and cannot be empty.");

    }

    if (messageValue == "") {
        password.style.border = "1px solid #ff8471";
        error_message("msg_err_msg", "This field is required and cannot be empty.");

    }


    if (firstnameValue == "" || lastnameValue == "" || emailValue == "" || messageValue == "") {
        alert("Please fill this out. This is required");
        return false;
    } else {
        return true;
    }



    // alert(firstnameValue + " " + lastnameValue + " " + proEmailValue + " " + schoolEmailValue + " " + passwordValue + " " + password2Value);

}
