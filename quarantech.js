// form not the main concern for web itinerary.
// leave as it is if short of time

function myFunction() {
    // window.location.reload();
    console.log("my function called!");
 var clr = document.getElementById('wheelie').style.background;
    if(clr=='white'){
        document.getElementById('wheelie').style.background='skyblue';
    }
    else{
        document.getElementById('wheelie').style.background='white';
    }
    }
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
 