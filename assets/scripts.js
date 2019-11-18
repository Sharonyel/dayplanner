$(document).ready(function () {

    var clickedBtn = document.querySelector("#svBtn");
    var inputBox = document.querySelectorAll(".description")
    var hourEvent = [];
    var n = 0;

getActivities();
    clickedBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var element = event.target;

        if (element.matches("button") === true) {
            var clickedItem = element.id;
            console.log("clicked item " + clickedItem)

            getActivities();


            n = parseInt(clickedItem)

            hourEvent = inputBox[n].value;
            console.log("event is " + hourEvent)

            // plannerOBJ.entry = n;
            // plannerOBJ.activity = hourEvent;    

            storeActivity();
            getActivities()

            // localStorage.setItem("plannerOBJ", JSON.stringify(plannerOBJ));

        }
        //   storeActivity();
    }
    )
    function storeActivity() {

        localStorage.setItem(n, JSON.stringify(hourEvent));
        console.log("set item")
    }

    function getActivities() {

        for (var i = 0; i < localStorage.length; i++) {
            // alert("here")
            var activities = JSON.parse(localStorage.getItem(hourEvent))
            if (activities) {
                
                console.log("hourevent " + hourEvent)
                var j = 0;
                //  for (var i = 0; i < activities.length; i++) {

                    // activities[0].value = j
                    console.log("act j  " + j)
                    // inputBox[j] = document.getElementById(j)

                // }
            }
        }


    }
    function getrefresh() {

        // for (var j = 0; j < plannerOBJ.length; j++) {
        //     plannerOBJ.entry = inputBox
        // }
    }


})
