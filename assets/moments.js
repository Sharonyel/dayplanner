
document.querySelector("#currentDay")
    .innerHTML = moment().format("MMMM Do YYYY, h:mm");
var update = function () {
    document.querySelector("#currentDay")
        .innerHTML = moment().format("MMMM Do YYYY, h:mm");
        
//    var checkTime = document.querySelectorAll("#hour");
    var currHour = moment().hour();
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

    if (currHour == 9) {
        hrblock[0].className = "col-8 description present"
        for (i = 1; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }
    }
    if (currHour == 10) {
        hrblock[1].className = "col-8 description present"
        for (i = 2; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }
    }
    if (currHour == 11) {
        hrblock[2].className ="col-8 description present"
        for (i = 3; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }
    }
    if (currHour == 12) {
        hrblock[3].className = "col-8 description present"
        for (i = 4; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }
    }
    if (currHour == 13) {
        hrblock[4].className = "col-8 description present"
        for (i = 5; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }
    }
    if (currHour == 14) {
        hrblock[5].className = "col-8 description present"
        for (i = 6; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }
    }
    if (currHour == 15) {
        hrblock[6].className = "col-8 description present"
        for (i = 7; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }

    }
    if (currHour == 16) {
        hrblock[7].className = "col-8 description present"
        for (i = 8; i < hrblock.length; i++) {
            hrblock[i].className = "col-8 description future"
        }

    }
    if (currHour == 17) {
        hrblock[8].className = "col-8 description present"
    }

}

setInterval(update, 1000);






