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