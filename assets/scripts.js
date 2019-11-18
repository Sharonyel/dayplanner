$(document).ready(function () {

    var clickedBtn = document.querySelector("#svBtn");
    var inputBox = document.querySelectorAll(".description")
    var hourEvent = [];
    var storedActivities = [];
    var n = 0;

getActivities();
    clickedBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var element = event.target;

        if (element.matches("button") === true) {
            var clickedItem = element.id;

            n = parseInt(clickedItem)

            hourEvent = inputBox[n].value;
            storeActivity();
        }
        
    }
    )
    function storeActivity() {

        localStorage.setItem(n, JSON.stringify(hourEvent));
    }

    function getActivities() {

        for (var i = 0; i < 9; i++) {

        var str = (localStorage.getItem(i))
        storedActivities = JSON.parse(str)
         console.log("storedActivities " + storedActivities)
       
         inputBox[i].value = storedActivities
         
         console.log("inputbox " + inputBox[i].value);
        }
    }
})
