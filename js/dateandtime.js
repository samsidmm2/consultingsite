import flatpickr from 'flatpickr';

var selectDate = {
    minDate: "today",
    maxDate: new Date().fp_incr(45), // 45 days from now
    enableTime: true,
    dateFormat: "H:i",
    minTime: "16:00",
    maxTime: "22:30",
};
flatpickr(document.querySelector("#widget"), options);


// function selectTime() {

// }