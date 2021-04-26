$(document).ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth + 1;
    var yyyy = today.getFullYear();


    if (dd < 10) {
        dd = '0' + dd.toString();
    }
    if (mm < 10) {
        mm = '0' + mm.toString();
    }
    var minToday = yyyy + '-' + mm + '-' + dd;


    $('#txtDate').attr('min', minToday);


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