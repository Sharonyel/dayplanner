
document.querySelector("#currentDay")
    .innerHTML = moment().format("MMMM Do YYYY, h:mm");
var update = function () {
    document.querySelector("#currentDay")
        .innerHTML = moment().format("MMMM Do YYYY, h:mm");
        
//    var checkTime = document.querySelectorAll("#hour");
//     var currHour = moment().hour();
//     var hrblock = document.querySelectorAll(".description");
// console.log(currHour)

//    for (var j = 0; j < checkTime.length; j++){
//         if (currHour == checkTime[j]) {
//         hrblock[i].className = "present"
//         } else {
//             if (currHour >= checkTime[i]) {
//                 hrblock[1].className = "future"
//             }
//         }



//    }

var hrblock = document.querySelectorAll(".description");

    if (moment().hour() == 9) {
        hrblock[0].className = "present"
        for (i = 1; i < hrblock.length; i++) {
            hrblock[i].className = "future"
        }
    }
    if (moment().hour() == 10) {
        hrblock[1].className = "present"
        for (i = 2; i < hrblock.length; i++) {
            hrblock[i].className = "future"
        }
    }
    if (moment().hour() == 11) {
        hrblock[2].className = "present"
        for (i = 3; i < hrblock.length; i++) {
            hrblock[i].className = "future"
        }
    }
    if (moment().hour() == 12) {
        hrblock[3].className = "present"
        for (i = 4; i < hrblock.length; i++) {
            hrblock[i].className = "future"
        }
    }
    if (moment().hour() == 13) {
        hrblock[4].className = "description past present"
        for (i = 5; i < hrblock.length; i++) {
            hrblock[i].className = "description past future"
        }
    }
    if (moment().hour() == 14) {
        hrblock[5].className = "description past present"
        for (i = 6; i < hrblock.length; i++) {
            hrblock[i].className = "description past future"
        }
    }
    if (moment().hour() == 15) {
        hrblock[6].className = "description past present"
        for (i = 7; i < hrblock.length; i++) {
            hrblock[i].className = "description past future"
        }

    }
    if (moment().hour() == 16) {
        hrblock[7].className = "description past present"
        for (i = 8; i < hrblock.length; i++) {
            hrblock[i].className = "description past future"
        }

    }
    if (moment().hour() == 17) {
        hrblock[8].className = "description past present"
    }

}

setInterval(update, 1000);






