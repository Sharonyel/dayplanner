document.querySelector("#currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
var update = function () {
    document.querySelector("#currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');

        if(moment().hour() === moment().hour(9)){

        }

}
setInterval(update, 1000);