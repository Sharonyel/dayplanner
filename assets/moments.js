
document.querySelector("#currentDay")
    .innerHTML = moment().format("MMMM Do YYYY, h:mm");
var update = function () {
    document.querySelector("#currentDay")
        .innerHTML = moment().format("MMMM Do YYYY, h:mm");
        
var hrblock = document.querySelectorAll(".description");

        if (moment().hour() == 7) {
            hrblock[0].className = "description.present"
            for (i = 1; i < hrblock.length; i++) {
                hrblock[i].className = "hrblock past future"
            }
        }
        if (moment().hour() == 8) {
            // hrblock[0].className = "hrblock past"
            hrblock[1].className = "description present"
            for (i = 2; i < hrblock.length; i++) {
                hrblock[i].className = "hrblock past future"
            }
        }
        // if (moment().hour() == 11) {
        //     inputs[1].className = "input past"
        //     inputs[2].className = "input past present"
        //     for (i = 3; i < inputs.length; i++) {
        //         inputs[i].className = "input past future"
        //     }
        // }
        // if (moment().hour() == 12) {
        //     inputs[2].className = "input past"
        //     inputs[3].className = "input past present"
        //     for (i = 4; i < inputs.length; i++) {
        //         inputs[i].className = "input past future"
        //     }
        // }
        // if (moment().hour() == 13) {
        //     inputs[3].className = "input past"
        //     inputs[4].className = "input past present"
        //     for (i = 5; i < inputs.length; i++) {
        //         inputs[i].className = "input past future"
        //     }
        // }
        // if (moment().hour() == 14) {
        //     inputs[4].className = "input past"
        //     inputs[5].className = "input past present"
        //     for (i = 6; i < inputs.length; i++) {
        //         inputs[i].className = "input past future"
        //     }
        // }
        // if (moment().hour() == 15) {
        //     inputs[5].className = "input past"
        //     inputs[6].className = "input past present"
        //     for (i = 7; i < inputs.length; i++) {
        //         inputs[i].className = "input past future"
        //     }
    
        // }
        // if (moment().hour() == 16) {
        //     inputs[6].className = "input past"
        //     inputs[7].className = "input past present"
        //     for (i = 8; i < inputs.length; i++) {
        //         inputs[i].className = "input past future"
        //     }
    
        // }
        if (moment().hour() == 9) {
            hrblock[7].className = "description past"
            hrblock[8].className = "description past present"
        }
        

    else{
        hrblock.className = "hrblock past"
    
    }
    

}

setInterval(update, 1000);

// var present = moment().format("h");
// console.log(present)







