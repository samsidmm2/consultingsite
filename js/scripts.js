var i = 0;
var images = [];
var time = 3000; // seconds

//Image List
images[0] = 'C:/Users/sykes/Documents/Personal Projects/Consulting Website/js/img/doctors.jpg';
images[1] = 'C:/Users/sykes/Documents/Personal Projects/Consulting Website/js/img/mathematician.png';
images[2] = 'C:/Users/sykes/Documents/Personal Projects/Consulting Website/js/img/chemists.png';
images[3] = 'C:/Users/sykes/Documents/Personal Projects/Consulting Website/js/img/engineers.jpg';
images[4] = 'C:/Users/sykes/Documents/Personal Projects/Consulting Website/js/img/itscientists.jpg';
images[5] = 'C:/Users/sykes/Documents/Personal Projects/Consulting Website/js/img/researchers.jpg';

//Changing Image Function

function changeImage() {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImage()", time);
}
window.onload = changeImage;

///For The date and Time in the Form
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth + 1;
// var yyyy = today.getFullYear();
// var hhhh = today.toLocaleTimeString();

// if (dd < 10) {
//     dd = '0' + dd.toString();
// }
// if (mm < 10) {
//     mm = '0' + mm.toString();
// }

// today = yyyy + '-' + mm + '-' + dd + 'T' + hhhh;
// // document.getElementById("appointtime").setAttribute("min", today);

// // var localday = mm + '-' + dd + '-' + yyyy;
// document.getElementById("appointday").setAttribute("min", today);

// time = hhhh;
// document.getElementById("appointtime").setAttribute("min", time);


//login and account creation

function error_message(id, message) {
    document.getElementById(id).innerText = message;
}

function validate() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var proEmail = document.getElementById("proEmail");
    var schoolEmail = document.getElementById("schoolEmail");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");

    var firstnameValue = firstname.value;
    var lastnameValue = lastname.value;
    var proEmailValue = proEmail.value;
    var schoolEmailValue = schoolEmail.value;
    var passwordValue = password.value;
    var password2Value = password2.value;

    if (firstnameValue == "") {
        firstname.style.border = "1px solid #ff8471";
        error_message("fn_err_msg", "This field is required and cannot be empty.");

    }
    if (lastnameValue == "") {
        lastname.style.border = "1px solid #ff8471";
        error_message("ln_err_msg", "This field is required and cannot be empty.");

    }
    if (proEmailValue == "") {
        proEmail.style.border = "1px solid #ff8471";
        error_message("pemail_err_msg", "This field is required and cannot be empty.");

    }
    if (schoolEmailValue == "") {
        schoolEmail.style.border = "1px solid #ff8471";
        error_message("semail_err_msg", "This field is required and cannot be empty.");

    }
    if (passwordValue == "") {
        password.style.border = "1px solid #ff8471";
        error_message("pw_err_msg", "This field is required and cannot be empty.");

    }
    if (password2Value == "") {
        password2.style.border = "1px solid #ff8471";
        error_message("pw2_err_msg", "This field is required and cannot be empty.");

    }

    if (firstnameValue == "" || lastnameValue == "" || proEmailValue == "" || schoolEmailValue == "" || passwordValue == "" || password2Value == "" || password2Value != passwordValue && passwordValue != password2Value && passwordValue.length != password2Value.length) {
        alert("Please fill this out. This is required");
        return false;
    } else {
        return true;
    }



    // alert(firstnameValue + " " + lastnameValue + " " + proEmailValue + " " + schoolEmailValue + " " + passwordValue + " " + password2Value);

}

