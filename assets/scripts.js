// Variables
    var clickedBtn = document.querySelector("#svBtn");
    var inputBox = document.querySelectorAll(".description")
    var hourEvent = [];
    var storedActivities = [];
    var n = 0;

// Load data from local storage on start or refresh
    getActivities();

// Click button to add hour event to the planner
    clickedBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var element = event.target;

        if (element.matches("button") === true) {
            var clickedItem = element.id;
            n = parseInt(clickedItem)
            hourEvent = inputBox[n].value;
            storeActivity();
        }     
    } )

// Store event to local storage
    function storeActivity() {
        localStorage.setItem(n, JSON.stringify(hourEvent));
    }
// Load data from local storage
    function getActivities() {
        for (var i = 0; i < 9; i++) {
        var str = (localStorage.getItem(i))
        storedActivities = JSON.parse(str)
        inputBox[i].value = storedActivities
        }
    }
