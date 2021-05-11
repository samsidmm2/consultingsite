function setData() {
    if (typeof (localStorage) != "undefined") {
        document.getElementById("firstname").innerHTML = localStorage.name;
        document.getElementById("lastname").innerHTML = localStorage.name;
        document.getElementById("proEmail").innerHTML = localStorage.name;
        document.getElementById("schoolEmail").innerHTML = localStorage.name;

    }
}