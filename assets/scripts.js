$(document).ready(function(){
 
var clickedBtn = document.querySelector("#svBtn");
var inputBox = document.querySelectorAll(".description")
// var clickedBtn = buttons;
// console.log("clickedbtn " + clickedBtn)
// console.log("c button len :" + clickedBtn.length)

// for (var i = 0; i < clickedBtn.length; i++) {

  clickedBtn.addEventListener("click", function(event) {
      var element = event.target;
            
    if (element != event.currentTarget) {
          var clickedItem = element.id;
        console.log("clicked item " + clickedItem)

var n = parseInt(clickedItem)
console.log("n " + n)
 
        contentq = inputBox[n].value;


        content = element.parentNode.parentNode.querySelector(".description").value

        // var nameText = content.trim();

        
        // localStorage.setItem("evValue", content)
   
    
        // console.log("name " + nameText)

        console.log("content " + content)
        console.log("contentq " + contentq)


//     var contentID = element.parentNode.parentNode.querySelector(".description").id
    
//     console.log("content " + content)
//     console.log(" id " + contentID)

//         localStorage.setItem("getvalue",  content);






      }


  }

  )
})
// }


// }
// ) 
// var enterName = document.querySelector("description");
// listenClick();


// function listenClick() {

// $(".saveBtn").on("click", function(event){
//         var element = event.target;
//         if (element.matches("button") === true) {  

//     var content = element.parentNode.parentNode.querySelector(".description").value
//     var contentID = element.parentNode.parentNode.querySelector(".description").id
    
//     console.log("content " + content)
//     console.log(" id " + contentID)

//         localStorage.setItem("getvalue",  content);


//         // listenClick()

//         // if (contentID == "nineA") {
//         //     nineAm = content;
//         //     localStorage.setItem("9am", nineAm);
//         //     console.log("nine am " + nineAm);
//         // }
// }
    
// })
// }  
 
    




    // alert("clicked " + );

    // var inPut = this(".description").val()

    // var nameInput = $(this).siblings(".description").value;






    

    //     var userEvent = $(".description").val();
    //     var nineValue = $("#9Event")
    //     localStorage.setItem("getvalue", userEvent);

    // console.log(userEvent);

    // var allButtons = document.querySelectorAll('.saveBtn');
    // console.log("Found", allButtons.length, "div which class starts with “button”.");
    
    // for (var i = 0; i < allButtons.length; i++) {
    //   allButtons[i].addEventListener('click', function() {
    //     var userEvent = $(".description").val();
    //     var nineValue = $("#9Event")
    //     localStorage.setItem("getvalue", userEvent);
   
    //     console.log("You clicked:", this.innerHTML);

    //     console.log("You clicked:", allButtons[i]);
    //   });
    // }
// 
//