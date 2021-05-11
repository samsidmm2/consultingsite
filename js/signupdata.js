// window.addEventListener('load', () => {

//     const params = (new URL(document.location)).searchParams;
//     const fname = params.get('firstname');
//     const lname = params.get('lastname');
//     const professemail = params.get('proEmail');
//     const eduemail = params.get('schoolEmail');

//     document.getElementById('result-fname').innerHTML = fname;
//     document.getElementById('result-lname').innerHTML = lname;
//     document.getElementById('result-proEmail').innerHTML = professemail;
//     document.getElementById('result-lname').innerHTML = eduemail;




// })



function signupForm() {

    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var proEmail = document.getElementById("proEmail");
    var schoolEmail = document.getElementById("schoolEmail");
    var password = document.getElementById("password");
    var password2 = document.getElementById("password2");

    if (proEmail == 1 && schoolEmail == 1) {
        firstname.style.border = "1px solid #ff8471";
        error_message("fn_err_msg", "An account with these email(s) already existed.");
    }
    else if (password != password2) {
        firstname.style.border = "1px solid #ff8471";
        error_message("fn_err_msg", "Password Must Match.");

    }
    else {
        if (typeof (localStorage) != "undefined" && proEmail != 1 && schoolEmail != 1) {
            localStorage.name = document.getElementById("firstname").value;
            localStorage.name = document.getElementById("lastname").value;
            localStorage.name = document.getElementById("proEmail").value;
            localStorage.name = document.getElementById("schoolEmail").value;
        }
    }
    document.getElementById("form").submit();
}