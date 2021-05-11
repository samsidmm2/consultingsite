// $(document).ready(function () {
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth + 1;
//     var yyyy = today.getFullYear();


//     if (dd < 10) {
//         // dd = '0' + dd.toString();
//         dd = '0' + dd
//     }
//     if (mm < 10) {
//         // mm = '0' + mm.toString();
//         mm = '0' + mm
//     }
//     var minToday = yyyy + '-' + mm + '-' + dd;


//     $('#txtDate').attr('min', minToday);


// });

// Use Javascript
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

var maximumDate = yyyy + '-' + (mm + 3) + '-' + dd;

var minDate = document.getElementById("txtDate").setAttribute("min", today);
var maxDate = document.getElementById("txtDate").setAttribute("max", maximumDate);



var hh = today.getHours();
var mm = today.getMinutes();
var time = hh + ':' + mm;

// var minTime = document.getElementById("appointtime").min = "8:00";
// var maxTime = document.getElementById("appointtime").max = "4:00pm";

// function messageTime() {
//     if (minTime < "8:00") {
//         alert("This time is unavailable");
//     } else if (maxTime > "16:00") {
//         alert("Too late to set an appointment");
//     }
//     else {
//         alert("Time is set");
//     }
// }

$(document).ready(function () {

    $('#time').timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '8',
        maxTime: '5:00pm',
        defaultTime: '11',
        startTime: '8:00',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});

// $(function () {

//     $("").datepicker({
//         format: "dd/mm/yyyy",
//         autoclose: true,
//         todayHighlight: true,
//         showOtherMonths: true,
//         selectOtherMonths: true,
//         autoclose: true,
//         changeMonth: true,
//         changeYear: true,
//         minDate: new Date()

//     });
// });